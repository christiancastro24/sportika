import { Routes } from './routes';
import { Header } from "./components/Header"
import { GlobalStyle } from './styles/global';

function App() {

  return (
    <>
      <Header />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
