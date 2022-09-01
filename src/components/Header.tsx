import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice';
import { useAppDispatch } from '../hooks/redux-hooks';

const logo = require('../assets/img/header/home.png');
const logout = require('../assets/img/header/logout.png');

export function Header(){
    const dispatch = useAppDispatch();
    const { isAuth } = useAuth();

    return (
        <header className="header">
            <div className="container header__container">
                <Link className="header__logo" to="/">
                    <img className="header__logo-pic" src={logo} alt="logo" />
                </Link>
                <nav className="header__nav">
                    {/*<Link className='header__nav-link' to='/'>Главная</Link>*/}
                    {/*<Link className='header__nav-link'  to='/info'>Информация</Link>*/}
                </nav>
                {isAuth && (
                    <button
                        type="button"
                        className="header__logout"
                        onClick={()=> dispatch(removeUser())}>
                        <img className="header__logout-pic" src={logout} alt='logout' />
                    </button>
                    )
                }
            </div>
        </header>
    )
}