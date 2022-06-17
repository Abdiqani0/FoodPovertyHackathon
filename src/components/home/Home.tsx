import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { isUserSignedIn } from '../../helper';

function Home() {

  const history = useHistory();

  useEffect(() => {
      isUserSignedIn(history);     
  });

  return (
   <div>
       <h1>
           Home
       </h1>
    </div>
  );
}

export default Home;
