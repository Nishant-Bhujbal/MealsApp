import { useContext, useLayoutEffect } from "react";
import { View , Text , Image , StyleSheet, ScrollView, Button} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavouriteContext } from "../store/context/favourites-context";

function MealDetailScreen({route,navigation}) {
    const favouriteMealsCtx = useContext(FavouriteContext);

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

    function changeFavouriteStatus(){
      if(mealIsFavourite){
        favouriteMealsCtx.removeFavourite(mealId);
      }
      else{
        favouriteMealsCtx.addFavourite(mealId);
      }
    }

    // used to add a button to the navbar or header of the sccreen
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight : ()=> {
          return <IconButton 
          onTapped={changeFavouriteStatus} 
          icon={mealIsFavourite ? 'star' : 'star-outline'}
          colour='white'/>
        }
      })
    },[navigation,changeFavouriteStatus]);


  return (
    
    <ScrollView style={styles.rootContainer} >
        <Image style={styles.image} source={{uri : selectedMeal.imageUrl}} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
        duration={selectedMeal.duration} 
        complexity={selectedMeal.complexity} 
        affordability={selectedMeal.affordability} 
        textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer} >
          <View style={styles.listContainer} >
            <Subtitle children={'Ingredients'} />
            <List data={selectedMeal.ingredients}  />
            <Subtitle children={'Steps'} />
            <List data={selectedMeal.steps}/>
          </View>
        </View>
    </ScrollView>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer : {
    marginBottom : 32,
  },
  image : {
    width : '100%',
    height : 350,
  },
  title : {
    fontWeight : 'bold',
    fontSize : 24,
    margin : 8,
    textAlign : 'center',
    color : 'white',
  },
  detailText : {
    color : 'white'
  },
  listOuterContainer :{
    alignItems : 'center'
  },
  listContainer : {
    width : '80%',

  }
});