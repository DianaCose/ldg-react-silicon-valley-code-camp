
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

const PostDetails = ( {title, author, favorite, description}) => {
    return ( 
        <div>
            <h4 className="card-title"> {title}</h4>
                <h6 class="card-subtitle mb-2 text-muted fst-italic text-end">written by {author}</h6>
            <div className="text-start">
                <i class="fas fa-heart"> Favorite</i>
            </div>
            <p class="card-text">{description}</p>
        </div>
     );
}

const Post = ( { post } ) => {
    const {id, title, author, favorite, description} = post;
    return ( 
        <div  className="col-4 mb-3">
            <div className="card text-center p-3">
                <PostImage id={id} title={title} />
                <PostDetails {...post}/>
            </div>  
        </div>
     );
}
 
export default Post;
