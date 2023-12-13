import { useContext } from "react" 
import { View, Text,StyleSheet } from "react-native";
import { FavouriteContext } from "../store/context/favourites-context";

import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList"

function FavouriteScreen() {
  const  favouriteMealsCtx = useContext(FavouriteContext);

  const favouriteMeals = MEALS.filter(meal => favouriteMealsCtx.ids.includes(meal.id));

  if(favouriteMeals.length === 0){
    return <View style={styles.rootContainer} >
      <Text style={styles.text} >You have no favourite meals yet!</Text>
    </View>
  }

  return <MealsList items={favouriteMeals} />
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  text : {
    fontSize : 18,
    fontWeight : 'bold',
    color : 'white',
  }
})