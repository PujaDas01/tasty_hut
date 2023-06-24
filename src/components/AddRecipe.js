import React, {useState} from 'react';
import Modal from './Modal';
import {GrFormSubtract, GrFormAdd} from 'react-icons/gr';
import {GiTomato} from 'react-icons/gi';

const AddRecipe = () => {
  const [selectedImage, setSelectedImage] = useState('');

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
                <h1>Crispy Fried Chicken</h1>
                <div className='cookDetailContainer'>
                    <p>Total Time <span>30m</span></p>
                    <p>Prep <span>20m</span></p>
                    <p>Chill <span>00m</span></p>
                    <p>Cook <span>10m</span></p>
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
                <p>Heat coconut oil on medium-high heat.</p>
                <p>Thinly slice the onion and garlic and add to the pan and cook for 1 minute.</p>
            </div>
        </section>
    </div>
    </div>
  )
}

export default AddRecipe;