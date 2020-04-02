import {StyleSheet} from 'react-native';

let styles = StyleSheet.create({
    backView: {
        flex:1, 
        justifyContent:"center", 
        paddingTop: 10,
    },
    backText: {
        marginLeft: 20, 
        height: 60,
    },
    backImg: {
        width: 40,
        height: 40,
    },
    centerView: {
        flex: 5,
        alignContent: "center",
        justifyContent: "center",
    },
    paddedView: {
        padding:30,
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        borderRadius: 5,
        marginBottom: 20,
    }
});

export default styles;