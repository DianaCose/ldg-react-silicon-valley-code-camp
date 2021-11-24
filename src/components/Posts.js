import {posts} from '../../MyPostsDB';
import Post from '../components/Post.js';
import { useState, useEffect } from 'react';
import ReactPlaceholder from 'react-placeholder/lib';

const Posts = () => {

    const [favoritePost, setFavoritePost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState('');

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc(){
            try {
                await delay(2000);
                setIsLoading(false);
                setFavoritePost(posts)
            } catch (e) {
                setIsLoading(false);
                setHasErrored(true);
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

    if (hasErrored === true) {
        return (
            <div className = "text-danger" >
                ERROR: <b>loading posts failed {error}</b>
            </div>
        )
    }

    return ( 
        <div>
            <ReactPlaceholder 
                type= 'media'
                rows={15}
                ready={isLoading === false}
                >
                <div className="row p-2 m-5">
                    { favoritePost.map( function (post){
                        return(
                            <Post 
                                key={post.id} 
                                post={post} 
                                onFavoriteToggle={() => {
                                    onFavoriteToggle(post.id)
                                }} />       
                        )})
                        }
                </div>          
            </ReactPlaceholder>
          </div>
     );
}
 
export default Posts;