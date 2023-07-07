import { createContext, useState } from "react";
import { recipeList } from "../services/recipeList";

export const RecipeContext = createContext(null);

export const RecipeContextProvider = (props) => {
    const [recipeListData, setRecipeListData] = useState(recipeList);
    
    const getRecipeListDetail = (listId) => {
        return recipeListData.find(data => data.id === listId);
    }
    
    return(
        <RecipeContext.Provider 
            value={{
                recipeListData,
                getRecipeListDetail,
            }}>
                {props.children}
        </RecipeContext.Provider>
    )
}