/**
 * Blog Actions
 */

import * as types from './types';

export function loadBlogSuccess(posts) {
    return {
        type: types.LOAD_BLOG_POSTS_SUCCESS, 
        posts
    }
}

export function setCurrentPost(id) {
    return {
        type: types.SET_CURRENT_POST,
        id
    }
}

