import { useState, useEffect } from 'react';

const URL =
  'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';

const usePolicyholderData = () => {
  const [policyholderData, setPolicyholderData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPolicyholderData = async () => {
    try {
      setIsLoading(true);

      await fetch(URL)
        .then((response) => response.json())
        .then(({ policyHolders }) => setPolicyholderData(policyHolders));
    } catch (err) {
      console.warn(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPolicyholderData();
  }, []);

  return { policyholderData, isLoading };
};

export default usePolicyholderData;
