import React from 'react';
import Select from 'react-select';
import { topicsOptions } from './data';


const DropDown = () => (
    <Select 
        placeholder="Topics"
        isMulti
        name="colors"
        options={topicsOptions}
        className="basic-multi-select"
        classNamePrefix="select" />
  )
export default DropDown