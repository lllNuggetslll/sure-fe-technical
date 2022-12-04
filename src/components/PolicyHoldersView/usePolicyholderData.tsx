import { useState, useEffect } from 'react';

const URL =
  'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';

const usePolicyholderData = () => {
  const [policyholderData, setPolicyholderData] = useState([]);
  const [newPolicyholderData, setNewPolicyholderData] = useState([]);
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

  const addPolicyholderData = async () => {
    const data = {
      name: 'string',
      age: 1,
      address: {
        line1: 'string',
        line2: 'string',
        city: 'string',
        state: 'string',
        postalCode: 'string',
      },
      phoneNumber: 'string',
    };

    try {
      await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then(({ policyHolders }) => setNewPolicyholderData(policyHolders[1]));
    } catch (err) {
      console.warn(err);
    } finally {
    }
  };

  useEffect(() => {
    getPolicyholderData();
  }, []);

  return {
    policyholderData,
    addPolicyholderData,
    newPolicyholderData,
    isLoading,
  };
};

export default usePolicyholderData;
