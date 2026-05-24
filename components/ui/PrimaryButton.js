import {View, Text, Pressable, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
    return (
    <View style={styles.buttonOuterContainer}>
        <Pressable 
            style={({pressed}) => 
                pressed ? [styles.buttontInnerContainer, styles.pressed] : styles.buttontInnerContainer
            } 
            onPress={onPress} 
            android_ripple={{color: Colors.primary600}}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
     </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",
    },
    buttontInnerContainer:{
        borderRadius: 28,
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, //android specific
        margin: 4,
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    pressed:{
        opacity: 0.75
    }
});

export default PrimaryButton;