import { StyleSheet,Image, Text, View } from 'react-native';

export default function App() {
  var myloop = []
  for (let i = 0; i < 8; i++) {
    myloop.push(
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={{
          uri: 'https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?w=2000'
        }}
          />
        <Text style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      {
        myloop
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  child: {
    flex: 1,
    backgroundColor: '#fff',
    width: "100%",
    margin: 4 ,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: "row"
  },
  image: {
    width:50,
    height: 50,
    borderRadius: 30,
    margin: 10
  },
  text: {
    color: 'blue', 
    fontSize: 18, 
    width: '70%', 
    marginLeft: 6
  }
});
