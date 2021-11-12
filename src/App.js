import logo from './logo.svg';
import './App.css';
import { Anchor } from './components/Anchor';

function App() {
  return (
    <>
      <Anchor className='link' href='http://www.google.com/' target='_blank' text='Google' />
    </>
  );
}

export default App;
