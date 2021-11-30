import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import HomePage from './Homepage.js';
import Layout from './Layout.js';
import { AuthProvider } from '../context/AuthContext';



const App = () => {

    return (  
    
    <AuthProvider initialLoggedIn="Diana">
        <Layout startingTheme='light'>
            <div>
                <Header />
                <HomePage />
                <Footer />
            </div>
        </Layout>   
    </AuthProvider>
    )
}
 
export default App;