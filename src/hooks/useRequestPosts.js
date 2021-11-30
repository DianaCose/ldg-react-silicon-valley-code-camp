import { posts } from '../../MyPostsDB';
import { useState, useEffect } from 'react';

export const REQUEST_STATUS = {
        LOADING: "loading",
        SUCCESS:"success",
        FAILURE: "failure"
};

const useRequestPosts = (delayTime = 1000) => {

        const [favoritePost, setFavoritePost] = useState([]);
        const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
        const [error, setError] = useState('');
    
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    
        useEffect(() => {
            async function delayFunc(){
                try {
                    await delay(delayTime);
                    setRequestStatus(REQUEST_STATUS.SUCCESS);
                    setFavoritePost(posts)
                } catch (e) {
                    setRequestStatus(REQUEST_STATUS.FAILURE);
                    setError(e);
                }
            }
            delayFunc()},
            [] );
    
        const onFavoriteToggle = (id) => {
            const postToChange = favoritePost.find(function (rec) {
                return rec.id === id;
            })
            const updatedPost = {
                ...postToChange,
                favorite: !postToChange.favorite
            };
            const newFavoritePost = favoritePost.map( function(rec) { 
                return rec.id === id ? updatedPost : rec 
            });
    
            setFavoritePost(newFavoritePost);
        }

    return {
        favoritePost, requestStatus, error, onFavoriteToggle
    }
}
 
export default useRequestPosts;