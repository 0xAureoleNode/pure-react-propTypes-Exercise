import './App.css';

const App = () => {
  return <Card CreditCard={CreditCard} />;
};

const Card = ({ CreditCard }) => {
  const { name, number, code, validThru, date, holder_name } = CreditCard;
  return (
    <div className="container">
      <div className="cc">
        <span className="mastercard">{name}</span>
        <br />
        <br />
        <span className="cc-number">{number}</span>
        <br />
        <span className="cc-code">{code}</span>
        <span className="cc-validThru">{validThru}</span>
        <span className="cc-date">{date}</span>
        <br />
        <span className="cc-name">{holder_name}</span>
      </div>
    </div>
  );
};

const CreditCard = {
  name: 'Big Bank, Inc.',
  number: '1234 5678 8765 4321',
  code: '1234',
  validThru: 'VALID THRU:',
  date: '08/19',
  holder_name: 'Aureole',
};

export default App;
