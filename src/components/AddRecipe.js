import React, {useState} from 'react';
import Modal from './Modal';
import CustomInput from './CustomInput';
import Ingredient from './Ingredient';

const AddRecipe = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [dishTitle, setDishTitle] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [prep, setPrep] = useState('');
  const [chill, setChill] = useState('');
  const [cook, setCook] = useState('');
  const [ingredientList, setIngredientList] = useState([]);

  const selectImageHandler = (image) => {
    setSelectedImage(image);
  }
  
  return (
    <div className='commonWrapper'>
      <h1>Add Recipe</h1>
      <div className='recipeDetailContainer'>
        <section className='detailTopSection'>
            <div className='recipeImageContainer'>
              <Modal imageValue={selectedImage} selectHandler={selectImageHandler} />
            </div>
            <div className='recipeTitleContainer'>
                <CustomInput 
                    type='text'
                    inputId='Recipe Title'
                    labelText='Title'
                    value={dishTitle}
                    onChange={(e) => setDishTitle(e.target.value)}
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
                />
            </div>
        </section>
    </div>
    </div>
  )
}

export default AddRecipe;