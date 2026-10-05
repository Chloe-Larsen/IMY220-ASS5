import { useState } from "react";
//Student Number: u25004141
function AddPostForm({ onAddPost }) {
    const [username, setUsername] = useState("");
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!username || !caption || !image) {
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
        setImage(null);
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

            <label>
                Image
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
            </label>

            <button type="submit">Add Post</button>
        </form>
    );
}

export default AddPostForm;