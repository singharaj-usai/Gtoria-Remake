import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function ForumPost(props) {
  const { name, author, replies, locked, lastPost } = props;

  const history = useHistory();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    localStorage.setItem('forumPostPath', currentPath);
    return () => {
      localStorage.removeItem('forumPostPath');
    };
  }, [currentPath]);

  useEffect(() => {
    const storedPath = localStorage.getItem('forumPostPath');
    if (storedPath && storedPath !== currentPath) {
      history.replace(storedPath);
    }
  }, [currentPath, history]);

  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>Forum Post</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Author</th>
          <td>{author}</td>
        </tr>
        <tr>
          <th>Replies</th>
          <td>{replies}</td>
        </tr>
        <tr>
          <th>Locked</th>
          <td>{locked ? 'Yes' : 'No'}</td>
        </tr>
        <tr>
          <th>Last Post</th>
          <td>{lastPost}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ForumPost;
