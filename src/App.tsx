import React, { useState } from 'react';

import Options from './layouts/Options';
import TableWithData from './layouts/TableWithData';

const App = () => {
  const [option, setOption] = useState<string>('');

  const _handleOption = (options: string) => setOption(options);

  return (
    <div className="container">
      <Options _handleOption={_handleOption} />
      {option.length > 1 ? <TableWithData option={option} /> : null}
    </div>
  );
};

export default App;
