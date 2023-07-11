import { createContext, useState } from "react";
import { recipeList } from "../services/recipeList";

export const RecipeContext = createContext(null);

export const RecipeContextProvider = (props) => {
    const [recipeListData, setRecipeListData] = useState(recipeList);
    
    const getRecipeListDetail = (listId) => {
        return recipeListData.find(data => data.id === listId);
    }

    const addRecipeData = (data) => {
        setRecipeListData([data, ...recipeListData,]);
    }

    const editRecipeData = (editedData) => {
        const data = recipeListData.map((item) => {
            if(item.id === editedData.id) {
                return editedData;
            }
            return item;
        })
        setRecipeListData(data);
    }

    
    return(
        <RecipeContext.Provider
            value={{
                recipeListData,
                getRecipeListDetail,
                addRecipeData,
                editRecipeData,
            }}>
                {props.children}
        </RecipeContext.Provider>
    )
}