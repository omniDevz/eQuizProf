import React from 'react';

import PageHeader from '../PageHeader';
import Footer from '../Footer';

import { Main } from './styled';

import { PageDefaultProfProps } from './interface';

const PageDefaultProf: React.FC<PageDefaultProfProps> = ({
  children,
  type,
}) => {
  return (
    <>
      <PageHeader teacherOn={true} type={type} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefaultProf;
