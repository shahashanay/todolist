import React from 'react';
import { useDispatch } from 'react-redux';
import { Radio } from 'antd';
import { setFilter } from '../redux/actions';


const TodoFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e: any) => {
    dispatch(setFilter(e.target.value ) as any );
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      <Radio.Group onChange={handleFilterChange} defaultValue="all">
        <Radio.Button value="all">All</Radio.Button>
        <Radio.Button value="completed">Completed</Radio.Button>
        <Radio.Button value="incomplete">Incomplete</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default TodoFilter;