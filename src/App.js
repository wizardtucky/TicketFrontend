import './App.css';
import { Store, useStore } from './Store/Store';
import LoginRegisterModal from './components/LoginRegisterModal/LoginRegisterModal';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

//Pages
import MainPage from './Pages';
import NotFoundPage from './Pages/404';
import UsersPage from './Pages/usersPage';
import Navbar from './components/NavBar';
//Image

function AppContent() {
  const store = useStore()

  console.log(store.state)

  return (
    <>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/user" component={UsersPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404"/>
        </Switch>
      </div>
      {store.state.isLoginModalOpen && <LoginRegisterModal />}
    </>
  );
}

const App = (props) => (
  <Store>
    <Router>
      <AppContent />
    </Router>
  </Store>
)

export default App;
