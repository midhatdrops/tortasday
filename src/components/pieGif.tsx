import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import path from 'path';

// const PiePath = path.join(__dirname, '../', 'assets/', 'piegif.gif');

const PieSpan = styled.span`
  width: 80%;
  height: auto;
  line-height: 10px;
  word-break: break-all;
  word-wrap: break-word;
  opacity: 1;
  color: whitesmoke;
  font-family: 'Ballet', cursive;
  font-size: 4rem;
  letter-spacing: 3px;
  font-weight: 200;
  text-align: center;
  /* position: fixed;
  top: 10rem;
  left: 15rem; */

  @media (max-width: 540px) {
    width: 100%;
    height: auto;
    line-height: 10px;
    word-break: break-all;
    word-wrap: break-word;
    opacity: 1;
    color: whitesmoke;
    font-family: 'Ballet', cursive;
    font-size: 2.5rem;
    letter-spacing: 3px;
    font-weight: 200;
    padding: 10px;
    position: relative;
    /* top: 100px;
    left: 40px; */
  }
  @media (max-width: 281px) {
    width: 100%;
    height: auto;
    line-height: 20px;
    word-break: break-all;
    word-wrap: break-word;
    opacity: 1;
    color: whitesmoke;
    font-family: 'Ballet', cursive;
    font-size: 2rem;
    letter-spacing: 3px;
    padding: 0px;
    font-weight: 200;
    text-align: center;
    margin-left: 30px;
    /* padding: 10px; */
    /* top: 100px;
    left: 40px; */
  }
`;

const PieP = styled.p`
  width: 50%;
  height: 100%;
  max-height: 500px;
  line-height: 20px;
  word-wrap: break-word;
  color: whitesmoke;
  font-family: 'Shippori Mincho', serif;
  font-size: 1rem;
  font-weight: 400;
  opacity: 1;
  text-align: justify;
  margin-top: 20px;
  overflow-y: hidden;
  position: relative;
  top: 150px;
  @media (max-width: 540px) {
    width: 50%;
    height: 100%;
    max-height: 500px;
    line-height: 20px;
    word-wrap: break-word;
    color: whitesmoke;
    font-family: 'Shippori Mincho', serif;
    font-size: 15px;
    font-weight: 400;
    opacity: 1;
    text-align: justify;
    margin-top: 20px;
    overflow-y: hidden;
    position: relative;
    top: 150px;
  }
  @media (max-width: 280px) {
    height: auto;
  }
`;

const Pie = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://i.pinimg.com/originals/92/33/6d/92336da6b28d02c2f131eccdfb664168.gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* margin-top: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  & div {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 540px) {
    width: 100%;
    height: 100%;
    background-image: url('https://i.pinimg.com/originals/92/33/6d/92336da6b28d02c2f131eccdfb664168.gif');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    /* margin-top: 30px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    & div {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

interface Piegif {
  lang: string;
}

// eslint-disable-next-line react/prop-types
export const PieGif: React.FC<Piegif> = ({ lang }) => {
  return (
    <Pie
      as={motion.div}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
      transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.5 }}
    >
      <div>
        <PieSpan
          as={motion.span}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
          transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.7 }}
        >
          {lang === 'ptbr' ? 'Dia da torta' : 'The Pies Day'}
        </PieSpan>
        <PieP
          as={motion.p}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
          transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.5 }}
        >
          Anualmente os fãs da torta se reunem nesse dia sagrado para conversar
          a respeito do grande alimento chamado: <strong>Torta</strong>. Salgada
          ou doce. De frango ou chocolate. Seu recheio pouco importa. Para nós
          reles mortais só nos basta uma coisa: saudar e apreciar essa comida
          divina.
        </PieP>
      </div>
    </Pie>
  );
};
