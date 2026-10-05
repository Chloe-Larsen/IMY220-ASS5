import { useState } from "react";

function AddPostForm({ onAddPost }) {
    const [username, setUsername] = useState("");
    const [caption, setCaption] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (!username || !caption) {
            return;
        }

        const newPost = {
            id: Date.now(),
            username,
            caption,
            image: null
        };

        onAddPost(newPost);

        setUsername("");
        setCaption("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>

            <label>
                Caption
                <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />
            </label>

            <button type="submit">Add Post</button>
        </form>
    );
}

export default AddPostForm;