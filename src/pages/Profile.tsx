import styles from '../css/profile.module.scss'
import shared from '../css/homepage.module.scss'
import { IoSettingsOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
//import ArticleElements from '../components/ArticleElements.tsx';
import { useUserContext } from '../context/UserInfoContext';

export default function Profile() {
    
    
    const { userProfileUrl, username, bio } = useUserContext();
    return (
        
        <div className={styles.pageLayout}>
            <header className={styles.header}>
                <div className={`${shared.imgFrame} ${styles.imgFrame}` }>
                    <img src={userProfileUrl} alt='user profile pictures'/>
                </div>
                <span className={styles.username}>{username}</span>
                <span className={styles.bio}>{bio ?? ''}</span>

                <NavLink to='/settings' className={styles.edit}>
                    <IoSettingsOutline className={styles.gear} />
                    <span>Edit Profile Settings</span>
                </NavLink>
            </header>
            <main className={`${shared.main} ${styles.main}`}>
                <div className={shared.feed}>
                    <ul className={shared.feedList}>
                        <li className={`${shared.yourFeed} ${styles.yourArticle}`}>Your Articles</li>
                        <li className={`${shared.globalFeed} ${styles.yourFavoritedArticle}`}>Your Favorited Articles</li>
                    </ul>
                    <hr />
                </div>
            </main>
        </div>
    )
}