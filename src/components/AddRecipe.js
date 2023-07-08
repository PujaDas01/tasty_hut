import React, {useContext, useState} from 'react';
import Modal from './Modal';
import CustomInput from './CustomInput';
import Ingredient from './Ingredient';
import CustomButton from './CustomButton';
import { RecipeContext } from '../context/recipeContext';

const AddRecipe = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [dishTitle, setDishTitle] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [prep, setPrep] = useState('');
  const [chill, setChill] = useState('');
  const [cook, setCook] = useState('');
  const [recipeType, setRecipeType] = useState('');
  const [ingredientList, setIngredientList] = useState([]);
  const [instructions, setInstructions] = useState('');

  const {addRecipeData} = useContext(RecipeContext);

  const selectImageHandler = (image) => {
    setSelectedImage(image);
  }

  const handleSubmitRecipe = () => {
    const newRecipeData = {
        id: new Date().getTime().toString(),
        image: selectedImage,
        title: dishTitle,
        totalTime: totalTime,
        prep: prep,
        chill: chill,
        cook: cook,
        recipeType: recipeType,
        ingredients: ingredientList,
        instructions: instructions,
    }
    if(!selectedImage || !dishTitle || !totalTime || !prep || !chill || !cook || !ingredientList || !instructions) {
        alert('Please enter all the data !');
    } else {
        addRecipeData(newRecipeData);
        setSelectedImage('');
        setDishTitle('');
        setTotalTime('');
        setPrep('');
        setChill('');
        setCook('');
        setRecipeType('');
        setIngredientList([]);
        setInstructions('');
        alert('Your data is send successfully !');
    }
  }
  
  return (
    <div className='addRecipeWrapper commonWrapper'>
        <div className='addRecipeTitleBox'>
            <h1>Add Recipe</h1>
            <CustomButton
                buttonText='Submit'
                onClick={handleSubmitRecipe}
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

export default AddRecipe;