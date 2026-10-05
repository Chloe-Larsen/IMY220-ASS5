// Student Number: u25004141
import Post from "./Post";

function PostList({ posts }) {
    return (
        <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </section>
    );
}

export default PostList;