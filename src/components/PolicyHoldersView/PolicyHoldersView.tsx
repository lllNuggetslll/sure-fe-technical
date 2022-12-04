import usePolicyholderData from './usePolicyholderData';
import {
  TableContainer,
  Table as MuiTable,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Box,
  TableHead,
  CircularProgress,
  Button,
} from '@mui/material';

import { buildAddress } from './utils';

const PolicyholdersView = () => {
  const { policyholderData, addPolicyholderData, isLoading } =
    usePolicyholderData();

  return (
    <Box>
      <Typography variant="h5" textAlign="left" marginBottom="16px">
        Policy Holders
      </Typography>

      <TableContainer component={Paper}>
        <MuiTable sx={{ minWidth: 1000 }} aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Phone number</TableCell>
              <TableCell align="right">Primary policyholder?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <CircularProgress />
            ) : (
              policyholderData.map(
                ({ name, age, isPrimary, phoneNumber, address }) => (
                  <TableRow key={name}>
                    <TableCell>{name}</TableCell>
                    <TableCell align="right">{age}</TableCell>
                    <TableCell align="right">{buildAddress(address)}</TableCell>
                    <TableCell align="right">{phoneNumber}</TableCell>
                    <TableCell align="right">
                      {isPrimary ? 'Yes' : 'No'}
                    </TableCell>
                  </TableRow>
                )
              )
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>

      <Button onClick={addPolicyholderData}>Add a policyholder</Button>
    </Box>
  );
};

export default PolicyholdersView;
