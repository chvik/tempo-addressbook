import { useAppSelector } from "../hooks/redux";
import AddressItem from "./AddressItem";

const AddressList: React.FC = () => {
  const addresses = useAppSelector((state) => state.addresses.addresses);

  return (
    <div className="address-list">
      {addresses.map((address) => (
        <AddressItem key={address.id} address={address} />
      ))}
    </div>
  );
};

export default AddressList;
