import './App.css';
import User from './components/Users/User';
import Ticket from './components/Tickets/Tickets'
import { Store } from './Store/Store';

function App() {  
  return (
    <Store>
      <div className="App">
        <User />
        <Ticket />
      </div>
    </Store>
  );
}

export default App;
