import styles from '../../styles/Toolbar.module.css';

const Toolbar = ({theme, setTheme}) => {

    return (            
        <div className="styles.toolbar dark-theme-header">
            <div>
            <h4 className="dark-theme-text">Change Theme</h4>
                <div className="form-check form-switch">    
                    <input 
                            className="form-check-input styles.toolbar-input" 
                            type="checkbox" 
                            role="switch" 
                            id="flexSwitchCheckChecked" 
                            checked={theme}
                            onClick = {(event) => {
                                setTheme(event.target.checked)
                            }} />
                    <label className="form-check-label dark-theme-text " 
                        for="flexSwitchCheckChecked"> Dark / Light</label>
                </div>
            </div>
            <div>
                <h4>Display Favorite Posts</h4>
                <button 
                    type="button" 
                    className="btn btn-success">
                        Display Only Favorite Posts
                </button>
            </div>
            <div >
                    <h4 className="dark-theme-text ">Search </h4>
                    <label>
                        <input type="text"></input>
                    </label>
            </div>
        </div>  

    );
}
 
export default Toolbar;
