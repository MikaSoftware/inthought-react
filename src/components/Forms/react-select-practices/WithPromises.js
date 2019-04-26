import React, { Component } from 'react';

import AsyncSelect from 'react-select/lib/Async';
import { colourOptions } from './docs/data';

const filterColors = (inputValue: string) => {
  return colourOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class WithPromises extends Component {
  render() {
    return (
      <AsyncSelect 
        className="react-select-single"
        classNamePrefix="react-select-single"
      cacheOptions defaultOptions loadOptions={promiseOptions} />
    );
  }
}
