import './App.css';
import Footer from './components/Header/Footer/Footer';
import Header from './components/Header/Header/Header';
import LandingPage from './screens/Landing Page/LandingPage';
import{ BrowserRouter, Route, Routes} from "react-router-dom"
import MyNotes from './screens/Landing Page/MyNotes/MyNotes';

const App=()=>(
  <BrowserRouter>
    <Header />  
    <main>
    <Routes>  
            
        <Route path='/' Component={LandingPage}/>
        <Route path='/mynotes' Component={()=><MyNotes/> }/>           
      
    </Routes> 
    </main>    
    <Footer />
  </BrowserRouter>
  
)

export default App;
