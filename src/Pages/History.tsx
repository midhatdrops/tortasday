import React from 'react';
import styled from 'styled-components';
// import img from '../assets/artemis-svg.svg';
import { motion } from 'framer-motion';
import { Navbar } from '../components/navBar';
import { Artemis } from '../components/artemis';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  color: whitesmoke;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const FrameGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

// const Svg = styled.svg`
//   width: 100%;
//   height: 100%;
//   grid-column: 1;
// `;

const Text = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: 2;
  font-family: 'Ubuntu', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
`;

export const History = () => {
  return (
    <Background>
      <Navbar lang="eng" />
      <FrameGrid>
        <Artemis width="100%" height="100%" gridColumn={1} />
        <Text
          as={motion.div}
          variants={{
            show: { opacity: 1, x: '0' },
            hidden: { opacity: 0, x: '100%' },
          }}
          initial="hidden"
          animate="show"
          transition={{ ease: 'easeInOut', duration: 1, delay: 0.3 }}
        >
          Foi na Grécia antiga que a Torta surgiu. Ela era uma oferenda que os
          humanos ofereciam à Deusa Ártemis, divindade ligada às colheitas, à
          natureza, à caça e à fertilidade, o doce oferecido à deusa grega era
          redondo, tendo uma ligação com a lua. No Brasil, é um alimento cozido
          ao forno, feito com massa de farinha e recheado com carne, camarão,
          palmito ou ingredientes doces, como a torta holandesa. Em Portugal,
          “torta” é um bolo enrolado, que no Brasil é conhecido como rocambole.
          <br />
          <br />
          As tortas doces do Brasil são muitas vezes conhecidas como “tartes“. A
          torta Holandesa, essa delícia que leva biscoito de maisena e chocolate
          é originária de Campinas, São Paulo e não da Holanda. A receita foi
          criada por Sílvia Leite, em 1991. Ela era, na época, proprietária de
          um café no centro de Campinas e deu o nome ‘holandesa’ à torta em
          homenagem aos bons momentos que viveram na Europa. <br />
          <br />A torta holandesa original leva em seus ingredientes, leite
          condensado, gema, leite, creme de leite fresco em ponto chantilly,
          chocolate ao leite, chocolate meio amargo, Bolacha tipo Maria, bolacha
          triturada e manteiga para a base de chocolate. A história do
          surgimento da torta explica sua presença obrigatória nas comemorações
          de aniversários, já que o doce também era um símbolo de celebração da
          vida, do nascimento.
        </Text>
      </FrameGrid>
    </Background>
  );
};
