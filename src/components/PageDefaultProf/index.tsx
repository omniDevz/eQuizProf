import React from 'react';

import PageHeader from '../PageHeader';
import Footer from '../Footer';

import { Main } from './styled';

import { PageDefaultProfProps } from './interface';

const PageDefaultProf: React.FC<PageDefaultProfProps> = ({
  children,
  type,
  text,
}) => {
  return (
    <>
      <PageHeader teacherOn={true} type={type} text={text} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefaultProf;
