import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LatestRelease from './components/LatestRelease';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <MyNav/>
      <Welcome/>
      
      <LatestRelease/>
      <MyFooter/>
    </div>
  );
}

export default App;
