import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import Blog from './views/Blog';
import BlogPost from './views/BlogPost';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Redux Store
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { loadBlog } from './store/Blog';
import ScrollToTop from './components/ScrollToTop';

const store = configureStore()
console.log(store.getState())
store.dispatch(loadBlog())

ReactDOM.render((
            <Provider store={store}>
                <Router>
                    <ScrollToTop>
                        <Route exact path='/' component={App}/>
                        <Route exact path='/blog' component={Blog}/>
                        <Route path='/blog/:blogPost' component={BlogPost}/>
                    </ScrollToTop>
                </Router>
            </Provider>
            ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
