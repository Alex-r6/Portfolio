import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { shema } from "../../shema";
import { getIsTouchDevice, linkIMG } from "../../helper/helper";


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

let renderFrame = 0;
let appScreen = null;
let isBlockScrollTop = false


const sizeHero = {
  ground : "19vh",
  watter : '1vh'
}

const isTouchDevice = getIsTouchDevice()
let lastScrollLeft = 0;

export default function Hero({ run_game }) {
  const spriteRef = useRef(null);
  const [frame, setFrame] = useState(renderFrame);
  const [isTurn, setIsTurn] = useState(false)
  const [bottomHero, setBottomHero] = useState(sizeHero.ground)
  
  
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
      const length = steps.length - 1; 
      if (newFrameIndex === -1) return changeOneFrame(steps[length]);
      if (newFrameIndex === 0) return changeOneFrame(steps[length]);
      return changeOneFrame(steps[newFrameIndex - 1]);
    }
  }

  const changeTopPositionHero = (typeMove, preventDefault, turn) => {
    if (isBlockScrollTop) return preventDefault();
    const scrollTop = appScreen.scrollTop; 
    const newTop = typeMove.top;
    if (scrollTop === 0 && newTop !== 0) {
      preventDefault()
      isBlockScrollTop = true;

      const heightScrollTop = window.innerHeight * 0.45

      if (turn) { 
        appScreen.scrollTo({ top: heightScrollTop, left: typeMove.widthEnd - 90, behavior: "smooth" })
        setTimeout(() => isBlockScrollTop = false, 400)

      } else {
        appScreen.scrollTo({ top: heightScrollTop, left: typeMove.widthStart + 90, behavior: "smooth" })
        setTimeout(() => isBlockScrollTop = false, 400)
      }

    } else if (scrollTop !== 0 && newTop === 0) {
      preventDefault()
      isBlockScrollTop = true;

      if (turn) { 
        appScreen.scrollTo({ top: newTop, left: typeMove.widthEnd - 90, behavior: "smooth" })
        setTimeout(() => isBlockScrollTop = false, 400)

      } else {
        appScreen.scrollTo({ top: newTop, left: typeMove.widthStart + 90, behavior: "smooth" })
        setTimeout(() => isBlockScrollTop = false, 400)
      }


    }

  }

  const changeFrame = (typeRoute, preventDefault, turn) => {
    const scrollLeft = appScreen.scrollLeft;
    const typeMove = shema.heroMove.find(({ widthStart, widthEnd }) => scrollLeft >= widthStart - (turn ? 0 : 30) && widthEnd + (turn ? 30 : 0) >= scrollLeft);

    changeTopPositionHero(typeMove, preventDefault, turn)

    if (typeMove.type === T.SWIMMING) {
      setBottomHero(sizeHero.watter); 
    } else {
      setBottomHero(sizeHero.ground); 
    }


    switch (typeMove.type) {
      case T.RUN: return moveHero([1, 2], typeRoute);
      case T.SWIMMING: return moveHero([3, 4, 5], typeRoute);

      default: return setFrame((prev) => (prev + 1) % heroConfig.steps);
    }
  };

  useEffect(() => {
    gsap.to(spriteRef.current, {
      backgroundPositionX: `-${frame * heroConfig.w}px`,
      duration: 0.01, 
      ease: `steps(${heroConfig.steps})`, 
    });
  }, [frame]); 

  // useEffect(() => {
  //   appScreen = document.querySelector('#root')
  //   if (run_game === false) return;

  //   const handleKeydown = (e) => {
  //     const preventDefault = () => { e.preventDefault(); }
  //     switch (e.key) {
  //       case routeType.Left: setIsTurn(true); changeFrame(e.key, preventDefault, true); break;
  //       case routeType.Right: setIsTurn(false); changeFrame(e.key, preventDefault, false); break;
  //     }
  //   };


  //   window.addEventListener("keydown", handleKeydown);
  //   appScreen?.focus()

  //   return () => {
  //     window.removeEventListener("keydown", handleKeydown);
  //   };
  // }, [run_game]);

  useEffect(() => {
    appScreen = document.querySelector('#root')
    if (run_game === false) return;
  
    const handleKeydown = (e) => {
      const preventDefault = () => { e.preventDefault(); }
      switch (e.key) {
        case routeType.Left: setIsTurn(true); changeFrame(e.key, preventDefault, true); break;
        case routeType.Right: setIsTurn(false); changeFrame(e.key, preventDefault, false); break;
      }
    };
  
    const handleScroll = () => {
      
        let currentScrollLeft = appScreen.scrollLeft || window.pageXOffset;
      
        if (currentScrollLeft > lastScrollLeft) {
          setIsTurn(false); changeFrame(routeType.Right, () => {}, false); 
        } else if (currentScrollLeft < lastScrollLeft) {
          setIsTurn(true); changeFrame(routeType.Left, () => {}, true);
        }
      
        lastScrollLeft = currentScrollLeft <= 0 ? 0 : currentScrollLeft;

    };
  
    window.addEventListener("keydown", handleKeydown);
    isTouchDevice && appScreen.addEventListener("scroll", handleScroll);
    appScreen?.focus();
  
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      isTouchDevice && appScreen.removeEventListener("scroll", handleScroll);
    };
  }, [run_game]);
  

  return (
    <div className="flex flex-col items-center mt-10" style={{ position: 'fixed', bottom: bottomHero, left: '6vw', height: '135px', width: '200px', zIndex: 20 }}>
      <div
        ref={spriteRef}
        className={`w-[${heroConfig.w}px] h-[${heroConfig.h}px]`}
        style={{
          backgroundImage: `url('${linkIMG}/hero/robby-slides.png')`,
          backgroundSize: `${heroConfig.steps * heroConfig.w}px ${heroConfig.h}px`,
          width: `${heroConfig.w}px`,
          height: `${heroConfig.h / 2}px`,
          transform: `rotateY(${isTurn ? 180 : 0}deg)`
        }}
      />
     
    </div>
  );
}
