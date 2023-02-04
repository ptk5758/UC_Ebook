import { useEffect, useState } from "react";
import { View, Text, TouchableHighlight, Image, StyleSheet } from "react-native";
import { Audio } from 'expo-av';
import { SoundObject } from "expo-av/build/Audio";

interface IPage {
    imgElement : JSX.Element;
    soundPlay? : Promise<SoundObject>;
}

export function BookA() {
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
    const story : IPage[] = [
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(1).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/subject.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(2).png')}/>,
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(3).png')}/>,
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(4).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page4.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(5).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page5.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(6).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page6.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(7).png')}/>,
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(8).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page8.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(9).png')}/>,
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(10).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page10.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(11).png')}/>,
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(12).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page12.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(13).png')}/>,
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(14).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page14.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(15).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page15.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(16).png')}/>,
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(17).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page17.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(18).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page18.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(19).png')}/>,
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(20).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page20.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(21).png')}/>,
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(22).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page22.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(23).png')}/>,
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(24).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page24.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(25).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page25.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(26).png')}/>,
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(27).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page27.mp3'), {isLooping : true})
        },
        {
            imgElement : <Image style={style.image} source={require('../static/book/1/page(28).png')}/>,
            soundPlay : Audio.Sound.createAsync(require('../static/book/1/sound/page28.mp3'), {isLooping : true})
        }
    ]    
      
    const [sound, setSound] = useState<SoundObject | null>();
    const [page, setPage] = useState<number>(0);
    const [now, setNow] = useState<IPage>(story[page]);
    function nextPage() {        
        setNow({...story[page+1]});
        setPage(page + 1);
        now.soundPlay ? now.soundPlay
        .then(obj => {
            obj.sound.playAsync()
            .catch(err => console.log(err))            
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

    now.soundPlay ? now.soundPlay
    .then(obj => {
        obj.sound.playAsync();
        setSound(obj);
    })
    : () => {setSound(null)};
    
    return(
        <View>
            <TouchableHighlight style={style.panel} onPress={nextPage}>
                { now.imgElement }
            </TouchableHighlight>
        </View>
    );
}