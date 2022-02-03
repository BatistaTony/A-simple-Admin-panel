import React from 'react';
import { Table, Button } from 'antd';
import { User } from '../../types/user';

const { Column } = Table;

interface CustomTableProps {
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
  data: User[]
}

const CustomTable = ({ handleDelete, handleEdit, data }: CustomTableProps) => {
  

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    }
  ];

  return (
    <Table style={{ width: '100%' }} dataSource={data}>
      {columns.map((column) => (
        <Column title={column.title} dataIndex={column.dataIndex} key={column.key} />
      ))}
      <Column title="City" render={(record: User) => record.address?.city} />
      <Column
        title="Edit"
        render={(record: User) => (
          <Button type="primary" color="red" onClick={()=>handleEdit(record?.id as number)}>
            Edit
          </Button>
        )}
      />
      <Column
        title="Delete"
        render={(record: User) => (
          <Button type="primary" danger onClick={() => handleDelete(record?.id as number)}>
            Delete
          </Button>
        )}
      />
    </Table>
  );
};

export default CustomTable;
