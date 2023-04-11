import React from 'react';

function ForumTableRow(props) {
  const { name, description, posts, replies } = props;
  
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{posts}</td>
      <td>{replies}</td>
    </tr>
  );
}

function ForumTable(props) {
  const { rows } = props;
  
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Posts</th>
          <th>Replies</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => <ForumTableRow key={row.name} {...row} />)}
      </tbody>
    </table>
  );
}

function ListGroupItem(props) {
  const { active, children } = props;
  
  return (
    <a href="#" className={`list-group-item list-group-item-action ${active ? 'active' : ''}`}>
      {children}
    </a>
  );
}

function Forum() {
  const rows = [
    { name: 'General Discussion', description: 'Discuss anything related to our app', posts: 20, replies: 50 },
    { name: 'Bugs & Issues', description: 'Report any bugs or issues you encounter', posts: 5, replies: 10 },
    { name: 'Feedback & Suggestions', description: 'Share your feedback and ideas for the app', posts: 10, replies: 25 },
    { name: 'Off-Topic', description: 'Discuss anything not related to the app', posts: 15, replies: 30 },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Forum</h1>
      <div className="row">
        <div className="col-md-8">
          <ForumTable rows={rows} />
        </div>
        <div className="col-md-4">
          <div className="list-group">
            <ListGroupItem active={true}>News</ListGroupItem>
            <ListGroupItem active={false}>Changelogs</ListGroupItem>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forum;
