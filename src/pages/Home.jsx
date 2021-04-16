import React, { useEffect } from 'react';
import DemoComp from '../components/DemoComp'; // Demo purpose only
import logo from '../img/logo.png';
function Home(props) {
  useEffect(() => {
    document.title = "Home"
  }, []);
  return (
    <section>
      <div className="presentation">
        <img src={logo} alt="react logotype" />
        <h1>Welcome to Boilerplate of React-Start-Pack</h1>
      </div>
      <DemoComp />
    </section>
  );
}

export default Home;