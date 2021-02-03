import NavBar from './components/Navbar'
import HomePage from './components/HomePage'


function App() {

  return (
    <div className="App">
        <NavBar />
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
