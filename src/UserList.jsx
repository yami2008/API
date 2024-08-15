import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setListOfUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="user-list">
            <h1>User List</h1>
            <ul>
                {listOfUsers.map(user => (
                    <li key={user.id} className="user-item">
                        <h2>{user.name}</h2>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
