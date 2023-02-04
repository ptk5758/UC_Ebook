import { useEffect, useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { Audio } from 'expo-av';
import { SoundObject } from "expo-av/build/Audio";

interface IPage {
    imgElement : JSX.Element;
    soundPlay? : Promise<SoundObject>;
}

export function BookA() {    
    
    // Audio.Sound.createAsync(require('../static/book/1/sound/Hello.mp3'))
    // .then((obj)=>{
    //     obj.sound.playAsync()
    //     .then(data => console.log(data))
    // });    
    const story : IPage[] = [
        {
            imgElement : <Image source={require('../static/book/1/page(1).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/Hello.mp3'))
        },
        {
            imgElement : <Image source={require('../static/book/1/page(2).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/Hello.mp3'))
        },
        {
            imgElement : <Image source={require('../static/book/1/page(3).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page3.mp3'))
        },
        {
            imgElement : <Image source={require('../static/book/1/page(4).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page4.mp3'))
        },
        {
            imgElement : <Image source={require('../static/book/1/page(5).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page5.mp3'))
        },
    ]      
    const [sound, setSound] = useState<SoundObject | null>();
    const [page, setPage] = useState<number>(0);
    const [now, setNow] = useState<IPage>(story[page]);
    function nextPage() {        
        setNow(story[page+1]);
        setPage(page + 1);
        now.soundPlay ? now.soundPlay
        .then(obj => {
            obj.sound.playAsync();
            setSound(obj);
        })
        : () => {setSound(null)};
    }   
    useEffect(()=>{
        return sound ? () => {
            sound.sound.unloadAsync()
        }   
        : undefined     
    }, [sound]);
    
    return(
        <View>
            <TouchableHighlight onPress={nextPage}>
                { now.imgElement }
            </TouchableHighlight>
        </View>
    );
}