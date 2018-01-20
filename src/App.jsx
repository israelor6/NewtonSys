import React, { Component } from 'react'; 
import MapInit from './components/map/mapInit';
import styles from './App.css';
import Corner from './components/corner/corner';
import Logo from './components/logo/logo';
import Menu from './components/menu/menu';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
				{/*<Menu />*/}
        <MapInit />
        <Logo />
        <Corner />
      </div>
    );
  }
}

export default App;
