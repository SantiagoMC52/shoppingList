import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
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
    listItemText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    listItemIcons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 80,
    },
})

export default ListItem;