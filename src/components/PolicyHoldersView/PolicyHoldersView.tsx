import usePolicyholderData from './usePolicyholderData';
import { Box, Button } from '@mui/material';

import InfoTable from './InfoTable';

const PolicyholdersView = () => {
  const {
    policyholderData,
    addPolicyholderData,
    newPolicyholderData,
    isFetching,
    isAdding,
  } = usePolicyholderData();

  return (
    <Box>
      <InfoTable
        header={'Policy holders'}
        isLoading={isFetching}
        policyholderData={policyholderData}
      />

      {newPolicyholderData.length > 0 && (
        <Box sx={{ marginTop: '100px' }}>
          <InfoTable
            header={'New Policy holders'}
            isLoading={isAdding}
            policyholderData={newPolicyholderData}
          />
        </Box>
      )}

      <Button onClick={addPolicyholderData}>Add a policyholder</Button>
    </Box>
  );
};

export default PolicyholdersView;
