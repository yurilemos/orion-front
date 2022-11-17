import React from 'react';
import { Input } from 'antd';

const { Search: AntdSearch } = Input;

/* Componente do search input */
const Search = ({ placeholder, onSearch, onChange, style }) => {
  return (
    <AntdSearch
      placeholder={placeholder}
      onSearch={onSearch}
      onChange={onChange}
      style={{ width: 400, ...style }}
    />
  );
};

export default Search;
