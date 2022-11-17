import { Table as AntTable } from 'antd';
import React from 'react';

/* Componente Table, usado para exibir os dados na parte de participantes do 
grupo de discussão */
const Table = ({ columns, dataSource }) => (
  <AntTable columns={columns} dataSource={dataSource} />
);

export default Table;
