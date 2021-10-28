import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk', done: false},
    {id: 2, text: 'Eggs', done: false},
    {id: 3, text: 'Bread', done: false},
    {id: 4, text: 'Juice', done: false},
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id)
    });
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert(
        "Error",
        "Ooops! You must write an item",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }else{
      setItems(prevItems => {
        return [{id: Math.round(Math.random() * 100 - 5) + 5, text}, ...prevItems]
      })
    }
  }

  const markAsDone = (id) => {
    setItems(items.map((item) => (
      item.id === id ? {...item, done: !item.done} : item
    )))
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items} 
        renderItem={({item}) => 
        <ListItem 
          item={item} 
          deleteItem={deleteItem}
          markAsDone={markAsDone}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
})

export default App;