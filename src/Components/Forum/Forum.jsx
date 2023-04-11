import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ForumPost from './ForumPost';

function ForumTableRow(props) {
    const { name, description, posts, replies, onClick } = props;

    return (
        <tr onClick={onClick}>
            <td>{name}</td>
            <td>{description}</td>
            <td>{posts}</td>
            <td>{replies}</td>
        </tr>
    );
}

function ForumTable(props) {
    const { rows, onRowClick } = props;

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
                {rows.map(row => (
                    <ForumTableRow
                        key={row.name}
                        {...row}
                        onClick={() => onRowClick(row)}
                    />
                ))}
            </tbody>
        </table>
    );
}

function ListGroupItem(props) {
    const { active, children, onClick } = props;

    return (
        <button className={`list-group-item list-group-item-action ${active ? 'active' : ''}`} onClick={onClick}>
            {children}
        </button>
    );
}

function Forum() {
    const [activeItem, setActiveItem] = useState('General Discussion');
    const [selectedPost, setSelectedPost] = useState(null);
    const history = useHistory();

    const forumTables = {
        'General Discussion': [
            { name: 'All Things ROBLOX', description: 'The area for discussions purely about ROBLOX - the features, the games, and company news', posts: 7668774, replies: 1167125, author: 'Admin', locked: false, lastPost: 'Today at 9:32am' },
            { name: 'Help (Technical Support and Account Issues)', description: 'Seeking account or technical help? Post your questions here', posts: 1145300, replies: 261298, author: 'User123', locked: true, lastPost: 'Yesterday at 5:22pm' },
            { name: 'Suggestions & Ideas', description: 'Share your feedback and ideas for the app', posts: 4419344, replies: 483979, author: 'User456', locked: false, lastPost: 'Yesterday at 5:22pm' },
            { name: 'BLOXFaires & ROBLOX events', description: 'Check here to see the crazy things ROBLOX is doing. Contest information can be found here. ROBLOX is going to be at various Maker Faires and conferences around the globe. Discuss these events here', posts: 639840, replies: 7433 },
            { name: 'Report An Issue', description: 'If you have found an issue using our website or playing the game, post them here so we can fix the issue', posts: 417, replies: 759, author: 'User789', locked: false, lastPost: 'Yesterday at 5:22pm' },
            { name: 'Forum Games', description: 'Feeling bored? Want to start a random post? Want to count to 100? You can play all kinds of forum games here', posts: 74, replies: 841 },
            { name: 'Coding', description: 'Need help with your h4x c0ding skills? Post here and other scripters and coders can help you out', posts: 24, replies: 58 },
            { name: 'Tutorials', description: 'Share your guides here and help out others, or request guides and get helped', posts: 103, replies: 167 },

        ],
        'Club Houses': [
            { name: 'ROBLOX Talk', description: 'A popular hangout where ROBLOXians talk about various topics', posts: 35833518, replies: 5125526, author: 'User456', locked: false, lastPost: 'Today at 12:10pm' },
            { name: 'Off Topic', description: 'When no other forum makes sense for your post, Off Topic will help it make even less sense', posts: 36152595, replies: 5562879, author: 'User789', locked: false, lastPost: 'Yesterday at 9:15am' },
            { name: "Clans & Guilds", description: 'Talk about what is going on in your Clans, Groups, Companies, and Guilds, and about the Groups feature in general', posts: 21766249, replies: 2803442 },
            { name: "Let's Make a Deal", description: 'A fast paced community dedicated to mastering the Limited Trades and Sales market, and divining the subtleties of the ROBLOX Currency Exchange', posts: 38208099, replies: 5742912 },
        ],
    };

    const handleItemClick = item => {
        setActiveItem(item);
        setSelectedPost(null);
    };

    const handleRowClick = row => {
        setSelectedPost(row);
        history.push('/forum/forum');
    };

    return (
        <div className="container">
            <h1 className="text-center mb-4">Forum</h1>
            <div className="row">
                <div className="col-md-8">
                    {selectedPost ? (
                        <ForumPost {...selectedPost} />
                    ) : (
                        <ForumTable rows={forumTables[activeItem]} onRowClick={handleRowClick} />
                        )}
                    </div>
                    <div className="col-md-4">
                        <div className="list-group">
                            <ListGroupItem active={activeItem === 'General Discussion'} onClick={() => handleItemClick('General Discussion')}>
                                General Discussion
                            </ListGroupItem>
                            <ListGroupItem active={activeItem === 'Club Houses'} onClick={() => handleItemClick('Club Houses')}>
                                Club Houses
                            </ListGroupItem>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    export default Forum;
    