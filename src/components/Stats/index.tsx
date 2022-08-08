import React from 'react';
import { Table } from './styles';

const Stats = ({ stats }: any) => {
  return (
    <div>
      <Table>
        <h1> Stats</h1>
        {stats.map((i: any, index: any) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={index}>
            <td>{i.stat.name.split('-').join(' ')}</td>
            <td>{i.base_stat}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Stats;
