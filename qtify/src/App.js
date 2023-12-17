import Button from './components/Button/Button';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Button>Give Feedback</Button>
      <Search placeholder='Select a album of your choice' />
    </div>
  );
}

export default App;
