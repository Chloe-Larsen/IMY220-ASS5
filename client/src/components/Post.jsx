// Student Number: u25004141
function Post({ post }) {
    const imageUrl = post.image ? `http://localhost:3001/uploads/${post.image}` : null;
    return (
        <article className="overflow-hidden rounded-xl border border-gray-200 bg-white">
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-900">{post.username}</h2>
                <p className="mt-1 text-gray-700">{post.caption}</p>
            </div>
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={`Post by ${post.username}`}
                    className="h-auto w-full object-cover"
                />
            )}
        </article>
    );
}

export default Post;