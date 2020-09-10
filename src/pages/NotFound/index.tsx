import React from 'react';
import Lottie from 'lottie-react-web';

import PageDefault from '../../components/PageDefault';

import lottie404 from '../../assets/lottie/404.json';

import { Content, Description } from './styled';

function NotFound() {
  return (
    <PageDefault>
      <Content>
        <Lottie
          options={{
            autoplay: true,
            loop: true,
            animationData: lottie404,
          }}
        />
        <Description>Página não encontrada</Description>
      </Content>
    </PageDefault>
  );
}

export default NotFound;
