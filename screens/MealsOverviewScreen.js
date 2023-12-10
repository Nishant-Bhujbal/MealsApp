import { useLayoutEffect } from "react";
import { View,Text, StyleSheet, FlatList } from "react-native";


import {MEALS , CATEGORIES} from '../data/dummy-data'
import MealItem from "../components/MealItem";



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



    function renderMealItem(itemData){
        // when we have many props we can make a object like this
        const item = itemData.item;
        const mealItemProps = {
            id : item.id,
            title : item.title,
            imageUrl : item.imageUrl,
            affordability : item.affordability,
            complexity : item.complexity,
            duration : item.duration,
        };
        // and pass it like this using spread operator
        return <MealItem {...mealItemProps}/>
    }

  return (
   <View style={styles.continaer}>
        <FlatList data={displayedMeals} 
        renderItem={renderMealItem} 
        keyExtractor={(item)=> item.id} />
   </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    continaer : {
        flex : 1,
        padding : 10,
    }
});
