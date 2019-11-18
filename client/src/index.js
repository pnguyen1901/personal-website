import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Redux Store
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { loadBlog } from './store/Blog';

const store = configureStore()
store.dispatch(loadBlog())

ReactDOM.render((
            <Provider store={store}>
                <Router>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/blog' component={Blog}/>
                    <Route path='/blog/:blogPost' component={BlogPost}/>
                </Router>
            </Provider>
            ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
