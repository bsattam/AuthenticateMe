import {useAuth0} from '@auth0/auth0-react';
import Login from './components/Login.js';
import UserDetails from './components/UserDetails.js';
import styles from './styles/App.module.css';
import logo from './images/logo.svg';
import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div className={`flex-grow-1`}>
      <div className={`${styles.appGlassCanvas} m-auto mt-5
            d-flex flex-column flex-lg-row justify-content-evenly
            align-items-center`}>
        {
          isLoading && <>
            <PuffLoader color='#00fff2'
              size={200} loading={isLoading}/>
          </>
        }
        {
          !isAuthenticated && !isLoading && <>
            <div className=' d-flex justify-content-center ms-lg-5'>
              <img src={logo} className={styles.logoImage} alt=''/>
            </div>
            <Login/>
          </>
        }
        {
          isAuthenticated && !isLoading && <UserDetails/>
        }
      </div>
    </div>
  );
}

export default App;
