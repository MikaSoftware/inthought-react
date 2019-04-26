// @flow

import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import { colourOptions } from './docs/data';


export default function AnimatedMulti() {
  return (
    <Select
      className="react-select-multi"
      classNamePrefix="react-select-multi"
      closeMenuOnSelect={false}
      components={makeAnimated()}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}
