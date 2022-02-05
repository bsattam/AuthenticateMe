import {useAuth0} from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();
  return (
    <>
      {!isLoading && (
        <div>
        
      </div>
      )}  
    </>
  );
}

export default App;
