import * as contentful from 'contentful';
import * as actions from './blog/actions';

const client = contentful.createClient({
    space:'2iy38u78l3ky',
    accessToken: 'QJo1bMeHQNDDnxSA9P5pSzVyhORAoOMbQnBvhTbvySI',
})

const error = err => console.log(err);

export function loadBlog(){
    return dispatch =>
        client.getEntries()
        .then( ({items}) => {
            console.log(items)
            dispatch(actions.loadBlogSuccess(items))
        })
        .catch(error)
}