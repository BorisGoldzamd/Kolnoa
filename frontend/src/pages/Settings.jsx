import { useState } from 'react';
import '../assets/settings.css'; // Import the CSS styles file

const Settings = () => {
    // State to store user information (just as an example)
    const [userInfo, setUserInfo] = useState({
        username: 'example_user',
        email: 'example@example.com'
    });

    // Function to handle changes in user data
    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle saving changes to user information
    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Here you can add logic to save changes to user information
        console.log('Changes saved');
    };

    // Function to handle the action of logging out
    const handleLogout = () => {
        // Here you can add logic to log out the user
        console.log('Logged out');
    };

    // Function to handle the action of changing the password
    const handleChangePassword = () => {
        // Here you can add logic to change the user's password
        console.log('Change password');
    };

    // Function to handle the action of deleting the account
    const handleDeleteAccount = () => {
        // Here you can add logic to delete the user's account
        console.log('Delete account');
    };

    return (
        <div className='container'>
            <h1>Settings</h1>
            <div className='container-form'>
                <h2>User Information</h2>
                <form onSubmit={handleSaveChanges}>
                    <label>Username:</label>
                    <input type="text" name="username" value={userInfo.username} onChange={handleUserChange} />
                    <label>Email:</label>
                    <input type="email" name="email" value={userInfo.email} onChange={handleUserChange} />
                    <button type="submit">Save Changes</button>
                </form>
            </div>
            <div className='buttons'>
                <h2>Account Actions</h2>
                <button className='logout' onClick={handleLogout}>Logout</button>
                <button onClick={handleChangePassword}>Change Password</button>
                <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
        </div>
    );
}

export default Settings;
