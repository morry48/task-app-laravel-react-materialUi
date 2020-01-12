import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import Home from './pages/Home'
import Example from './pages/Example'
import PostEdit from './pages/PostEdit';

function App() {

    return (
        <div>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/posts' exact component={Home} />
                <Route path='/example' exact component={Example} />
                <Route path='/post/edit/:id' exact component={PostEdit} />
            </Switch>
        </div>
    );
}


ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'))
