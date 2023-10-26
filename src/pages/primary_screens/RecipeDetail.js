import { useParams } from 'react-router-dom';
import BgImage from '../../components/BgImage';
import {GiTomato} from 'react-icons/gi';
import { useContext } from 'react';
import { RecipeContext } from '../../context/recipeContext';

const RecipeDetail = () => {
    const {getRecipeListDetail} = useContext(RecipeContext);
    const params = useParams();
    const recipeData = getRecipeListDetail(params.recipeDetailId);

  return (
    <div className='commonWrapper recipeDetailContainer'>
        <section className='detailTopSection'>
            <div className='recipeImageContainer'>
                <BgImage
                    bgImageClassName='recipeImage'
                    bgImage={recipeData.image}
                    dishName={recipeData.recipeType}
                />
            </div>
            <div className='recipeTitleContainer'>
                <h1>{recipeData.title}</h1>
                <div className='cookDetailContainer'>
                    <p>Total Time <span>{recipeData.totalTime}</span></p>
                    <p>Prep <span>{recipeData.prep}</span></p>
                    <p>Chill <span>{recipeData.chill}</span></p>
                    <p>Cook <span>{recipeData.cook}</span></p>
                </div>
            </div>
        </section>
        <section className='detailBottomSection'>
            <div className='ingredientsContainer'>
                <div className='ingredientTitleContainer'>
                    <h2>Ingredients</h2>
                </div>
                <div className='ingredientsListContainer'>
                    {recipeData?.ingredients?.map((item) => {
                        return(
                        <div className='ingredientRow' key={item.id}>
                            <div className='ingredientContent'>
                                <div className='vegetableIcon'>
                                    <GiTomato size={20}/>
                                </div>
                                <div>
                                    <p className='ingredientName'>{item.name}</p>
                                    <p className='ingredientFeature'>{item.type}</p>
                                </div>
                            </div>
                            <div className='gramContent'>
                                <p>{item.quantity}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className='instructionsContainer'>
                <h2>Instructions</h2>
                <p>{recipeData.instructions}</p>
            </div>
        </section>
    </div>
  )
}

export default RecipeDetail;