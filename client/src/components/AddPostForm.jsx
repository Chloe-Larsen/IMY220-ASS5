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
        <form onSubmit={handleSubmit} className="mb-10 rounded-xl bg-white p-6">
            <div className="mb-4">
                <label htmlFor="username" className="mb-1 block text-sm font-semibold text-gray-700">
                    Username
                </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="caption" className="mb-1 block text-sm font-semibold text-gray-700">
                    Caption
                </label>
                <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="image" className="mb-1 block text-sm font-semibold text-gray-700">
                    Image
                </label>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full cursor-pointer rounded-lg border border-gray-300 px-3 py-2 text-gray-700 file:mr-4 file:rounded-full file:border-0 file:px-4 file:py-2 file:text-sm file:font-semibold hover:file:bg-blue-100 focus:outline-none focus:ring-2"
                />
            </div>

            <button type="submit" className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add Post</button>
        </form>
    );
}

export default AddPostForm;