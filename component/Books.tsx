import { useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";

interface IPage {
    imgElement : JSX.Element
}

export function BookA() {    
    const MAX_PAGE = 28;    
    const story : IPage[] = [
        {
            imgElement : <Image source={require('../static/book/1/page(1).png')}/>
        },
        {
            imgElement : <Image source={require('../static/book/1/page(2).png')}/>
        },
        {
            imgElement : <Image source={require('../static/book/1/page(3).png')}/>
        },
        {
            imgElement : <Image source={require('../static/book/1/page(4).png')}/>
        },
        {
            imgElement : <Image source={require('../static/book/1/page(5).png')}/>
        },
    ]      
    const [page, setPage] = useState<number>(0);
    const [now, setNow] = useState<IPage>(story[page]);
    function nextPage() {        
        setNow(story[page+1]);
        setPage(page + 1);     
    }   
    
    return(
        <View>
            <TouchableHighlight onPress={nextPage}>
                { now.imgElement }
            </TouchableHighlight>
        </View>
    );
}