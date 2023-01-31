import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, Button, TouchableHighlight } from 'react-native';
interface Book {
  id : number;
  title : string;
  clickEvent : Function;
}
export default function Home({navigation} : any) {
  const data = [
    {id : 0, title : "고집센 도토리", content : "TEST"},
    {id : 1, title : "고집센 도토리", content : "TEST"},
    {id : 2, title : "고집센 도토리", content : "TEST"},
    {id : 3, title : "고집센 도토리", content : "TEST"}
  ];
  function selectBook(_id :number) {
    navigation.navigate('book', {id : _id});
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Book id={item.id} title={"고집센 도토리"} clickEvent={selectBook}/>}
      />
      
    </View>
  );
}
function Book(props : Book) {
  return(
    <View style={styles.book}>      
      <TouchableHighlight onPress={()=>{props.clickEvent(props.id)}}>
        <Image
            source={require('../static/book/1/thum.png')}
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
