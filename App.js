import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    });
  }

  const addItem = (text) => {
    setItems(prevItems => {
      return [{id: (Math.random() * 100 - 5) + 5, text}, ...prevItems]
    })
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <AddItem addItem={addItem}/>
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