import { useState } from "react";
import { View, Text } from "react-native";
interface Book {
    id : number;
}
export default function(props : any) {            
    const book : Book = props.route.params;
    const SelectBook = function() {
        if(book.id == 0) {
            return <Book1/>;
        } else {
            return <View><Text>Error</Text></View>;
        }
    }
    return(
        <View>
            <SelectBook/>
        </View>
    );
}

function Book1() {    
    return(
        <View>
            <Text>1번책</Text>
        </View>
    );
}