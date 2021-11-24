import Toolbar from '../components/Toolbar.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Posts from '../components/Posts';
import { useState } from 'react';


const HomePage = () => {

    const [theme, setTheme] = useState('light'); 

    return (  
        <div className = { theme === 'light' ? 'light':'dark'}>
        <Header />
        <div className="container-fluid p-3 m-5">    
            <div className="row">
                  
                <Toolbar theme={theme} setTheme={setTheme} />
            
            </div> 
            <div className="row">
                <div className="col">
                    <Posts />
                </div>   
            </div>
             
        </div>
        <Footer />
        </div>
    )
}
 
export default HomePage;