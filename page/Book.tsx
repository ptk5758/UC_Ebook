import { useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { Story } from "../component/Story";
interface Book {
    id : number;
    isHorizontal : boolean;
}

export default function(props : any) {            
    const book : Book = props.route.params;
    // const SelectBook = function() {
    //     if(book.id == 0) {
    //         return <BookA/>;
    //     } else {
    //         return <View><Text>Error</Text></View>;
    //     }
    // }
    return(
        <View>
            <Story storyId={book.id} isHorizontal={book.isHorizontal}/>
        </View>
    );
}

