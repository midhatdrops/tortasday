import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import path from 'path';

// const PiePath = path.join(__dirname, '../', 'assets/', 'piegif.gif');

const PieSpan = styled.span`
  @media (max-width: 540px) and (max-height: 720px) {
    width: 60%;
    height: auto;
    line-height: 10px;
    word-break: break-all;
    word-wrap: break-word;
    opacity: 1;
    color: whitesmoke;
    font-family: 'Ballet', cursive;
    font-size: 35px;
    letter-spacing: 3px;
    font-weight: 200;
    padding: 10px;
    position: relative;
    top: 100px;
    left: 40px;
  }
`;

const PieP = styled.p`
  @media (max-width: 540px) and (max-height: 720px) {
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
`;

const Pie = styled.div`
  @media (max-width: 540px) and (max-height: 720px) {
    width: 100%;
    height: 100%;
    background-image: url('https://i.pinimg.com/originals/92/33/6d/92336da6b28d02c2f131eccdfb664168.gif');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 30px;
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
