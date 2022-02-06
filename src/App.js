import {useAuth0} from '@auth0/auth0-react';
import Login from './components/Login.js';
import UserDetails from './components/UserDetails.js';
import styles from './styles/App.module.css';
import logo from './images/logo.svg';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div className={`flex-grow-1`}>
      <div className={`${styles.appGlassCanvas} m-auto mt-5
            d-flex flex-column flex-lg-row justify-content-evenly
            align-items-center`}>
        <div className=' d-flex justify-content-center'>
          <img src={logo} className={styles.logoImage}/>
        </div>
        {
          !isAuthenticated && !isLoading && <Login/>
        }
        {
          isAuthenticated && !isLoading && <UserDetails/>
        }
      </div>
    </div>
  );
}

export default App;
