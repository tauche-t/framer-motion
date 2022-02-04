import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  /* background-color: rgba(255, 255, 255, 0.2); */
  background-color: #fff;
  border-radius: 45px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 0;
`;


const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    y: 20,
  },
}

const box = {
  entry: (isBack: boolean) => {
    return {
      x: isBack ? -300 : 300,
      opacity: 0,
      scale: 0,
    }
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (isBack: boolean) => {
    return {
      x: isBack ? 300 : -300,
      opacity: 0,
      scale: 0,
    }
  }
}

function Presence() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);

  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <Wrapper>
      <div style={{ display: 'flex' }}>
        <AnimatePresence custom={back}>
            <Box custom={back} variants={box} initial="entry" animate="center" exit="exit" key={visible}>{visible}</Box>
        </AnimatePresence>
      </div>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>

      {/* <div>
        <AnimatePresence>
          { showing ? <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving" /> : null }
        </AnimatePresence>
        <button onClick={toggleShowing}>Click</button>
      </div> */}
    </Wrapper>
  );
}

export default Presence;
