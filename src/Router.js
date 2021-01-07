import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Home = () => <h1>Home page</h1>

const Router = () => {
  return (
    <BrowserRouter>
      <Route component={ Home } path='/' exact/>
    </BrowserRouter>
  )
};

export default Router;