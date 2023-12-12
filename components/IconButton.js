import { Pressable , StyleSheet } from "react-native"
import {Ionicons} from '@expo/vector-icons';


function IconButton({onTapped,icon,colour}) {
  return (
    <Pressable onPress={onTapped} style={({pressed})=> pressed && styles.pressed} >
        <Ionicons name={icon}  size={24} color={colour}/>
    </Pressable>
  )
}

export default IconButton;

const styles = StyleSheet.create({
    pressed : {
        opacity : 0.7,
    }
});