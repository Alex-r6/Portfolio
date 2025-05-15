import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { shema } from "../../shema";
import { getIsTouchDevice, linkIMG } from "../../helper/helper";
// !
// function throttle(callback, delay) {
//   let lastCall = 0;

//   return function (...args) {
//     const now = Date.now();

//     if (now - lastCall >= delay) {
//       lastCall = now;
//       callback.apply(this, args);
//     }
//   };
// }

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
let glassElement = null;
let see_groundOne = null;
let isBlockScrollTop = false;

const oneSizeHeight = window.innerHeight * 0.01;
const sizeHeight = window.innerHeight;
const deviceWidth = window.innerWidth



let sizeHero = {
  ground: '19vh',
  watter: '1vh'
}

let heightScrollTop = 0

if (deviceWidth <= 450) {
  sizeHero = {
    ground: oneSizeHeight * 17,
    watter: '1vh'
  }
  heightScrollTop = window.innerHeight * 0.85
} else {
  sizeHero = {
    ground: '19vh',
    watter: '2vh'
  }
  heightScrollTop = window.innerHeight * 0.7
}

const isTouchDevice = getIsTouchDevice()
let lastScrollLeft = 0;
let ignoreNextScroll = false;

// let isStopScroll = false
let isHeroTransitioning = false;
const isIphone = /iPhone/i.test(navigator.userAgent);

