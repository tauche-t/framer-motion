import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  /* background-color: rgba(255, 255, 255, 0.2); */
  background-color: #fff;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: #3498DB;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function LayoutComponent() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        { !clicked ? <Circle layoutId="circle" /> : null }
      </Box>
      <Box>
        { clicked ? <Circle layoutId="circle" /> : null }
      </Box>
    </Wrapper>
  );
}

export default LayoutComponent;
