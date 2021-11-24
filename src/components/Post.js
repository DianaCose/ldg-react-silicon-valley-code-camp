
const PostImage = ( {id, title} ) => {
    return ( 
        <div className="card-img-top">
            <img className="mb-3"
                    src={`/images/${id}.jpeg`}
                    width="300"
                    alt={`${title}`} 
            />
        </div>
    );
}
const FavoritePost = ({favorite, onFavoriteToggle}) => {
    return ( 
        <div className="action p-2">
            <span 
            onClick={ onFavoriteToggle } >
                <i className= { favorite === true ? "fas fa-heart" : "far fa-heart"} /> {" "}Favorite{" "}
        </span>
    </div>
     );
}

const PostDetails = ( {title, author, favorite, description, onFavoriteToggle}) => {
    return ( 
        <div>
            <h4 className="card-title"> {title}</h4>
                <h6 class="card-subtitle mb-2 text-muted fst-italic text-end">written by {author}</h6>

            <FavoritePost 
                favorite = {favorite}
                onFavoriteToggle = {onFavoriteToggle} />

            <p class="card-text">{description}</p>

        </div>
     );
}

const Post = ( { post, onFavoriteToggle } ) => {
    const {id, title, author, favorite, description} = post;
    return ( 
        <div  className="col-3 mb-3">
            <div className="card text-center p-3">
                <PostImage id={id} title={title} />
                <PostDetails {...post} onFavoriteToggle={onFavoriteToggle}/>
            </div>  
        </div>
     );
}
 
export default Post;
