import React, { FC } from 'react';

interface IProps {
  _handleOption: (option: string) => void;
}

const Options: FC<IProps> = (props) => {
  const { _handleOption } = props;

  return (
    <div className="options">
      <h2 className="options__title">Выберите какой объём данных загружать:</h2>
      <div className="options__items">
        <button className="options__item" onClick={() => _handleOption('big')}>
          Загрузить большой набор данных
        </button>
        <button
          className="options__item"
          onClick={() => _handleOption('small')}
        >
          Загрузить маленький набор данных
        </button>
      </div>
    </div>
  );
};

export default Options;
