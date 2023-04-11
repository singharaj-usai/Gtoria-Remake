import React from 'react';
import { Link } from 'react-router-dom';

function Alert() {
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show rounded-0 mb-0 text-center" role="alert">
        Join our <Link className="alert-link" to="https://www.discord.gg/jyjHvWB34T" target="_blank">Discord server</Link> to get updates on the website.
        <b> This site is a heavy work in progress. </b>
      </div>
    </div>
  );
}

export default Alert;
