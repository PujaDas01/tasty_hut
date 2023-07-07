import React, {useContext} from 'react';
import BgImage from '../../components/BgImage';
import { RecipeContext } from '../../context/recipeContext';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const {recipeListData} = useContext(RecipeContext);
  const navigate = useNavigate();

  return (
    <div className='commonWrapper galleryWrapper'>
      <section>
        {recipeListData.map((item) => {
          return(
            <div className='galleryItem' key={item.id}>
              <BgImage
                bgImage={`${item.image}`}
                bgImageStyle={{minHeight: 320, backgroundPosition: `center 50%`}}
                dishName={item.title}
                onContainerClick={() => navigate(`/gallery/${item.id}`)}
              />
            </div>
          )
          })}
      </section>
    </div>
  )
}

export default Gallery;