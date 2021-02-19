import React, { useState } from 'react';

import Options from './layouts/Options';
import TableWithData from './layouts/TableWithData';

const App = () => {
  const [option, setOption] = useState<string>('big');

  return (
    <div className="container">
      <Options />
      {option && option.length > 1 ? <TableWithData option={option} /> : null}
    </div>
  );
};

export default App;
