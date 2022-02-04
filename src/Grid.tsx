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
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  /* background-color: #fff; */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  
  /* &:first-child {
    transform-origin: 100% 100%;
  }
  &:last-child {
    transform-origin: -50% -50%;
  } */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 35vw;
  gap: 10px;
  /* div:first-child,
  div:last-child {
    grid-column: span 2;
  } */
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 65px;
  height: 65px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Button = styled(motion.button)`
  border: 1px solid #ECF0F1;
  outline: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #3498DB;
  padding: 10px;
  margin-top: 50px;
  cursor: pointer;
`;


function GirdBox() {
  const [clicked, setClicked] = useState(false);
  const toggle = () => {
    setClicked((prev) => !prev);
  }

  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <div>
        <Grid>
          <Box style={{ originX: 1, originY: 1 }} onClick={() => setId("1")} key={"1"} layoutId="1" whileHover={{ scale: 1.1, }} />
          <Box>
            { !clicked ? <Circle layoutId="circle" /> : null }
          </Box>
          <Box>
            { clicked ? <Circle layoutId="circle" /> : null }
          </Box>
          <Box style={{ originX: 0, originY: 0 }} onClick={() => setId("4")} key={"4"} layoutId="4" whileHover={{ scale: 1.1 }} />
        </Grid>
        <AnimatePresence>
          { id ? <Overlay onClick={() => setId(null)} initial={{ backgroundColor:"rgba(0,0,0,0)" }} animate={{ backgroundColor:"rgba(0,0,0,0.5)" }} exit={{ backgroundColor:"rgba(0,0,0,0)" }}>
            <Box layoutId={id} style={{ width: 300, height: 200, background: 'white' }} />
          </Overlay> : null }
        </AnimatePresence>
      </div>
      <AnimatePresence>
        { clicked ? <Button onClick={toggle} animate={{ color: "#F39C12", scale: 1.2 }}>Switch</Button> : <Button onClick={toggle} animate={{ color: "#3498DB", scale: 1 }}>Switch</Button> }
      </AnimatePresence>
    </Wrapper>
  );
}

export default GirdBox;
