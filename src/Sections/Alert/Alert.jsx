import React from 'react';
import { Link } from 'react-router-dom';

function Alert() {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show rounded-0 mb-0 text-center" role="alert">
        Join our <Link className="alert-link" to="https://www.discord.gg/jyjHvWB34T" target="_blank">Discord server</Link> to get updates on the website.
        <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close">
          <img src="https://via.placeholder.com/25x25.png?text=X" alt="Close" />
        </button>
      </div>
    </div>
  );
}

export default Alert;
