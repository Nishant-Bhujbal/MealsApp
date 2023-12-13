import { useLayoutEffect } from "react";
import { View,Text, StyleSheet, FlatList } from "react-native";


import {MEALS , CATEGORIES} from '../data/dummy-data'
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";



function MealsOverviewScreen({route,navigation}) {
    // parameters recieved from the back screen
    const catID = route.params.categoryId;

    // filter sends true or false if it consists in the array 
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catID) >= 0;
    } )

    useLayoutEffect(()=> {
        const categoryTitle = CATEGORIES.find(
            (category)=> category.id === catID
        ).title;
    
        navigation.setOptions({
            title : categoryTitle,
        });
    },[catID,navigation])

  return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen;
