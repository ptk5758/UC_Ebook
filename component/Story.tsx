import { useEffect, useRef, useState } from "react";
import { View, Text, TouchableHighlight, Image, StyleSheet } from "react-native";
import { Audio } from 'expo-av';

interface IPage {
    imgElement : JSX.Element;
    sound? : any;
}
const style = StyleSheet.create({
    panel : {
        justifyContent : "center",
        alignContent : "center"
    },
    image : {
        width : '100%',
        height : '100%',
        resizeMode : 'contain',
        justifyContent : "center",
        // margin : 10
    }
});
const storyA : IPage[] = [
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(1).png')}/>,
        sound : require('../static/book/1/sound/subject.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(2).png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(3).png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(4).png')}/>,
        sound : require('../static/book/1/sound/page4.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(5).png')}/>,
        sound : require('../static/book/1/sound/page5.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(6).png')}/>,
        sound : require('../static/book/1/sound/page6.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(7).png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(8).png')}/>,
        sound : require('../static/book/1/sound/page8.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(9).png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(10).png')}/>,
        sound : require('../static/book/1/sound/page10.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(11).png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(12).png')}/>,
        sound : require('../static/book/1/sound/page12.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(13).png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(14).png')}/>,
        sound : require('../static/book/1/sound/page14.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(15).png')}/>,
        sound : require('../static/book/1/sound/page15.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(16).png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(17).png')}/>,
        sound : require('../static/book/1/sound/page17.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(18).png')}/>,
        sound : require('../static/book/1/sound/page18.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(19).png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(20).png')}/>,
        sound :require('../static/book/1/sound/page20.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(21).png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(22).png')}/>,
        sound : require('../static/book/1/sound/page22.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(23).png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(24).png')}/>,
        sound : require('../static/book/1/sound/page24.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(25).png')}/>,
        sound : require('../static/book/1/sound/page25.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(26).png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(27).png')}/>,
        sound : require('../static/book/1/sound/page27.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/1/page(28).png')}/>,
        sound : require('../static/book/1/sound/page28.mp3')
    }
]
const storyB : IPage[] = [
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide1.png')}/>,
        sound : require('../static/book/1/sound/page28.mp3')
    }
]
export function Story(props : {storyId : number}) {
    const getStory = (storyId : number) => {
        switch(props.storyId) {
            case 0 :
                return storyA;
            case 1 :
                return storyB;
            default:
                return storyA;            
        }
    }
    const story = getStory(props.storyId);
    
    const [page, setPage] = useState<number>(0);
    const [now, setNow] = useState<IPage>({...story[page]});
    const player = useRef<Audio.Sound | null>(null);
    const playNext = async () => {
        try {
            if(player.current) {
                await player.current.unloadAsync();
            }            
            const source = story[page + 1].sound;
            if(!source) return;
            const status = {shouldPlay : true};
            const playbackInstance = new Audio.Sound();
            await playbackInstance.loadAsync(source, status, false);
            player.current = playbackInstance;
            await playbackInstance.playAsync();
            // playbackInstance.setOnPlaybackStatusUpdate(()=>{})
        } catch (error) {
            console.log(error);
        }
    }    
    const nextPage = () => {
        if(page + 1 >= story.length) {
            return;
        }
        setNow({...story[page + 1]});        
        playNext();
        setPage(page+1)
    }
    const titlePlay = () => {
        if(story[0].sound) {
            const instance = new Audio.Sound();
            instance.loadAsync(story[0].sound, {shouldPlay : true}, false)
            .then(()=>{
                player.current = instance;
                instance.playAsync();
            });

        }        
    }
    useEffect(titlePlay,[]);
    return(
        <View>
            <TouchableHighlight style={style.panel} onPress={nextPage}>
                { now.imgElement }
            </TouchableHighlight>
        </View>
    );
}
