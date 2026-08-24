import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const MealsListContext = createContext();

const meals = ["Pizza", "Burger", "Coke", "Fries", "Pasta", "Rice", "Bread", "Noodles", "Soup", "Salad"];

const MealsListProvider = ({ children }) => {
    const [mealsList, setMealsList] = useState(meals);

    return (
        <MealsListContext.Provider value={{mealsList}}>
            {children}
        </MealsListContext.Provider>
    )
};

MealsListProvider.propTypes = {
    children: PropTypes.node
};

export const useMealsList = () => useContext(MealsListContext);

export default MealsListProvider