// @flow

import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import { colourOptions } from './docs/data';


export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={makeAnimated()}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}