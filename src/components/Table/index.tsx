import {
  TableContainer,
  TableHeader,
  TableHeaderData,
  TableRow,
  TableRowData,
  CustomButton
} from './styles';
import { User } from '../../types/user';
import { useEffect, useState } from 'react';
import { sortArrayByUserName } from '../../helpers';

interface CustomTableProps {
  data: User[];
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
}

const CustomTable = ({ data, handleDelete, handleEdit }: CustomTableProps) => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [typeOfSort, setTypeOfSort] = useState<'az' | 'za' | null>(null);
  const itemsHeader = ['id', 'Name', 'User name', 'email', 'city', 'edit', 'delete'];

  const toggleSort = () => {
    if (typeOfSort === 'az' || typeOfSort === null) {
      setTypeOfSort('za');
    } else if (typeOfSort === 'za' || typeOfSort === null) {
      setTypeOfSort('az');
    }
  };

  useEffect(() => {
    if (!typeOfSort) {
      setUsersData(data);
      return;
    }

    if (typeOfSort === 'az') {
      const dataSorted = sortArrayByUserName({ users: [...data] });
      setUsersData(dataSorted);
      return;
    }

    if (typeOfSort === 'za') {
      const dataSorted = sortArrayByUserName({ users: [...data], isReverse: true });
      setUsersData(dataSorted);
      return;
    }
  }, [data, typeOfSort]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px' }}>
        <CustomButton style={{ width: '140px', marginRight: '15px' }} onClick={toggleSort}>
          {typeOfSort === 'az' ? 'sort by Z-A' : 'sort by A-Z'}
        </CustomButton>
        <CustomButton style={{ width: '140px' }} onClick={() => setTypeOfSort(null)}>
          unsort
        </CustomButton>
      </div>

      <TableContainer>
        <TableHeader>
          {itemsHeader.map((item) => (
            <TableHeaderData key={item}>{item}</TableHeaderData>
          ))}
        </TableHeader>

        {usersData.map((user: User) => (
          <TableRow key={user.id}>
            <TableRowData>{user.id}</TableRowData>
            <TableRowData>{user.name}</TableRowData>
            <TableRowData>{user.username}</TableRowData>
            <TableRowData>{user.email}</TableRowData>
            <TableRowData>{user.address?.city}</TableRowData>

            <TableRowData>
              <CustomButton bg="#a5a58d" onClick={() => handleEdit(user.id as number)}>
                Edit
              </CustomButton>
            </TableRowData>
            <TableRowData>
              <CustomButton bg="#9b2226" onClick={() => handleDelete(user.id as number)}>
                Delete
              </CustomButton>
            </TableRowData>
          </TableRow>
        ))}
      </TableContainer>
    </>
  );
};

export default CustomTable;
