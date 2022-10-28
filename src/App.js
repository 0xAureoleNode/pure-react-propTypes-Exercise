const App = () => {
  return <AddressLabel person={person} />;
};

const AddressLabel = ({ person }) => {
  const { name, address, postCode } = person;
  return (
    <div>
      {name}
      <br />
      {postCode}
      <br />
      {address}
    </div>
  );
};

const person = {
  name: 'Full Name',
  postCode: '123 Fake St.',
  address: 'Boston, MA 02118',
};

export default App;
