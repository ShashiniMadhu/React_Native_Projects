import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return(
        <View style={styles.card}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4, //android specific
        shadowColor: "black", //ios specific
        shadowOffset: { width: 0, height: 2 }, //ios specific
        shadowRadius: 6, //ios specific
        shadowOpacity: 0.25, //ios specific
    },
});

export default Card;