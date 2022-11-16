import { StyleSheet,Image, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={{flex: 1}}>
      <View style={styles.title}>
        <View style={{marginTop: 10, alignItems: 'center', width: '80%'}}>
          <Image
          style={styles.avatar}
          source={{
            uri : 'https://cdn-icons-png.flaticon.com/512/147/147139.png'
          }}></Image>
          <Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold'}}>John Doe</Text>
        </View>
      </View>
      <View style={{flex: 5}}></View>
        
      </View>
    
  );
}

const styles = StyleSheet.create({
 
  title: {
    flex: 2,
    backgroundColor: '#00cefa',
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",
  },
  avatar: {
    width: 100, 
    height: 100, 
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff'

  }
});
