import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

function App() {
  return (
    <Layout>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    
      </header>
    </div>
    </Layout>
  );
}

export default App;
