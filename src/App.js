import './style/componentStyle.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/primary_screens/Home';
import About from './pages/primary_screens/About';
import Menu from './pages/primary_screens/Menu';
import Gallery from './pages/primary_screens/Gallery';
import RecipeDetail from './pages/primary_screens/RecipeDetail';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import { RecipeContextProvider } from './context/recipeContext';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import SignUp from './pages/authentication/SignUp';
// import Login from './pages/authentication/Login';

const App = () => {
  return (
    <div className='app'>
      <RecipeContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/signUp' element={<SignUp/>}/> */}
            {/* <Route path='/login' element={<Login/>}/> */}
            <Route path='/about' element={<About/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/gallery/:recipeDetailId' element={<RecipeDetail/>}/>
            <Route path='/addRecipe' element={<AddRecipe/>}/>
            <Route path='/editRecipe/:id' element={<EditRecipe/>}/>
          </Routes>
        </Router>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
      </RecipeContextProvider>
    </div>
  );
}

export default App;
