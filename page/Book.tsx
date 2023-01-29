import { useState } from "react";
import { View, Text } from "react-native";
interface Book {
    id : number;
}
export default function(props : any) {            
    const book : Book = props.route.params;
    const [now, setNow] = useState<number>(0);
    return(
        <View>
            <Text>{book.id} 책이다..</Text>
        </View>
    );
}