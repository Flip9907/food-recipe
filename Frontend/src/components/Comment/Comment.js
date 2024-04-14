import React, { useState } from "react";
import { AiOutlineComment } from "react-icons/ai";
import "./Comment.css";

function Comment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  //   const [userProfile, setUserProfile] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment) {
      const date = new Date();
      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      const commentData = {
        text: newComment,
        date: formattedDate,
        // user: userProfile,
      };

      setComments([...comments, commentData]);
      setNewComment("");
    }
  };

  const handleCommentCancel = () => {
    setNewComment("");
  };

  return (
    <div className="comment-section">
      <h2>
        <AiOutlineComment /> Post a Comment
      </h2>
      <div>
        <textarea
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment"
          className="add-comment-textarea"
        />
        <div className="postandcancelBtn">
          <button onClick={handleCommentSubmit} className="post-btn">
            Post
          </button>
          <button onClick={handleCommentCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="date-time">
            <div>
              <strong>{comment.user}</strong> - {comment.date}
            </div>
            <div>{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
