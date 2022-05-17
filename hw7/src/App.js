import './App.css';
import login from './Login';
import username from './UserName';
import password from './Password';
import button from './Button';

function App() {
  return (
    <div class="App">
      <div class='login'> {login()} </div>
      <div class='info'> {username()} </div>
      <div class='info'> {password()} </div>
      <div class='button'> {button()} </div>
    </div>
  );
}

export default App;