type buildAddressProps = {
  line1: string;
  line2: string;
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
}: buildAddressProps) => {
  return `${line1}, ${line2}, ${city}, ${state}, ${postalCode}`;
};
