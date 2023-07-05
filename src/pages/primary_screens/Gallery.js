import React, {useContext} from 'react';
import BgImage from '../../components/BgImage';
import { RecipeContext } from '../../context/recipeContext';

const Gallery = () => {
  const {recipeList} = useContext(RecipeContext);

  console.log('recipeList', recipeList)

  return (
    <div className='commonWrapper galleryWrapper'>
      <section>
      {recipeList.map((item) => {
        return(
          <div className='galleryItem' key={item.id}>
            <BgImage
              bgImage={`${item.image}`}
              bgImageStyle={{minHeight: 320, backgroundPosition: `center 50%`}}
              dishName={item.title}
            />
          </div>
        )
        })}
      </section>
    </div>
  )
}

export default Gallery;




