import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, name: 'Milk'},
    {id: 2, name: 'Eggs'},
    {id: 3, name: 'Bread'},
    {id: 4, name: 'Juice'},
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    });
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
})

export default App;