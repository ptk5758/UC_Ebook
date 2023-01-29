import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
interface Book {
  title : string;
}
export default function App() {
  const data = [
    {id : 0, title : "고집센 도토리", content : "TEST"},
    {id : 1, title : "고집센 도토리", content : "TEST"},
    {id : 2, title : "고집센 도토리", content : "TEST"},
    {id : 3, title : "고집센 도토리", content : "TEST"}
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Book/>}
      />
      <StatusBar style="auto" />
    </View>
  );
}
function Book() {
  return(
    <View style={styles.book}>
      {/* <Image source={{uri : './static/book/1/thum.PNG'}} style={{width : 100, height : 100}}/> */}
      <Image
          source={require('./static/book/1/thum.png')}
          style={{width: 180, height: 180}}
        />
      <Text style={{fontWeight : 'bold', paddingTop : 12}}>고집센</Text>
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
