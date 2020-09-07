import React from 'react';

import { FooterWrapper } from './styled';

function Footer() {
  return (
    <FooterWrapper>&copy;copyright {new Date().getFullYear()}</FooterWrapper>
  );
}

export default Footer;
