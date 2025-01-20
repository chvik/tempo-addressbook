import { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../hooks/redux";
import { addAddress, updateAddress } from "../store/addressSlice";
import { Address } from "../types/address";

interface AddressFormProps {
  editData?: Address;
  onCancel?: () => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ editData, onCancel }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Omit<Address, "id"> & { id?: number }>(
    editData || {
      name: "",
      email: "",
      phone: "",
      address: "",
    }
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editData) {
      dispatch(updateAddress({ ...(formData as Address) }));
    } else {
      dispatch(addAddress(formData));
    }
    setFormData({ name: "", email: "", phone: "", address: "" });
    if (onCancel) onCancel();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="address-form">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
      <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <button type="submit">{editData ? "Update" : "Add"}</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default AddressForm;
