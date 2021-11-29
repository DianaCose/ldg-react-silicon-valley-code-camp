import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import HomePage from './Homepage.js';
import Layout from './Layout.js';



const App = () => {

    return (  
    <Layout startingTheme='light'>
        <div>
            <Header />
            <HomePage />
            <Footer />
        </div>
    </Layout>   
    )
}
 
export default App;