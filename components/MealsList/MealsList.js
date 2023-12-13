import { View , StyleSheet, FlatList} from "react-native"

import MealItem from "./MealItem";

function MealsList({items}) {

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
             <FlatList data={items} 
             renderItem={renderMealItem} 
             keyExtractor={(item)=> item.id} />
        </View>
       )
}

export default MealsList;

const styles = StyleSheet.create({
    continaer : {
        flex : 1,
        padding : 16,
    }
});
