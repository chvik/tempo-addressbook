export interface Address {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface AddressState {
  addresses: Address[];
}
