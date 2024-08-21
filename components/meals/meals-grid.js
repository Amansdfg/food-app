import MealItem from "./meal-item"
import classes from "./meals-grid.module.css"
export default function MealsGrid({meals}){
    return(
        <ul className={classes.meals}>
            {meals.map(meal=>(
                <li key={meal.slug}>            
                    <MealItem {...meal}/>                    
                </li>
            ))}
        </ul>
    )
}