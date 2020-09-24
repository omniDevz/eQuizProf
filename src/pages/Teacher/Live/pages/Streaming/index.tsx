import React from 'react';

import PageDefaultProf from '../../../../../components/PageDefaultProf';
import Button from '../../../../../components/Button';

import { Stream, ButtonWrapper } from './styled';

const Streaming: React.FC = () => {
  return (
    <PageDefaultProf type="back" text="Streaming">
      <Stream>
        <img src="https://source.unsplash.com/random/person"></img>
      </Stream>
      <ButtonWrapper>
        <Button color="primary-outline">Começar</Button>
      </ButtonWrapper>
    </PageDefaultProf>
  );
};

export default Streaming;
