import { useEffect, useState, useRef } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import InputForm from './components/InputForm'
import IngredientList from './components/IngredientList'
import GetRecipe from './components/GetRecipe'
import MistralRecipe from './components/MistralRecipe'

import './index.css'

const ChiefMistral = () => {
    const [ingredientList, setIngredientList] = useState([]);
    const [recipeShown, setRecipeShown] = useState(false);
    const [recipeIdea, setRecipeIdea] = useState('');

    const recipeRef = useRef(null);
    // After the recipe is loaded, then the page is scrolled down, so that take the 
    // reference of the 'div' section where the 'get recipe' button is in.

    useEffect(() => {
        if(recipeIdea !== "" && recipeRef.current !== null) {
            recipeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipeIdea])

    // Create the function and pass as props
    const addIngredient = (newIngredient) => {
        if(newIngredient && newIngredient.trim() !== '' && !/\d/.test(newIngredient)) {
            setIngredientList(
                prevIngredientList => [...prevIngredientList, newIngredient.trim()]
                // If you consider the previous values or change the state according to the previous value,
                // then you need to use like this.
            );
        }
    }

    const deleteIngredient = (indexToDelete) => {
        setIngredientList(prevIngredientList => 
            prevIngredientList.filter((_, index) => index !== indexToDelete)
        );
    }

    const clearAllIngredients = () => {
        setIngredientList([]);
    }

    return (
        <div className='chief-mistral'>
            <Header />
            <main className='container py-3 flex-grow-1' style={{ maxWidth: '860px' }}>
                <InputForm addIngredient={addIngredient} />
                
                <IngredientList 
                    ingredientList={ingredientList} 
                    deleteIngredient={deleteIngredient}
                    clearAllIngredients={clearAllIngredients}
                    isRecipeGenerated={recipeShown}
                />
                
                {ingredientList.length ? (
                    ingredientList.length > 2 ? (
                        <GetRecipe
                            showBtn={true}
                            ingredientList={ingredientList}
                            setRecipeShown={setRecipeShown}
                            setRecipeIdea={setRecipeIdea}
                            ref={recipeRef}
                        />
                    ) : (
                        <GetRecipe showBtn={false} ingredientList={null} />
                    )
                ) : null}

                {recipeShown ? (
                    <div className='mt-4 mb-5'>
                        <MistralRecipe recipeIdea={recipeIdea} />
                    </div>
                ) : null}
            </main>
            <Footer />
        </div>
    )
}

export default ChiefMistral