import { useState, useEffect } from 'react';
import { Policyholder } from './utils';

const URL =
  'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';

const usePolicyholderData = () => {
  const [policyholderData, setPolicyholderData] = useState<Policyholder[]>([]);
  const [newPolicyholderData, setNewPolicyholderData] = useState<
    Policyholder[]
  >([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const getPolicyholderData = async () => {
    try {
      setIsFetching(true);

      await fetch(URL)
        .then((response) => response.json())
        .then(({ policyHolders }) => setPolicyholderData(policyHolders));
    } catch (err) {
      console.warn(err);
    } finally {
      setIsFetching(false);
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
      setIsAdding(true);

      await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then(({ policyHolders }) =>
          setNewPolicyholderData([policyHolders[1]])
        );
    } catch (err) {
      console.warn(err);
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    getPolicyholderData();
  }, []);

  return {
    policyholderData,
    addPolicyholderData,
    newPolicyholderData,
    isFetching,
    isAdding,
  };
};

export default usePolicyholderData;
