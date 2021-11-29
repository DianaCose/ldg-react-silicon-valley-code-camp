import styles from '../../styles/Header.module.css';
import { ThemeContext } from "./Layout";
import { useContext } from "react";


const Header = () => {

    const { theme } = useContext(ThemeContext);
    
    return (  
    <div className = { 
        theme === 'light' ? 'light' : 'dark'
        }>
        <div className={styles.header}>
            <img src='/SVCClogo.png'/>
            <h1 className="title dark-theme-text ">Remake Code Sillicon Valley Code Camp</h1>
            <div>
                <span className="dark-theme-text ">
                    <a href='#'>Sign out</a>
                </span>
            </div>
        </div>
    </div>
    );
}
 
export default Header;