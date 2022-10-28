const App = () => {
  return (
    <div>
      <Envelope toMessage={toPerson} fromMessage={fromPerson} />
    </div>
  );
};

const Envelope = ({ toMessage, fromMessage }) => {
  return (
    <div>
      <AddressLabel person={toMessage} />
      <br />
      <AddressLabel person={fromMessage} />
    </div>
  );
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

const toPerson = {
  name: 'Mr.Sender',
  postCode: '123 Fake St.',
  address: 'Boston, MA 02118',
};
const fromPerson = {
  name: 'Mr.Receiver',
  postCode: '123 Fake St.',
  address: 'San Francisco, CA 94101',
};

export default App;
