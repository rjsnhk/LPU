import React, { useState } from 'react';
import axios from 'axios';

const UserDetails = () => {
    const [userId, setUserId] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const fetchUser = async () => {
        try {
            setError(''); 
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            setUserData({
                id: response.data.id,
                name: response.data.name,
                email: response.data.email,
                city: response.data.address.city
            });
        } catch (err) {
            setUserData(null);
            setError('User not found');
        }
    };

    return (
        <div>
            <h2>User Details</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID"
            />
            <button onClick={fetchUser}>Get User</button>

            {userData ? (
                <div>
                    <h3>User Details</h3>
                    <p><b>id -</b> {userData.id}</p>
                    <p><b>name -</b> {userData.name}</p>
                    <p><b>email -</b> {userData.email}</p>
                    <p><b>city -</b> {userData.city}</p>
                </div>
            ) : error ? (
                <p style={{ color: 'orange' }}>{error}</p>
            ) : null}
        </div>
    );
};

export default UserDetails;
