import './App.css';
import { ReactComponent as ReactLogo } from './react-logo@3x.svg';

const App = () => {
  return <Poster Message={Message} />;
};

const Poster = ({ Message }) => {
  const { title, text } = Message;
  return (
    <div className="container">
      <ReactLogo className="logo" />
      <br />
      <span>{title}</span>
      <br />
      <span>{text}</span>
    </div>
  );
};
const Message = {
  title: 'React',
  text: 'The best thing since jQery, probably',
};

export default App;
