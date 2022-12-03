import usePolicyholderData from './usePolicyholderData';

const PolicyholdersView = () => {
  const { policyholderData, isLoading } = usePolicyholderData();

  return <div>Policy Holders</div>;
};

export default PolicyholdersView;
