import './App.css';

const App = () => {
  return (
    <div className="container">
      <input className="input" type="checkbox" />
      <i className="fa fa-thumbtack icon" />
      <Email text={textEmail} />
    </div>
  );
};

const Email = ({ text }) => {
  const { sender, subject, date, message } = text;
  return (
    <div className="Email-Container">
      <span>{sender}</span>
      <span>{subject}</span>
      <span>{date}</span>
      <br />
      <span>{message}</span>
    </div>
  );
};

const textEmail = {
  sender: 'React Newsletter',
  subject: 'React Newsletter -Issue 36',
  date: 'Jul 15',
  message:
    'eact Newsletter Issue 36 - July 15th 2016 Read this issue on the web',
};
export default App;
