'use client'

import React, { useState } from 'react';

interface Comment {
  username: string;
  userComment: string;
}

const CommentPage: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState<string>('');
  const [userComment, setUserComment] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !userComment) return; // Ensure no null/undefined values are passed
    setComments([...comments, { username, userComment }]);
    setUsername('');
    setUserComment('');
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Comments</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userComment" className="block text-gray-700 font-medium mb-2">
            Comment
          </label>
          <textarea
            id="userComment"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            rows={4} // Ensure this is a number
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Comment
        </button>
      </form>
      <div className="w-full max-w-md">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
          >
            <p className="font-bold text-gray-800">{comment.username}</p>
            <p className="text-gray-600">{comment.userComment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentPage;
