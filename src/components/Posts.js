import {posts} from '../../MyPostsDB';
import Post from '../components/Post.js';

const Posts = () => {
    return ( 
        <div className="row">
            { posts.map( function (post){
                return(
                    <Post key={post.id} post={post} />       
                )})
                }
        </div>
     );
}
 
export default Posts;