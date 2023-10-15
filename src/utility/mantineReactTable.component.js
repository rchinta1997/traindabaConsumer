import { useMemo } from 'react';
import { MantineReactTable } from 'mantine-react-table';
import { Box, Text } from '@mantine/core';
import { data } from './makeData';

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 50,
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'middleName',
        header: 'Middle Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
      },
    ],
    [],
  );

  return (
    <MantineReactTable
      columns={columns}
      data={data}
      enableExpandAll={false}
      onIsFullScreenChange={false}
      enableFullScreenToggle={false}
      enableFilters={true}      
      enableColumnActions={false}
      columnFilterDisplayMode={false}
      
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'grid',
            margin: 'auto',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
          }}
        >
         <table className="mantine-Table-root mantine-augnbd" >
            <thead className="mantine-cnjrhp">
            <tr>
                <th>Date</th>
                <th>Order ID</th>
                <th>Order Price</th>
                <th>Status</th>
                
            </tr>
            </thead>
            <tbody className='mantine-yzu17x'>
              <tr>
                <td>{row.original.address}</td>
                <td>{row.original.city}</td>
                <td>{row.original.state}</td>
                <td>{row.original.country}</td>
              </tr>
            </tbody>
          </table>
          {/* <Text>Address: {row.original.address}</Text>
          <Text>City: {row.original.city}</Text>
          <Text>State: {row.original.state}</Text>
          <Text>Country: {row.original.country}</Text> */}
        </Box>
      )}
    />
  );
};

export default Example;