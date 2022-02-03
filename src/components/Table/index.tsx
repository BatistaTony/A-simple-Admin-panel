import {
  TableContainer,
  TableHeader,
  TableHeaderData,
  TableRow,
  TableRowData,
  CustomButton
} from './styles';
import { User } from '../../types/user';

interface CustomTableProps {
  data: User[];
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
}

const CustomTable = ({ data, handleDelete, handleEdit }: CustomTableProps) => {
  const itemsHeader = ['id', 'Name', 'User name', 'email', 'city', ''];

  return (
    <TableContainer>
      <TableHeader>
        {itemsHeader.map((item) => (
          <TableHeaderData key={item}>{item}</TableHeaderData>
        ))}
      </TableHeader>

      {data.map((user) => (
        <TableRow key={user.id}>
          <TableRowData>{user.id}</TableRowData>
          <TableRowData>{user.name}</TableRowData>
          <TableRowData>{user.username}</TableRowData>
          <TableRowData>{user.email}</TableRowData>
          <TableRowData>{user.address?.city}</TableRowData>

          <TableRowData>
            <CustomButton onClick={() => handleEdit(user.id as number)}>Edit</CustomButton>
            <CustomButton color="red" onClick={() => handleDelete(user.id as number)}>
              Delete
            </CustomButton>
          </TableRowData>
        </TableRow>
      ))}
    </TableContainer>
  );
};

export default CustomTable;
