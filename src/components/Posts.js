import Post from '../components/Post.js';
import ReactPlaceholder from 'react-placeholder/lib';
import useRequestPosts, { REQUEST_STATUS } from '../hooks/useRequestPosts.js';
import { useContext } from 'react';
import { ThemeContext } from './Layout';
import { FilterContext } from '../context/FilterContext.js';

const Posts = () => {

    const { theme } = useContext(ThemeContext);
    const { searchQuery } = useContext(FilterContext);
    const {
        favoritePost, requestStatus, error, onFavoriteToggle
    } = useRequestPosts(1000);

    if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
            <div className = "text-danger" >
                ERROR: <b>loading posts failed {error}</b>
            </div>
        )
    }


    return ( 
        <div className = { 
            theme === 'light' ? 'light' : 'dark'
            }>
            <ReactPlaceholder 
                type= 'media'
                rows={15}
                ready={requestStatus === REQUEST_STATUS.SUCCESS}
                >
                <div className="row p-2 m-5">

                    { favoritePost
                    .filter( function (post) { return post.title.toLowerCase().includes(searchQuery)})
                    .map( function (post){
                        return(
                            <Post 
                                key={post.id} 
                                post={post} 
                                onFavoriteToggle={() => {
                                    onFavoriteToggle(post.id)
                                }}
                     />       
                        )})
                        } 
                </div>          
            </ReactPlaceholder>
          </div>
     );
}
 
export default Posts;