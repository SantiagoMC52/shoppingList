import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, name: 'Milk'},
    {id: 2, name: 'Eggs'},
    {id: 3, name: 'Bread'},
    {id: 4, name: 'Juice'},
  ])

  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
})

export default App;