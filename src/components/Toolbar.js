import styles from '../../styles/Toolbar.module.css';

const Toolbar = () => {

    return (  
        <div className="container">
    
            <div className= "row p-5">

                    <div  className="col">
                        <h4>Dark/Light</h4>

                        <label className={styles.switch}> 
                            <input type="checkbox"/>
                                <span className={styles.slide}></span>
                        </label>
                    
                    </div>
            </div>

            <div className="row p-5">
                <h4>Search </h4>
                <label>
                    <input type="text"></input>
                </label>
            </div>
        </div>
    );
}
 
export default Toolbar;