export default function Hero({ run_game }) {
  const spriteRef = useRef(null);
  const [frame, setFrame] = useState(renderFrame);
  const [isTurn, setIsTurn] = useState(false)
  const [positionHero, setPositionHero] = useState('auto')


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

  const boostFrames = (steps, route, count = 6, delay = 250) => {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        moveHero(steps, route);
        console.log('move')
      }, i * delay);
    }
  };
  

  const changeTopHero = (is) => {
    const info = glassElement
    console.log(see_groundOne, window.innerHeight - 180)
    if (is) {

      if (deviceWidth <= 320) setPositionHero(window.innerHeight - 460 + 'px')
      else if (deviceWidth <= 590) setPositionHero(window.innerHeight - 280 + 'px')
      else if (deviceWidth <= 690) setPositionHero(window.innerHeight - 240 + 'px')
      else setPositionHero(window.innerHeight - 180 + 'px')
    } else {
      setPositionHero(info.top - 150 + 42 + 'px')
    }
  }

  const changeTopPositionHero = (typeMove, preventDefault, turn, touchX) => {
    if (isBlockScrollTop || isHeroTransitioning) return preventDefault();

    const scrollTop = appScreen.scrollTop;
    const newTop = typeMove.top;

    const targetLeft = turn
      ? typeMove.widthEnd - 90
      : typeMove.widthStart + 90;

    const isGoingDown = scrollTop === 0 && newTop !== 0;
    const isGoingUp = scrollTop !== 0 && newTop === 0;

    if (isGoingDown || isGoingUp) {
      preventDefault();
      isBlockScrollTop = true;
      isHeroTransitioning = true;

      const scrollTarget = {
        top: isGoingDown ? heightScrollTop : newTop,
        behavior: "smooth",
      };
      const scrollLeft = touchX || appScreen.scrollLef;

      if (Math.abs(scrollLeft - targetLeft) > 10) {
        const currentScrollLeft = scrollLeft;
        scrollTarget.left = currentScrollLeft + (turn ? - 90 : 90);
        ignoreNextScroll = true;
      }

      appScreen.scrollTo(scrollTarget);

      setTimeout(() => {
        isBlockScrollTop = false;
        isHeroTransitioning = false;
        lastScrollLeft = Math.max(scrollLeft, 0);
      }, sizeHeight >= 820 ? 600 : 400);
    }
  };

  const moveFrameHero = (typeMove, typeRoute) => {
    switch (typeMove.type) {
      case T.RUN: return boostFrames([1, 2], typeRoute, isIphone ? 2 : 6, 90);
      case T.SWIMMING: return boostFrames([3, 4, 5], typeRoute, isIphone ? 3 : 6, 90);
    
      default: return setFrame((prev) => (prev + 1) % heroConfig.steps);
    }
  }

  const changeFrameTouch = (typeRoute, preventDefault, turn, touchX) => {
    const scrollLeft =touchX// appScreen.scrollLeft;
    const typeMove = shema.heroMove.find(({ widthStart, widthEnd }) => scrollLeft >= widthStart - (turn ? 0 : 30) && widthEnd + (turn ? 30 : 0) >= scrollLeft);

    changeTopPositionHero(typeMove, preventDefault, turn, touchX)

    if (typeMove.type === T.SWIMMING) {
      changeTopHero(true)
    } else {
      changeTopHero()
    }

    moveFrameHero(typeMove, typeRoute);
    // setTimeout(() => moveFrameHero(typeMove, typeRoute), 160)

    // switch (typeMove.type) {
    //   case T.RUN: return boostFrames([1, 2], typeRoute, 6, 10);
    //   case T.SWIMMING: return boostFrames([3, 4, 5], typeRoute, 6, 10);
    
    //   default: return setFrame((prev) => (prev + 1) % heroConfig.steps);
    // }
    
  };
  const changeFrame = (typeRoute, preventDefault, turn, touchX) => {
    const scrollLeft = appScreen.scrollLeft;
    const typeMove = shema.heroMove.find(({ widthStart, widthEnd }) => scrollLeft >= widthStart - (turn ? 0 : 30) && widthEnd + (turn ? 30 : 0) >= scrollLeft);

    changeTopPositionHero(typeMove, preventDefault, turn, touchX)

    if (typeMove.type === T.SWIMMING) {
      changeTopHero(true)
    } else {
      changeTopHero()
    }

    switch (typeMove.type) {
      case T.RUN: return boostFrames([1, 2], typeRoute, 6, 10);
      case T.SWIMMING: return boostFrames([3, 4, 5], typeRoute, 6, 10);
    
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

  useEffect(() => {
    appScreen = document.querySelector('#root')
    glassElement = document.querySelector('.glassElem-0')?.getBoundingClientRect();
    see_groundOne = document.querySelector('#see_ground-0')?.getBoundingClientRect();
    if (run_game === false) return;


    const handleKeydown = (e) => {
      const preventDefault = () => { e.preventDefault(); }
      switch (e.key) {
        case routeType.Left: setIsTurn(true); changeFrame(e.key, preventDefault, true); break;
        case routeType.Right: setIsTurn(false); changeFrame(e.key, preventDefault, false); break;
      }
    };

    const handleTouchStart = (e) => {
      if(e.target.className.includes('cv_img')) return 
      if (isBlockScrollTop) return;
      const touch = e.touches[0];
      const heroPosition = spriteRef.current?.getBoundingClientRect();

      const scrollLeft = appScreen.scrollLeft;
      let touchX = touch.clientX + scrollLeft
      const fixedPosition = touchX - heroPosition.width;
      let positionMove = null;

      const speedBoost = 200;
      if ((fixedPosition - scrollLeft) > 0) {
        positionMove = routeType.Right;
        touchX += speedBoost;
      } else {
        positionMove = routeType.Left;
        touchX -= (heroPosition.width + speedBoost);
      }



      // if((fixedPosition - scrollLeft) > 0) {
      //   positionMove = routeType.Right;
      // } else { 
      //   positionMove = routeType.Left;
      //   touchX -= heroPosition.width;
      // }


      // console.log(fixedPosition, 'fixedPosition ')
      // console.log(scrollLeft, 'scrollLeft ')
      // console.log(fixedPosition - scrollLeft, 'fixedPosition - scrollLeft ')


      appScreen.scrollTo({
        left: touchX,
        behavior: "smooth",
      });
      const isTurn = positionMove === routeType.Left;
      setIsTurn(isTurn)
      changeFrameTouch(positionMove, () => { }, isTurn, touchX)
    };

    if (isTouchDevice) {
      appScreen.style.overflowX = 'hidden'
      appScreen.addEventListener('touchstart', handleTouchStart);
    }

    // const handleScroll = (e) => {
    //   if (ignoreNextScroll || isStopScroll || isBlockScrollTop) {
    //     ignoreNextScroll = false; 
    //     e.preventDefault();
    //     return;
    //   }

    //   isStopScroll = true;
    //   setTimeout(() => isStopScroll = false, 220);

    //   const currentScrollLeft = appScreen?.scrollLeft ?? document.documentElement.scrollLeft ?? window.pageXOffset;
    //   const diff = currentScrollLeft - lastScrollLeft;

    //   if (Math.abs(diff) < 3) return; 

    //   if (diff > 0) {
    //     setIsTurn(false);
    //     changeFrame(routeType.Right, () => { }, false);
    //   } else {
    //     setIsTurn(true);
    //     changeFrame(routeType.Left, () => { }, true);
    //   }

    //   lastScrollLeft = Math.max(currentScrollLeft, 0);
    // };

    // const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("keydown", handleKeydown);
    appScreen?.focus();

    if (glassElement) {
      changeTopHero()
    }

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      isTouchDevice && appScreen.removeEventListener('touchstart', handleTouchStart);
      console.log('game')
    };
  }, [run_game]);


  return (
    <div className={"flex flex-col items-center mt-10 hero-c " + (run_game ? 'hero-user' : '')} style={{ position: 'fixed', top: positionHero, bottom: '19vh', left: isTouchDevice ? '30%' : '4vw', height: '135px', width: '200px', zIndex: 20 }}>
      <div
        ref={spriteRef}
        className={`w-[${heroConfig.w}px] h-[${heroConfig.h}px] `}
        style={{
          backgroundImage: `url('${linkIMG}/hero/robby-slides.png')`,
          backgroundSize: `${heroConfig.steps * heroConfig.w}px ${heroConfig.h}px`,
          width: `${heroConfig.w}px`,
          height: `${heroConfig.h / 2}px`,
          transform: `rotateY(${isTurn ? 180 : 0}deg)`,
          opacity: run_game ? 1 : 0
        }}
      />

    </div>
  );
}
