import React, { useState } from 'react';
import '../assets/settings.css'
const Settings = () => {
    // Estado para almacenar la información del usuario (solo como ejemplo)
    const [userInfo, setUserInfo] = useState({
        username: 'example_user',
        email: 'example@example.com'
    });

    // Función para manejar cambios en los datos del usuario
    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Función para manejar la acción de guardar los cambios en la información del usuario
    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para guardar los cambios en la información del usuario
        console.log('Changes saved');
    };

    // Función para manejar la acción de cerrar sesión
    const handleLogout = () => {
        // Aquí puedes agregar la lógica para cerrar la sesión del usuario
        console.log('Logged out');
    };

    // Función para manejar la acción de modificar la contraseña
    const handleChangePassword = () => {
        // Aquí puedes agregar la lógica para cambiar la contraseña del usuario
        console.log('Change password');
    };

    // Función para manejar la acción de eliminar la cuenta
    const handleDeleteAccount = () => {
        // Aquí puedes agregar la lógica para eliminar la cuenta del usuario
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
                <button onClick={handleLogout}>Logout</button>
                <button onClick={handleChangePassword}>Change Password</button>
                <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
        </div>
    );
}

export default Settings;
