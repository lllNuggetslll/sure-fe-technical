export type Policyholder = {
  name: string;
  age: number;
  address: Address;
  phoneNumber: string;
  isPrimary: boolean;
};

type Address = {
  line1: string;
  line2: string | undefined;
  city: string;
  state: string;
  postalCode: string;
};

export const buildAddress = ({
  line1,
  line2,
  city,
  state,
  postalCode,
}: Address) => {
  return `${line1}, ${line2}, ${city}, ${state}, ${postalCode}`;
};
