import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <Router>
       <Route path='/' component={LoginScreen} exact />
       <Route path='/register' component={RegisterScreen}  />
    </Router>
  );
}

export default App;
