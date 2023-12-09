import { View,Text, StyleSheet, FlatList } from "react-native";
import {MEALS} from '../data/dummy-data'
import MealItem from "../components/MealItem";



function MealsOverviewScreen({route}) {
    // parameters recieved from the back screen
    const catID = route.params.categoryId;

    // filter sends true or false if it consists in the array 
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catID) >= 0;
    } )


    function renderMealItem(itemData){
        return <MealItem title={itemData.item.title} />
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
