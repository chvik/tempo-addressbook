import { useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { deleteAddress } from "../store/addressSlice";
import { Address } from "../types/address";
import AddressForm from "./AddressForm";

interface AddressItemProps {
  address: Address;
}

const AddressItem: React.FC<AddressItemProps> = ({ address }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <AddressForm editData={address} onCancel={() => setIsEditing(false)} />;
  }

  return (
    <div className="address-item">
      <h3>{address.name}</h3>
      <p>Email: {address.email}</p>
      <p>Phone: {address.phone}</p>
      <p>Address: {address.address}</p>
      <div className="actions">
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => dispatch(deleteAddress(address.id))}>Delete</button>
      </div>
    </div>
  );
};

export default AddressItem;
