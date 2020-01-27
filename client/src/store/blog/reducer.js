/**
 * Blog Reducer
 */

import initialState from '../initialState';
import * as types from './types';


const blogReducer = (state = initialState.blog, action) => {
    switch (action.type) {

        case types.SET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.id
            }

        case types.LOAD_BLOG_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts,
                totalPost: action.posts.length
            }   
        

        // return to previous state for any unknown action.
        default:
            return state
    }
}

export default blogReducer;

