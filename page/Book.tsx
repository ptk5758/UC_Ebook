import { useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
interface Book {
    id : number;
}
interface Page {
    imgElement : JSX.Element
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
    const MAX_PAGE = 28;    
    const story = [
        {
            imgElement : <Image source={require('../static/book/1/page (1).png')}/>
        },
        {
            imgElement : <Image source={require('../static/book/1/page (2).png')}/>
        },
        {
            imgElement : <Image source={require('../static/book/1/page (3).png')}/>
        },
        {
            imgElement : <Image source={require('../static/book/1/page (4).png')}/>
        },
        {
            imgElement : <Image source={require('../static/book/1/page (5).png')}/>
        },
    ]
    const [now, setNow] = useState<Page>(story[0]);
    const [page, setPage] = useState<number>(0);
    
    return(
        <View>
            <TouchableHighlight>
                { now.imgElement }
            </TouchableHighlight>
        </View>
    );
}