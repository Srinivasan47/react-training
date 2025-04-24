import React from "react";
import { useNavigate } from "react-router";
import "./Card.css";
const Card = ({ postId, title, value }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/post/${postId}`);
    };
    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{value}</p>
                    <div className="align-right">
                       <button onClick={handleClick} type="button" className="btn btn-sm btn-outline-secondary">View Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;