import { useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { BookA } from "../component/Books";
interface Book {
    id : number;
}

export default function(props : any) {            
    const book : Book = props.route.params;
    const SelectBook = function() {
        if(book.id == 0) {
            return <BookA/>;
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

