import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ Home } path='/' exact/>
      </Switch>
    </BrowserRouter>
  )
};

export default Router;