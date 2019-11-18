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

