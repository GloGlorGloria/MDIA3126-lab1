import { Text, View } from "react-native";
export default function Bio({ NameText }){
    return <View> 
        <h1
            style={{
                color:"blue",
                fontFamily: "cursive",
                fontSize: 40,
                marginBottom: 0,
            }}>{NameText}</h1>
    </View>
};