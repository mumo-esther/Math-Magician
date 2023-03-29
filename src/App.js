import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Quote from './components/Qoute';
import HomePage from './components/Home';

function App() {
  let component;
  switch (window.location.pathname) {
    case '/Home':
      component = <HomePage />;
      break;

    case '/Calculator':
      component = <Calculator />;
      break;

    case '/Qoute':
      component = <Quote />;
      break;

    default:
      component = <HomePage />;
      break;
  }
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
