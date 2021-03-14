import { StyleSheet } from 'react-native';

const listStyle = StyleSheet.create({
    categoryContainer: {
        flex: 1,
        padding: 5,
        alignItems: "center",
    },
    categoryCard: {
        width: "95%",
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5,
        padding: 3,
    },
    title: {
        textAlign: "left",
        padding: 5
    },
    itemContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 5,
        alignItems: "center",
    },
    itemCard: {
        width: "95%",
        padding: 3,
        flexDirection: "row",
        alignItems: "center",
    },
    homeTeam: {
        flex: 2,
        textAlign: "right",
    },
    awayTeam: {
        flex: 2,
        textAlign: "left",
    },
    time: {
        flex: 1,
        textAlign: "center",
    },
    logo: {
        flex: 1,
        width: 30,
        height: 30,
        resizeMode: "contain",
        alignItems: "center"
    }
});

export default listStyle;