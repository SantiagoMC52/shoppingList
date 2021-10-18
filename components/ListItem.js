import { Linter } from 'eslint';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem, markAsDone}) => {

  const styleText = {
    decoration: {
      textDecorationLine: !item.done ? 'none' : 'line-through',
    },
    listItemText: {
      fontSize: 18,
      fontWeight: 'bold',
  },
  }

  return (
    <TouchableOpacity style={styles.listItem} onLongPress={() => markAsDone(item.id)}>
      <View style={styles.listItemView}> 
        <Text style={{...styleText.listItemText, ...styleText.decoration}}>{item.text}</Text>
        <View style={styles.listItemIcons}>
          <Icon 
              name='edit' 
              size={25} color='black'
          />
          <Icon 
              name='remove' 
              size={25} color='firebrick' 
              onPress={() => deleteItem(item.id)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemIcons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 80,
    },
})

export default ListItem;