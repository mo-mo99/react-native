import { StyleSheet,Image, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const starLoop = []
  for (let i=0; i < 5; i++) {
    starLoop.push(
      <Image
      style={{height: 30, width: 30}}
      source={{
        uri: 'https://previews.123rf.com/images/bigmetha/bigmetha1611/bigmetha161100053/66261147-vector-of-gold-star-icon-on-gray-background.jpg'
      }}
      ></Image>
    )
  }
  const colors = ['#fa3700', '#00cefa', '#fa008e', '#1d4e33', '#00f8fa', '#b800fa']
  const sizes = ['S', 'M', 'L', 'XL']
  
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cP2cLUzJmFiS27M82tlZWjX-8x1fyQSxQQ&usqp=CAU'
          }}
        ></Image>
        <Text style={{color: '#7d7d7d', fontSize: 30,fontWeight: 'bold'}}>Super Soft T-Shirt</Text>
        <Text style={{color: '#1ccc7f', fontSize: 25, fontWeight: 'bold'}}>$ 12.22</Text>
        <Text style={{width: '80%', color: 'gray'}}>The lorem ipsum is, in printing, a series of meaningless words used temporarily to 
          calibrate a layout, the final text replacing the false text as soon as it is 
          ready or the layout is completed. Generally, a false Latin text, Lorem ipsum or Lipsum, is used</Text>
        <View style={{flexDirection: 'row'}}>{ starLoop }</View>
        <View style={{flexDirection: 'row'}}>
        {colors.map((color) => (
          <View style={{backgroundColor: color, borderRadius: 30, width: 30, height:30, margin: 2}}></View>
        ))}
        </View>
        <View style={{flexDirection: 'row'}}>
        {sizes.map((size) => (
          <Text style={styles.text}>{size}</Text>
        ))}
        </View>
        <View style={{width: '80%',borderBottomWidth: 2,borderBottomColor: 'lightgray'}}></View>
        <TouchableOpacity style={styles.button}>
          <Text style={{color:'#fff'}}>Add to Card</Text>
        </TouchableOpacity>
      </View>
      
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex: 5,
    width: "100%",
    marginTop: 4 ,
    alignItems: 'center',
  },
  text: {
    borderRadius:30, 
    borderWidth:1, 
    width: 40,
    height: 40,
    margin: 5,
    textAlign: 'center'
  },
  button: {
    marginTop: 4,
    backgroundColor: '#00eefa',
    height: 40,
    borderRadius: 30,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
