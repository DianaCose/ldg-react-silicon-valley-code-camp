import styles from '../../styles/Header.module.css';
import { ThemeContext } from "./Layout";
import { useContext } from "react";
import withAuth from "../components/withAuth";


function Header({loggedInUser, setLoggedInUser}) {

    const { theme } = useContext(ThemeContext);
    
    function LoggedIn({loggedInUser, setLoggedInUser}) {
        return(
            <div>
                <span>  Logged in as {loggedInUser}</span>
                <button 
                    className="btn btn-secondary"
                    onClick = { () => {
                        setLoggedInUser('');
                    }}
                > Logout</button>
            </div>
        )
    }

    function NotLoggedIn({ loggedInUser, setLoggedInUser}){
        return(
            <button 
                className="btn btn-secondary"
                onClick={ (e) => {
                    e.preventDefault();
                    const userName = window.prompt("Enter login name :", );
                    setLoggedInUser(userName);
                }}>
                Login
            </button>
        )

    }


    return (   

    <div className = { 
        theme === 'light' ? 'light' : 'dark'
        }>
        <div className={styles.header}>
            <img src='/SVCClogo.png'/>
            <h1 className="title dark-theme-text">Remake Code Sillicon Valley Code Camp</h1>
            <div className={ theme === 'light'? ' ' : 'dark-theme-text'}>
                { loggedInUser && loggedInUser.length > 0 ?
                    <LoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} /> :
                    <NotLoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
                }
            </div>
        </div>
    </div>
    );
}

export default withAuth(Header);
