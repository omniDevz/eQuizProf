import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { LinkItemContainer, Circle } from './styled';

import { LinkItemProps } from './interface';
import { Link } from 'react-router-dom';

const LinkItem: React.FC<LinkItemProps> = ({ to, title }) => {
  return (
    <LinkItemContainer>
      <Link to={to} title={title}>
        {title}
        <Circle>
          <FiChevronRight />
        </Circle>
      </Link>
    </LinkItemContainer>
  );
};

export default LinkItem;
