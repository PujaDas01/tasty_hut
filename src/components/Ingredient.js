import React, { useState } from 'react';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import {AiTwotoneDelete} from 'react-icons/ai';
import {MdEditDocument} from 'react-icons/md';
import Modal from './Modal';
import { ingredientGallery } from '../services/ingredientGallery';

const Ingredient = (props) => {
    const [ingredientImage, setIngredientImage] = useState('');
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientType, setIngredientType] = useState('');
    const [ingredientQuantity, setIngredientQuantity] = useState('');
    const [isShowForm, setIsShowForm] = useState(false);
    const [toggleButton, setToggleButton] = useState(true);
    const [itemId, setItemId] = useState(null);

    const emptyValue = () => {
        setIngredientImage('');
        setIngredientName('');
        setIngredientType('');
        setIngredientQuantity('');
    }
    
    const onCreateIngredientHandler = () => {
        if(!ingredientImage || !ingredientName || !ingredientType || !ingredientQuantity) {
            alert('Please fill the data!');
        } 
        else if (itemId) {
            props.setIngredientItems(
                props.ingredientItems.map(item => {
                if(item.id === itemId) {
                    return {id: itemId, image: ingredientImage, name: ingredientName, type: ingredientType, quantity: ingredientQuantity};
                } 
                return item;
                }));
                setItemId(null);
                emptyValue();
        }

         else {
            const newData = {
                id: new Date().getTime().toString(), 
                image: ingredientImage,
                name: ingredientName, 
                type: ingredientType, 
                quantity: ingredientQuantity,
            }

            props.setIngredientItems([...props.ingredientItems, newData]);
            emptyValue();
        }
    }

    const onIngredientAddHandler = () => {
        setIsShowForm(true);
        setToggleButton(false);
    }

    const onIngredientCloseHandler = () => {
        setToggleButton(true);
        setIsShowForm(false);
    }

    const handleEdit = (item) => {
        setIsShowForm(true);
        setItemId(item.id);
        setIngredientImage(item.image);
        setIngredientName(item.name);
        setIngredientType(item.type);
        setIngredientQuantity(item.quantity);
        setToggleButton(false);
    }

    const handleDelete = (id) => {
        const updateList = props.ingredientItems.filter((item) => item.id !== id);
        props.setIngredientItems(updateList);
        emptyValue();
        setItemId(null);
    }

    const selectIngredientImage = (image) => {
        setIngredientImage(image);
    }
    
  return (
    <div className='ingredientsContainer'>
        {isShowForm && (
        <div className='ingredientFormContainer'>
            <h5>Pick Ingredient</h5>
            <Modal list={ingredientGallery} imageValue={ingredientImage} selectHandler={selectIngredientImage} />
            <CustomInput 
                type='text'
                labelText='Ingredient Name'
                inputId='ingredientName'
                value={ingredientName}
                onChange={(e) => setIngredientName(e.target.value)}
            />
            <CustomInput 
                type='text'
                labelText='Ingredient Type'
                inputId='ingredientType'
                value={ingredientType}
                onChange={(e) => setIngredientType(e.target.value)}
            />
            <CustomInput 
                type='text'
                labelText='Quantity'
                inputId='ingredientQuantity'
                value={ingredientQuantity}
                onChange={(e) => setIngredientQuantity(e.target.value)}
            />
            <CustomButton
                buttonText={itemId ? 'Update' : 'Submit'}
                onClick={onCreateIngredientHandler}
            />
        </div>)}
        <div className='ingredientTitleContainer'>
            <h2>Ingredients</h2>
                {toggleButton ? (
                    <CustomButton
                        buttonText='Add'
                        onClick={onIngredientAddHandler}
                />
                ) : (
                    <CustomButton
                        buttonText='Close'
                        onClick={onIngredientCloseHandler}
                />
                )}
        </div>
        <div className='ingredientsListContainer'>
            {props.ingredientItems.map((item) => {
                console.log('item', item);
                return(
                    <div className='ingredientRow' key={item.id}>
                        <div className='ingredientContent'>
                            <div className='vegetableIcon'>
                                <img src={`/images/${item.image}`} alt='Ingredient' title='Ingredient' />
                            </div>
                            <div>
                                <p className='ingredientName'>{item.name}</p>
                                <p className='ingredientFeature'>{item.type}</p>
                            </div>
                        </div>
                        <div className='gramContent'>
                            <p>{item.quantity}</p>
                        </div>
                        <div className='editDeleteContainer'>
                            <CustomButton
                                customWrapperStyle={{paddingTop: 0, paddingBottom: 0}}
                                buttonText={<MdEditDocument size={18}/>}
                                onClick={() => handleEdit(item)}
                            />
                            <CustomButton
                                customWrapperStyle={{paddingTop: 0, paddingBottom: 0}}
                                buttonText={<AiTwotoneDelete size={18} />}
                                onClick={() => handleDelete(item.id)}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Ingredient;