import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "./Post.css";

const Post = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate(-1); // Navigate back to the dashboard
    }
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const[comments, setComments] = useState([]); // State to manage comments
    const [loading, setLoading] = useState(true); // State to manage loading status
    useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                const data = await response.json();
                setPost(data); // Set the data to state
                setLoading(false); // Set loading to false after data is fetched
                console.log(data); // Handle the data as needed
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        const fetchComment = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`);
                const data = await response.json();
                setComments(data); // Set the data to state
                console.log(data); // Handle the data as needed
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        fetchComment(); // Fetch comments for the post
        return () => {
            // Cleanup if needed
            console.log("Cleanup function called");
        };
    }, [postId]);
    return (
        <div className="container">
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                    <h1>Post</h1>
                    <p>Welcome to the post page!</p>
                    <button onClick={handleClickBack} type="button" className="btn btn-sm btn-outline-secondary">Back</button>
                    <div className="post">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                    <h2>Comments</h2>
                    <div className="comments">
                        {comments.map((comment) => (
                            <div key={comment.id} className="comment">
                                <h3>{comment.name}</h3>
                                <p>{comment.body}</p>
                                <p><strong>Email:</strong> {comment.email}</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Post;