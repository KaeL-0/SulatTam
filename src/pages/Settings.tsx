import styles from '../css/form-page.module.scss';
import { useAuthContext, useSetUserFromStorage, useUserContext } from '../context/UserInfoContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Settings() {
    const navigate = useNavigate();
    const { setIsLogin, setIsTokenMissing } = useAuthContext();
    const refreshUserData = useSetUserFromStorage();
    const { username: storedUsername, bio: storedBio, email: storedEmail } = useUserContext();

    const [formData, setFormData] = useState({
        username: storedUsername || '',
        bio: storedBio || '',
        email: storedEmail || '',
        password: '',
        url: ''
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLogin(false);
        refreshUserData();
        setIsTokenMissing(true);
        navigate('/login');
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleUpdate(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError(null);
        setSuccess(null);
        const token = localStorage.getItem('token');


        const form = new URLSearchParams();
        form.append('username', formData.username);
        form.append('email', formData.email);
        if (formData.password.trim()) form.append('password', formData.password);
        if (formData.bio.trim()) form.append('bio', formData.bio);
        if (formData.url.trim()) form.append('url', formData.url);

        try {
            const response = await axios.post(
                'http://localhost/sulat_tam/api/update_user.php',
                form.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            const data = response.data;
            console.log('Server response:', data);

            localStorage.setItem('user', JSON.stringify(data['user']));
            
            setSuccess(data['message']);
            refreshUserData();

            setTimeout(() => {
                navigate('/profile');
            }, 1000);

        } catch (error: any) {
            console.error('Error submitting form:', error);
            if (error.response.data['error']) {
                setError(error.response.data['error']);
            } else {
                setError('An unexpected error occurred.');
            }
        }
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.header}>Profile Settings</h1>
            <form className={`${styles.form} ${styles.formModified}`} onSubmit={handleUpdate}>

                {error &&
                <>
                    <p id="errorMessage" className={styles.srOnly}>Error: {error}</p>
                    <ul className={styles.errorMessage}><li>{error}</li></ul>
                </>
                }
                {success &&
                <>
                    <p id="successMessage" className={styles.srOnly}>Status: {success}</p>
                    <ul className={styles.successMessage}><li>{success}</li></ul>
                </>
                }

                <label htmlFor="url" className={styles.srOnly}>Profile Picture URL</label>
                <input
                    type="text"
                    name="url"
                    id="url"
                    className={`${styles.input} ${styles.inputSmall}`}
                    placeholder="URL of profile picture"
                    value={formData.url}
                    onChange={handleChange}
                />

                <label htmlFor="username" className={styles.srOnly}>Your Name</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    className={styles.input}
                    placeholder="Your Name"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="bio" className={styles.srOnly}>Short Bio</label>
                <textarea
                    name="bio"
                    id="bio"
                    rows={7}
                    className={`${styles.input} ${styles.textareaSmall}`}
                    placeholder="Short bio about you"
                    value={formData.bio}
                    onChange={handleChange}
                ></textarea>

                <label htmlFor="email" className={styles.srOnly}>Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={styles.input}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password" className={styles.srOnly}>Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className={styles.input}
                    placeholder="New Password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className={`${styles.button} ${styles.buttonWider}`}
                >
                    Update Settings
                </button>

                <hr className={styles.hrSettings} />
                <button
                    type="button"
                    className={styles.logout}
                    onClick={handleLogout}
                >
                    Or click here to logout.
                </button>
            </form>
        </main>
    );
}
