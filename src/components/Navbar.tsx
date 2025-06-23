import '../css/navbar.scss';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../context/UserInfoContext';
    
export default function Navbar() {
    const { isLogin } = useAuthContext();

    return (
        <nav>
            <span className='navBrand'>SulatTAM</span>
            { isLogin ?
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/editor'>New Article</NavLink></li>
                    <li><NavLink to='settings'>Settings</NavLink></li>
                    <li><NavLink to='/profile'>Profile</NavLink></li>
                </ul> :
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='login'>Sign in</NavLink></li>
                    <li><NavLink to='register'>Sign up</NavLink></li>
                </ul>
            }
        </nav>
        
    )
}