import { StyleSheet,Image, Text, View } from 'react-native';

export default function App() {
  const contacts = [
    {
      name: 'John Doe',
      time: '12 jan 11:14am',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147131.png',
      connection: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1Wq8GZJCNEniFbHKD5YCsxm3Mfwmxnh1zQ&usqp=CAU'
    },
    {
      name: 'Mark Doe',
      time: '12 jan 12:14am',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147132.png',
      connection: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1Wq8GZJCNEniFbHKD5YCsxm3Mfwmxnh1zQ&usqp=CAU'
    },
    {
      name: 'Frank Doe',
      time: '12 jan 13:14am',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147133.png',
      connection: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1Wq8GZJCNEniFbHKD5YCsxm3Mfwmxnh1zQ&usqp=CAU'
    },
    {
      name: 'James Doe',
      time: '12 jan 14:14am',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147134.png',
      connection: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1Wq8GZJCNEniFbHKD5YCsxm3Mfwmxnh1zQ&usqp=CAU'
    },
    {
      name: 'Jordan boor',
      time: '12 jan 15:14am',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147135.png',
      connection: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHtT01NkPRmYezUuwD2nQIdMvzWrVLHpdhg&usqp=CAU'
    },
    {
      name: 'Adam Smith',
      time: '12 jan 16:14am',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147136.png',
      connection: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHtT01NkPRmYezUuwD2nQIdMvzWrVLHpdhg&usqp=CAU'
    },
    {
      name: 'Clara boor',
      time: '12 jan 17:14am',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147137.png',
      connection: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHtT01NkPRmYezUuwD2nQIdMvzWrVLHpdhg&usqp=CAU'
    },
    {
      name: 'Stephen Johnson',
      time: '12 jan 18:14am',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147138.png',
      connection: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHtT01NkPRmYezUuwD2nQIdMvzWrVLHpdhg&usqp=CAU'
    },
    {
      name: 'Frank Nelson',
      time: '12 jan 19:14am',
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147139.png',
      connection: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHtT01NkPRmYezUuwD2nQIdMvzWrVLHpdhg&usqp=CAU'
    },
  ]
  
  return (
    <View style={styles.container}>
      {contacts.map((i) => (
        <View style={styles.item}>
          
          <View style={styles.data}>
          
          <Image 
          style={styles.image}
          source={{
            uri: i.avatar
          }}></Image>
          
          <View>
          <Text style={{fontSize:15, fontWeight: 'bold'}}>{i.name}</Text>
          <Text>{i.time}</Text>
          </View>
          </View>

          <Image
          style={styles.call}
          source={{
            uri: i.connection
          }}
          ></Image>

        </View>
))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flex:1,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    justifyContent: 'space-between'
  },
  data: {
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width:50,
    height: 50,
    borderRadius: 30,
    margin: 10
  },
  call: {
    width:30,
    height: 30,
    borderRadius: 30,
    marginRight: 15,
  }
});
