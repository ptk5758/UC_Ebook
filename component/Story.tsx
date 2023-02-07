import { useEffect, useRef, useState } from "react";
import { View, Text, TouchableHighlight, Image, StyleSheet } from "react-native";
import { Audio } from 'expo-av';
import { lockAsync, OrientationLock } from 'expo-screen-orientation'


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
        sound : require('../static/book/2/sound/title.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide2.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide3.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide4.png')}/>,
        sound : require('../static/book/2/sound/slide4.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide5.png')}/>,
        sound : require('../static/book/2/sound/slide5.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide6.png')}/>,
        sound : require('../static/book/2/sound/slide6.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide7.png')}/>,
        sound : require('../static/book/2/sound/slide7.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide8.png')}/>,
        sound : require('../static/book/2/sound/slide8.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide9.png')}/>,
        sound : require('../static/book/2/sound/slide9.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide10.png')}/>,
        sound : require('../static/book/2/sound/slide10.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide11.png')}/>,
        sound : require('../static/book/2/sound/slide11.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide12.png')}/>,
        sound : require('../static/book/2/sound/slide12.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide13.png')}/>,
        sound : require('../static/book/2/sound/slide13.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide14.png')}/>,
        sound : require('../static/book/2/sound/slide14.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide15.png')}/>,
        sound : require('../static/book/2/sound/slide15.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide16.png')}/>,
        sound : require('../static/book/2/sound/slide16.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide17.png')}/>,
        sound : require('../static/book/2/sound/slide17.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide18.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide19.png')}/>,
        sound : require('../static/book/2/sound/slide19.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/2/slide20.png')}/>,
    },

]
const storyC : IPage[] = [
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide1.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide2.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide3.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide4.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide5.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide6.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide7.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide8.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide9.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide10.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide11.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide12.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide13.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide14.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide15.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide16.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide17.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide18.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/3/slide1.png')}/>,
    },

]
const storyD : IPage[] = [
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide1.png')}/>,
        sound : require('../static/book/4/sound/slide1.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide2.png')}/>,
        sound : require('../static/book/4/sound/slide2.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide3.png')}/>,
        sound : require('../static/book/4/sound/slide3.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide4.png')}/>,
        sound : require('../static/book/4/sound/slide4.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide5.png')}/>,
        sound : require('../static/book/4/sound/slide5.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide6.png')}/>,
        sound : require('../static/book/4/sound/slide6.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide7.png')}/>,
        sound : require('../static/book/4/sound/slide7.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide8.png')}/>,
        sound : require('../static/book/4/sound/slide8.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide9.png')}/>,
        sound : require('../static/book/4/sound/slide9.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide10.png')}/>,
        sound : require('../static/book/4/sound/slide10.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide11.png')}/>,
        sound : require('../static/book/4/sound/slide11.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide12.png')}/>,
        sound : require('../static/book/4/sound/slide12.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide13.png')}/>,
        sound : require('../static/book/4/sound/slide13.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide14.png')}/>,
        sound : require('../static/book/4/sound/slide14.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide15.png')}/>,
        sound : require('../static/book/4/sound/slide15.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide16.png')}/>,
        sound : require('../static/book/4/sound/slide16.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide17.png')}/>,
        sound : require('../static/book/4/sound/slide17.mp3')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/4/slide18.png')}/>,        
    },
    
]
const storyE : IPage[] = [
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide1.png')}/>,
        sound : require('../static/book/5/sound/slide1.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide2.png')}/>,
        sound : require('../static/book/5/sound/slide2.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide3.png')}/>,
        sound : require('../static/book/5/sound/slide3.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide4.png')}/>,
        sound : require('../static/book/5/sound/slide4.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide5.png')}/>,
        sound : require('../static/book/5/sound/slide5.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide6.png')}/>,
        sound : require('../static/book/5/sound/slide6.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide7.png')}/>,
        sound : require('../static/book/5/sound/slide7.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide8.png')}/>,
        sound : require('../static/book/5/sound/slide8.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide9.png')}/>,
        sound : require('../static/book/5/sound/slide9.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide10.png')}/>,
        sound : require('../static/book/5/sound/slide10.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide11.png')}/>,
        sound : require('../static/book/5/sound/slide11.wav')
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/5/slide12.png')}/>,
        sound : require('../static/book/5/sound/slide12.wav')
    },
]
const storyF : IPage[] = [
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide1.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide2.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide3.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide4.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide5.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide6.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide7.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide8.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide9.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide10.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide11.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide12.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide13.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide14.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide15.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide16.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide17.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide18.png')}/>,
    },
    {
        imgElement : <Image style={style.image} source={require('../static/book/6/slide19.png')}/>,
    },
    
]
export function Story(props : {storyId : number, isHorizontal : boolean}) {
    const getStory = (storyId : number) => {
        switch(props.storyId) {
            case 0 :
                return storyA;
            case 1 :
                return storyB;
            case 2 :
                return storyC;
            case 3 :
                return storyD;
            case 4 :
                return storyE;
            case 5 : 
                return storyF;
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
    const setScreen = () => {
        if(!props.isHorizontal)
            return ()=>{}
        lockAsync(OrientationLock.LANDSCAPE);
        return () => {
            lockAsync(OrientationLock.DEFAULT);            
        }
    }
    useEffect(setScreen,[]);
    useEffect(titlePlay,[]);
    useEffect(()=>{
        return ()=>{            
            if(player.current) {
                player.current.unloadAsync();
            }
        }
    });
    return(
        <View>
            <TouchableHighlight style={style.panel} onPress={nextPage}>
                { now.imgElement }
            </TouchableHighlight>
        </View>
    );
}
