import React from 'react';

import PageHeader from '../PageHeader';
import Footer from '../Footer';

import { Main } from './styled';

import { PageTeacherProps } from './interface';

const PageTeacher: React.FC<PageTeacherProps> = ({ children, type, text }) => {
  return (
    <>
      <PageHeader teacherOn={true} type={type} text={text} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageTeacher;
