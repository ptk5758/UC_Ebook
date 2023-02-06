import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableHighlight } from 'react-native';
interface Book {
  id : number;
  title : string;
  clickEvent : Function;
  thum : any;
}
export default function Home({navigation} : any) {
    function selectBook(_id :number) {
    navigation.navigate('book', {id : _id});
  }
  const data : Book[] = [
    {id : 0, title : "고집센 도토리", thum:require('../static/book/1/thum.png'), clickEvent:selectBook},
    {id : 1, title : "고집센 도토리", thum:require('../static/book/2/thum.png'), clickEvent:selectBook},
    
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Book id={item.id} title={"고집센 도토리"} clickEvent={selectBook} thum={item.thum}/>}
      />
      
    </View>
  );
}
function Book(props : Book) {
  return(
    <View style={styles.book}>      
      <TouchableHighlight onPress={()=>{props.clickEvent(props.id)}}>
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
