
// export const Hero = () => {
//   return (
//     <div>Hero</div>
//   )
// }


import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { shema } from "../../shema";

const heroConfig = {
  steps: 9,
  w: 200,
  h: 300,
  cadrW: 100,
  cadrH: 75,
}
const T = {
  RUN: "RUN",
  SWIMMING: "SWIMMING",
  STAY: "STAY",
  JUMP: "JUMP",
}

const routeType = {
  Left: "ArrowLeft",
  Right: "ArrowRight"
}

// {
//   type : 'RUN',
//   widthStart : 0, 
//   widthEnd : 4000, 
// }

//https://pixabay.com/


let renderFrame = 0;
let appScreen = null;
let isBlockScrollTop = false

// document.querySelector('#root').scrollTo({top : 500, behavior  :"smooth"})

export default function Hero({run_game}) {
  const spriteRef = useRef(null);
  const [frame, setFrame] = useState(renderFrame);
  const [isTurn, setIsTurn] = useState(false)
  const [bottomHero, setBottomHero] = useState('11vh')



  const changeOneFrame = (frame) => {
    renderFrame = frame;
    setFrame(frame)
  }

  const moveHero = (steps, typeRoute) => {
    const newFrameIndex = steps.indexOf(renderFrame);

    if (typeRoute === routeType.Right) {
      if (newFrameIndex === -1) return changeOneFrame(steps[0]);
      if (newFrameIndex === steps.length - 1) return changeOneFrame(steps[0]);
      return changeOneFrame(steps[newFrameIndex + 1]);

    } else if (typeRoute === routeType.Left) {
      const length = steps.length - 1; // 2
      if (newFrameIndex === -1) return changeOneFrame(steps[length]);
      if (newFrameIndex === 0) return changeOneFrame(steps[length]);
      return changeOneFrame(steps[newFrameIndex - 1]);
    }
  }

  const changeTopPositionHero = (typeMove, preventDefault, turn) => {
    if (isBlockScrollTop) return preventDefault();
    const scrollTop = appScreen.scrollTop; // 500
    const newTop = typeMove.top; // 0
    // console.log(newTop)
    if (scrollTop === 0 && newTop !== 0) {
      preventDefault()
      isBlockScrollTop = true;

      if (turn) { //! run to Left
        console.log(typeMove, 'typeMove')
        console.log(appScreen.scrollLeft, 'typeMove')
        appScreen.scrollTo({ top: 400, left: typeMove.widthEnd - 90, behavior: "smooth" })
        setTimeout(() => isBlockScrollTop = false, 400)

      } else {
        appScreen.scrollTo({ top: 400, left: typeMove.widthStart + 90, behavior: "smooth" })
        setTimeout(() => isBlockScrollTop = false, 400)
      }

    } else if (scrollTop !== 0 && newTop === 0) {
      preventDefault()
      isBlockScrollTop = true;

      if (turn) { //!
        console.log(typeMove, 'typeMove')
        console.log(appScreen.scrollLeft, 'typeMove')

        appScreen.scrollTo({ top: newTop, left: typeMove.widthEnd - 90, behavior: "smooth" })
        setTimeout(() => isBlockScrollTop = false, 400)

      } else {
        appScreen.scrollTo({ top: newTop, left: typeMove.widthStart + 90, behavior: "smooth" })
        setTimeout(() => isBlockScrollTop = false, 400)
      }


    }

  }
  const testFunction = () => {
    appScreen.scrollTo({ top: 500, behavior: "smooth" })
  }

  const changeFrame = (typeRoute, preventDefault, turn) => {
    const scrollLeft = appScreen.scrollLeft;
    const typeMove = shema.heroMove.find(({ widthStart, widthEnd }) => scrollLeft >= widthStart - (turn ? 0 : 30) && widthEnd + (turn ? 30 : 0) >= scrollLeft);

    changeTopPositionHero(typeMove, preventDefault, turn)



    // appScreen.scrollTo({top : typeMove.top, behavior : "smooth"})
    if (typeMove.type === T.SWIMMING) {
      setBottomHero("1vh"); // Персонаж опускается ниже
    } else {
      setBottomHero("11vh"); // Возвращается в обычное положение
    }
  

    switch (typeMove.type) {
      case T.RUN: return moveHero([1, 2], typeRoute);
      case T.SWIMMING: return moveHero([3, 4, 5], typeRoute);

      default: return setFrame((prev) => (prev + 1) % heroConfig.steps);
    }
    // stay 0
    // run 1 2
    // swiming 3 4 5 
    // jump 6 7 

    // setFrame((prev) => (prev + 1) % heroConfig.steps);
  };

    // Эффект анимации через GSAP
  useEffect(() => {
    gsap.to(spriteRef.current, {
      backgroundPositionX: `-${frame * heroConfig.w}px`,
      duration: 0.01, // Скорость
      ease: `steps(${heroConfig.steps})`, // Переход через 6 кадров
    });
  }, [frame]); // Запуск анимации при изменении frame

  // Обработка нажатий клавиш
  useEffect(() => {
    appScreen = document.querySelector('#root')
    if(run_game === false) return;

    const handleKeydown = (e) => {
      // const preventDefault = () =>{ console.log('s')}
      const preventDefault = () => { e.preventDefault(); }
      //  this
      switch (e.key) {
        case routeType.Left: setIsTurn(true); changeFrame(e.key, preventDefault, true); break;
        case routeType.Right: setIsTurn(false); changeFrame(e.key, preventDefault, false); break;
      }
    };

    const handleResize = () => {
      const height = window.innerHeight;
      // if(height > )
    }

    window.addEventListener("keydown", handleKeydown);

    window.addEventListener("resize", handleResize);
    appScreen?.focus()

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("resize", handleResize);
    };
  }, [run_game]);

  return (
    <div className="flex flex-col items-center mt-10" style={{ position: 'fixed', bottom: bottomHero, left: '6vw', height: '200px', width: '200px', zIndex: 20 }}>
      <div
        ref={spriteRef}
        className={`w-[${heroConfig.w}px] h-[${heroConfig.h}px]`}
        style={{
          backgroundImage: "url('/images/hero/robby-slides.png')",
          backgroundSize: `${heroConfig.steps * heroConfig.w}px ${heroConfig.h}px`,
          width: `${heroConfig.w}px`,
          height: `${heroConfig.h / 2}px`,
          transform: `rotateY(${isTurn ? 180 : 0}deg)`
        }}
      />
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={testFunction}
        >
        </button>
      </div>
    </div>
  );
}
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function RunningCharacter() {
//   const [frame, setFrame] = useState(0);
//   const [position, setPosition] = useState(0);
//   const [direction, setDirection] = useState(1); // 1 - вправо, -1 - влево
//   const [isRunning, setIsRunning] = useState(false);

//   const totalFrames = 8; // Количество кадров анимации бега
//   const frameWidth = 128; // Ширина одного кадра (подстрой под спрайт)

//   // Анимация смены кадров
//   useEffect(() => {
//     if (!isRunning) return;

//     const interval = setInterval(() => {
//       setFrame((prev) => (prev + 1) % totalFrames);
//     }, 100);

//     return () => clearInterval(interval);
//   }, [isRunning]);

//   // Обработчик нажатий клавиш
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "ArrowRight") {
//         setDirection(1);
//         setIsRunning(true);
//       } else if (e.key === "ArrowLeft") {
//         setDirection(-1);
//         setIsRunning(true);
//       }
//     };

//     const handleKeyUp = (e) => {
//       if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
//         setIsRunning(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("keyup", handleKeyUp);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("keyup", handleKeyUp);
//     };
//   }, []);

//   // Обновление позиции персонажа
//   useEffect(() => {
//     if (!isRunning) return;

//     const move = setInterval(() => {
//       setPosition((prev) => prev + direction * 10);
//     }, 50);

//     return () => clearInterval(move);
//   }, [isRunning, direction]);

//   return (
//     <motion.div
//       animate={{ x: position }}
//       transition={{ ease: "linear", duration: 0.1 }}
//       className="w-32 h-32 overflow-hidden"
//       style={{
//         backgroundImage: "url('/images/hero/robby-slides.png')",
//         backgroundPosition: `-${frame * frameWidth}px 0`,
//         backgroundSize: "cover",
//         transform: `scaleX(${direction})`, // Отражение при движении влево
//       }}
//     />
//   );
// }
