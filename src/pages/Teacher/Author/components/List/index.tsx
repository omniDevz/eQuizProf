import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { ListAuthors, ItemAuthor, HeaderAuthor, Name } from './styled';

import { ListProps } from './interface';

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <ListAuthors>
      {list &&
        list.map(({ authorId, lastName, firstname, inactive }) => (
          <ItemAuthor key={authorId}>
            <Link
              to={`/teacher/author/update/${authorId}`}
              title={`Editar dados de ${firstname} ${lastName}`}
            >
              <HeaderAuthor>
                <Name>
                  {firstname} {lastName}
                </Name>

                <FiEdit />
              </HeaderAuthor>
            </Link>
          </ItemAuthor>
        ))}
    </ListAuthors>
  );
};

export default List;
