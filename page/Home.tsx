import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableHighlight } from 'react-native';
interface Book {
  id : number;
  title : string;
  clickEvent : Function;
  thum : any;
  isHorizontal : boolean;
}
export default function Home({navigation} : any) {
    function selectBook(_id :number, _isHorizontal : boolean) {
    navigation.navigate('book', {id : _id, isHorizontal : _isHorizontal});
  }
  const data : Book[] = [
    {id : 0, title : "고집센 도토리", thum:require('../static/book/1/thum.png'), clickEvent:selectBook, isHorizontal: false},
    {id : 1, title : "우리는 돌멩이", thum:require('../static/book/2/thum.png'), clickEvent:selectBook, isHorizontal: false},
    {id : 2, title : "나뭇잎", thum:require('../static/book/3/thum.png'), clickEvent:selectBook, isHorizontal: false},    
    {id : 3, title : "흙탕물", thum:require('../static/book/4/thum.png'), clickEvent:selectBook, isHorizontal: true},    
    {id : 4, title : "플라스틱 컵, 로미와 떠나는 모험", thum:require('../static/book/5/thum.png'), clickEvent:selectBook, isHorizontal: true},
    {id : 5, title : "모두 날 싫어해", thum:require('../static/book/6/thum.png'), clickEvent:selectBook, isHorizontal: true},
    
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Book id={item.id} title={item.title} clickEvent={selectBook} thum={item.thum} isHorizontal={item.isHorizontal}/>}
      />
      
    </View>
  );
}
function Book(props : Book) {
  return(
    <View style={styles.book}>      
      <TouchableHighlight onPress={()=>{props.clickEvent(props.id, props.isHorizontal)}}>
        <Image
            source={props.thum}
            style={{width: 180, height: 180}}          
          />
      </TouchableHighlight>      
      <Text style={{fontWeight : 'bold', paddingTop : 12}}>{props.title}</Text>        
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "#65fc81",
    alignItems : 'center'
  },
  book : {
    backgroundColor : "#eeeeee",
    margin : 10,
    width : 320,
    alignItems : 'center',
    padding : 15
  }
});
