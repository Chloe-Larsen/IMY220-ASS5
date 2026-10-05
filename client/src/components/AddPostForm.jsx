import { useRef, useState } from "react";
//Student Number: u25004141
function AddPostForm({ onAddPost }) {
    const [username, setUsername] = useState("");
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!username || !caption || !image) {
            return;
        }

        const formData = new FormData();
        formData.append("username", username);
        formData.append("caption", caption);
        formData.append("image", image);

        const res = await fetch("http://localhost:3001/api/posts", {
            method: "POST",
            body: formData
        });

        if (!res.ok) {
            return;
        }

        const newPost = await res.json();
        onAddPost(newPost);

        setUsername("");
        setCaption("");
        setImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        } x
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
                    ref={fileInputRef}
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
            </label>

            <button type="submit">Add Post</button>
        </form>
    );
}

export default AddPostForm;