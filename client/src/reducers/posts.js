import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionTypes';

const reducer = (posts = [], action) => {
    switch (action.type) {         
        case DELETE:            
            return posts.filter((post) => post._id !== action.payload);

        case UPDATE:        
            return posts.map((post) => post.id === action.payload._id ? action.payload : post);

        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...posts, action.payload];

        default:
            return posts;
    }

}
export default reducer;