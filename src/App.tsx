import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  /* background-color: rgba(255, 255, 255, 0.2); */
  background-color: #fff;
  border-radius: 45px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #fff;
  width: 70px;
  height: 70px;
  place-self: center;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", damping: 5 } }
}

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    }
  }
}

const circleVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  }
}


const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const bpxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" }
}


const Svg = styled.svg`
  width: 300px;
  height: 300px;
`;

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);

  return (
    <Wrapper>
      <Svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/Svg" viewBox="0 0 448 512">
        <motion.path 
          initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }} 
          animate={{ pathLength: 1, fill: "rgba(255, 255, 255, 1)" }}
          transition={{ 
            default: { duration: 5 },
            fill: { duration: 2, delay: 2 },
          }}
          stroke="white"
          strokeWidth="3"
          d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
        ></motion.path>
      </Svg>


      {/* <Box style={{ x, scale }} drag="x" dragSnapToOrigin /> */}
      {/* <Box variants={myVars} initial="start" animate="end" /> */}
      {/* <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box> */}
      {/* <motion.div></motion.div> */}
      {/* <BiggerBox ref={biggerBoxRef}>
        <Box drag dragSnapToOrigin dragElastic={1} dragConstraints={biggerBoxRef} variants={bpxVariants} whileHover="hover" whileTap="click" />
      </BiggerBox> */}

    </Wrapper>
  );
}

export default App;
