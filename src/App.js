import './style/componentStyle.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/primary_screens/Home';
import About from './pages/primary_screens/About';
import Menu from './pages/primary_screens/Menu';
import Gallery from './pages/primary_screens/Gallery';
import RecipeDetail from './pages/primary_screens/RecipeDetail';
import Modal from './components/Modal';
import AddRecipe from './components/AddRecipe';
// import SignUp from './pages/authentication/SignUp';
// import Login from './pages/authentication/Login';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/signUp' element={<SignUp/>}/> */}
          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/recipeDetail' element={<RecipeDetail/>}/>
          <Route path='/modal' element={<Modal/>}/>
          <Route path='/addRecipe' element={<AddRecipe/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
