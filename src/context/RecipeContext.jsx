import { createContext, useState } from "react"

export const recipeContext = new createContext(null);
const RecipeContext = (props) => {
    const [data, setdata] = useState([]);
    console.log(data);
    return (
        <recipeContext.Provider value={{ data, setdata }}>
            {props.children}
        </recipeContext.Provider>
    )
}

export default RecipeContext
