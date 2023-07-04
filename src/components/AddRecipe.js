import React, {useState} from 'react';
import Modal from './Modal';
import {GrFormSubtract, GrFormAdd} from 'react-icons/gr';
import {GiTomato} from 'react-icons/gi';
import CustomInput from './CustomInput';

const AddRecipe = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [dishTitle, setDishTitle] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const [prep, setPrep] = useState('');
  const [chill, setChill] = useState('');
  const [cook, setCook] = useState('');

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
            <div className='ingredientsContainer'>
                <div className='ingredientTitleContainer'>
                    <h2>Ingredients</h2>
                    <div className='ingredientNumberContainer'>
                        <button><GrFormSubtract className='numberSignIcon' /></button>
                        <p>4</p>
                        <button><GrFormAdd className='numberSignIcon'/></button>
                    </div>
                </div>
                <div className='ingredientsListContainer'>
                    <div className='ingredientRow'>
                        <div className='ingredientContent'>
                            <div className='vegetableIcon'>
                                <GiTomato size={20}/>
                            </div>
                            <div>
                                <p className='ingredientName'>Chopped tomatoes</p>
                                <p className='ingredientFeature'>Tinned</p>
                            </div>
                        </div>
                        <div className='gramContent'>
                            <p>400g</p>
                        </div>
                    </div>
                    <div className='ingredientRow'>
                        <div className='ingredientContent'>
                            <div className='vegetableIcon'>
                                <GiTomato size={20}/>
                            </div>
                            <div>
                                <p className='ingredientName'>Coconut milk</p>
                                <p className='ingredientFeature'>Tinned</p>
                            </div>
                        </div>
                        <div className='gramContent'>
                            <p>400g</p>
                        </div>
                    </div>
                    <div className='ingredientRow'>
                        <div className='ingredientContent'>
                            <div className='vegetableIcon'>
                                <GiTomato size={20}/>
                            </div>
                            <div>
                                <p className='ingredientName'>Chickpeas</p>
                                <p className='ingredientFeature'>Tinned</p>   
                            </div>
                        </div>
                        <div className='gramContent'>
                            <p>240g</p>
                        </div>
                    </div>
                    <div className='ingredientRow'>
                        <div className='ingredientContent'>
                            <div className='vegetableIcon'>
                                <GiTomato size={20}/>
                            </div>
                            <div>
                                <p className='ingredientName'>Coriander</p>
                                <p className='ingredientFeature'>Chopped</p>
                            </div>
                        </div>
                        <div className='gramContent'>
                            <p>15g</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='instructionsContainer'>
                <h2>Instructions</h2>
                {/* <p>Heat coconut oil on medium-high heat.</p>
                <p>Thinly slice the onion and garlic and add to the pan and cook for 1 minute.</p> */}
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