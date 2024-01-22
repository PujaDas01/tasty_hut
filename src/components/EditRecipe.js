import React, {useContext, useState, useEffect} from 'react';
import Modal from './Modal';
import CustomInput from './CustomInput';
import Ingredient from './Ingredient';
import CustomButton from './CustomButton';
import { RecipeContext } from '../context/recipeContext';
import {toast} from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecipe = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [dishTitle, setDishTitle] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [prep, setPrep] = useState('');
  const [chill, setChill] = useState('');
  const [cook, setCook] = useState('');
  const [recipeType, setRecipeType] = useState('');
  const [ingredientList, setIngredientList] = useState([]);
  const [instructions, setInstructions] = useState('');
  const {getRecipeListDetail, editRecipeData, deleteRecipeData} = useContext(RecipeContext);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
      const data = getRecipeListDetail(params.id);
    if(data) {
        setDishTitle(data.title);
        setTotalTime(data.totalTime);
        setPrep(data.prep);
        setChill(data.chill);
        setCook(data.cook);
        setRecipeType(data.recipeType);
        setInstructions(data.instructions);
        setSelectedImage(data.image);
        setIngredientList(data.ingredients);
    } else {
        navigate(-1);
    }
  }, [params, getRecipeListDetail, navigate]);

  const selectImageHandler = (image) => {
    setSelectedImage(image);
  }

const handleEditRecipe = () => {
    if(!selectedImage || !dishTitle || !totalTime || !prep || !chill || !cook || !ingredientList || !instructions) {
        toast.warn('Please enter all the data !');
    } else {
        editRecipeData(
            {
                id: params.id,
                title: dishTitle,
                totalTime: totalTime,
                image: selectedImage,
                prep: prep,
                chill: chill,
                cook: cook,
                recipeType: recipeType,
                ingredients: ingredientList,
                instructions: instructions,
            }
        );
        setSelectedImage('');
        setDishTitle('');
        setTotalTime('');
        setPrep('');
        setChill('');
        setCook('');
        setRecipeType('');
        setIngredientList([]);
        setInstructions('');
        toast.success('Data Updated Successfully !');
        navigate(-1);
    }
}

    const handleDeleteRecipe = () => {
        deleteRecipeData(params.id);
        setSelectedImage('');
        setDishTitle('');
        setTotalTime('');
        setPrep('');
        setChill('');
        setCook('');
        setRecipeType('');
        setIngredientList([]);
        setInstructions('');
        toast.success('Data Deleted Successfully !');
        navigate(-1);
    }
  
  return (
    <div className='addRecipeWrapper commonWrapper'>
        <div className='btnHandlerContainer'>
            <CustomButton
                secondaryContainerClassName='editRecipeButton'
                buttonType='secondary'
                buttonText='Edit Recipe'
                onClick={handleEditRecipe}
            /> 
            <CustomButton
                buttonType='secondary'
                buttonText='Delete Recipe'
                onClick={handleDeleteRecipe}
            />
        </div>
      <div className='recipeDetailContainer'>
        <section className='detailTopSection'>
            <div className='recipeImageContainer'>
              <Modal imageValue={selectedImage} selectHandler={selectImageHandler} />
            </div>
            <div className='recipeTitleContainer'>
                <CustomInput 
                    type='text'
                    inputId='recipeTitle'
                    labelText='Title'
                    value={dishTitle}
                    onChange={(e) => setDishTitle(e.target.value)}
                />
                <CustomInput
                    type='text'
                    inputId='recipeType'
                    labelText='Recipe Type'
                    value={recipeType}
                    onChange={(e) => setRecipeType(e.target.value)}
                />
                <div className='cookDetailContainer'>
                    <CustomInput
                        type='text'
                        inputId='totalTime'
                        labelText='Total Time'
                        value={totalTime}
                        onChange={(e) => setTotalTime(e.target.value)}
                    />
                    <CustomInput
                        type='text'
                        inputId='prepTime'
                        labelText='Prep'
                        value={prep}
                        onChange={(e) => setPrep(e.target.value)}
                    />
                    <CustomInput
                        type='text'
                        inputId='chill'
                        labelText='Chill'
                        value={chill}
                        onChange={(e) => setChill(e.target.value)}
                    />
                    <CustomInput
                        type='text'
                        inputId='cook'
                        labelText='Cook'
                        value={cook}
                        onChange={(e) => setCook(e.target.value)}
                    />
                </div>
            </div>
        </section>
        <section className='detailBottomSection'>
            <Ingredient ingredientItems={ingredientList} setIngredientItems={setIngredientList}/>
            <div className='instructionsContainer'>
                <h2>Instructions</h2>
                <CustomInput
                    inputType='textarea'
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
            </div>
        </section>
    </div>
    </div>
  )
}

export default EditRecipe;