import React from 'react';
import PageHeader from '../PageHeader';
import Footer from '../Footer';
import { Main } from './styled';

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <PageHeader />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
