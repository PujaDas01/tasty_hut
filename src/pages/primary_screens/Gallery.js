import React, {useContext} from 'react';
import BgImage from '../../components/BgImage';
import { RecipeContext } from '../../context/recipeContext';
import { useNavigate } from 'react-router-dom';
import { MdEditDocument } from 'react-icons/md';

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
                onClick={() => navigate(`/gallery/${item.id}`)}
                additionalText
                btnText={<MdEditDocument size={16}/>}
                additionalBtnClick={() => navigate(`/editRecipe/${item.id}`)}
              />
            </div>
          )
          })}
      </section>
    </div>
  )
}

export default Gallery;