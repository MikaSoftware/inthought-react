import React from 'react';

import Select from 'react-select';
import { colourOptions } from './docs/data';

export default () => (
  <Select
    className="react-select-multi"
    classNamePrefix="react-select-multi"
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
  />
);