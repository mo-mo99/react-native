import { StyleSheet,Image, Text, View } from 'react-native';

export default function App() {
  var myloop = []
  for (let i = 0; i < 10; i++) {
    myloop.push(
      <View style={styles.child}>
        <Image
        style={styles.image}
        source={{
          uri: `https://cdn-icons-png.flaticon.com/512/147/14713${i}.png`
        }}
          />
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
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  child: {
    width: '33%', 
    height: '15%', 
    marginRight: 1,
    marginBottom:1
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
