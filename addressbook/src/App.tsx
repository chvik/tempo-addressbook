import AddressForm from "./components/AddressForm";
import AddressList from "./components/AddressList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Address Book</h1>
      <AddressForm />
      <AddressList />
    </div>
  );
};

export default App;
