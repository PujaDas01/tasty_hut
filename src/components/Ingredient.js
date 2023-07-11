import React, { useState } from 'react';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import {AiTwotoneDelete} from 'react-icons/ai';
import {MdEditDocument} from 'react-icons/md';
import {GiTomato} from 'react-icons/gi';

const Ingredient = (props) => {
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientType, setIngredientType] = useState('');
    const [ingredientQuantity, setIngredientQuantity] = useState('');
    const [isShowForm, setIsShowForm] = useState(false);
    const [toggleButton, setToggleButton] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const emptyValue = () => {
        setIngredientName('');
        setIngredientType('');
        setIngredientQuantity('');
    }

    const onCreateIngredientHandler = () => {
        if(!ingredientName || !ingredientType || !ingredientQuantity) {
            alert('Please fill the data!');
        } 
        else if (isEditItem) {
            props.setIngredientItems(
                props.ingredientItems.map(item => {
                if(item.id === isEditItem.id) {
                    return {id: isEditItem.id, name: ingredientName, type: ingredientType, quantity: ingredientQuantity};
                } 
                return item;
                }));
                setIsEditItem(null);
                emptyValue();
        }

         else {
            const newData = {
                id: new Date().getTime().toString(), 
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
        setIsEditItem(item);
        setIngredientName(item.name);
        setIngredientType(item.type);
        setIngredientQuantity(item.quantity);
        setToggleButton(false);
    }

    const handleDelete = (id) => {
        const updateList = props.ingredientItems.filter((item) => item.id !== id);
        props.setIngredientItems(updateList);
        emptyValue();
        setIsEditItem(null);
    }

  return (
    <div className='ingredientsContainer'>
        {isShowForm && (
        <div className='ingredientFormContainer'>
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
                buttonText={isEditItem ? 'Update' : 'Submit' }
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