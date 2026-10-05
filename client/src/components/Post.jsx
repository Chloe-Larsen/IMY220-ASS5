function Post({ post }) {
    const imageUrl = post.image ? `http://localhost:3001/uploads/${post.image}` : null;
    return (
        <article>
            <h2>{post.username}</h2>
            <p>{post.caption}</p>
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={`Post by ${post.username}`}
                />
            )}
        </article>
    );
}

export default Post;