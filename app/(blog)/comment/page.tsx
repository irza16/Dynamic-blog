'use client'

import React, { useState, useEffect } from 'react';

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState('');
  const [userComment, setUserComment] = useState('');

  useEffect(() => {
    // Load comments from localStorage on initial render
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(savedComments);
  }, []);

  useEffect(() => {
    // Save comments to localStorage whenever they change
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (username.trim() && userComment.trim()) {
      setComments([...comments, { username, userComment }]);
      setUsername('');
      setUserComment('');
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {/* Input Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-4">Add a Comment</h2>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Your Comment"
          className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          rows="4"
        ></textarea>
        <button
          onClick={handleAddComment}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Post Comment
        </button>
      </div>

      {/* Comments Display Section */}
      <div className="bg-gray-100 shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="mb-4 p-3 bg-white rounded-md shadow-sm border border-gray-200 lg:flex lg:justify-between lg:items-start"
            >
              <div className="lg:w-1/4">
                <p className="font-bold text-sm mb-1 lg:text-base">{comment.username}</p>
              </div>
              <div className="lg:w-3/4">
                <p className="text-gray-700 text-sm lg:text-base">{comment.userComment}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default Comment;