import Toolbar from '../components/Toolbar.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Posts from '../components/Posts';


const HomePage = () => {
    return (  
        <div>
        <Header />
        <div className="container-fluid p-5">    
            <div className="row">
                    <div className="col-10">
                        <Posts />
                    </div>
                    <div className="col-2">
                        <Toolbar />
                    </div>
            </div>   
        </div>
        <Footer />
        </div>
    )
}
 
export default HomePage;