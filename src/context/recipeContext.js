import { createContext } from "react";
import { recipeList } from "../services/recipeList";

export const RecipeContext = createContext(null);

export const RecipeContextProvider = (props) => {
    const contextValue = {
        recipeList,
    }
    
    return(
        <RecipeContext.Provider value={contextValue}>{props.children}</RecipeContext.Provider>
    )
}