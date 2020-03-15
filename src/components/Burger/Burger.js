import React from 'react';
import classes from './Burger.css'
import BurgerIngredients from './Burgeringredients/Burgeringredients';

    const burger = (props) => {
        let transformedingredients = Object.keys(props.ingredients).
        map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
               return <BurgerIngredients key={igKey + i} type={igKey} />
            });
        })
        .reduce( (arr, el) => {
            return arr.concat(el)
        }, []);
        if(transformedingredients.length ===  0){
            transformedingredients = <p> please start adding ingredients</p>
        }
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
           {transformedingredients}
            <BurgerIngredients type="bread-bottom"/>

        </div>

    )
}
export default burger;