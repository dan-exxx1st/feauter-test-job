import React, { FC } from 'react';

interface IProps {
  type: string;
}

const TextField: FC<IProps> = (props = { type: 'text' }) => {
  const { type } = props;

  return <input type={type} />;
};

export default TextField;
