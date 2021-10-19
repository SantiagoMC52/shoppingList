import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem, markAsDone, items}) => {

  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  const onChange = (textValue) =>  setEditingText(textValue);

  const editText = (id) => {
     items?.map((item) => {
      if(item.id === id){
        item.text = editingText
      }
      return items;
    })
    setEditing(null);
    setEditingText('');
  }

  const styleText = {
    listItemText: {
      fontSize: 20,
      fontWeight: 'bold',
      textDecorationLine: !item.done ? 'none' : 'line-through',
      alignItems: 'center'
    },
  }

  return (
    <TouchableOpacity style={styles.listItem} onLongPress={() => markAsDone(item.id)}>
      <View> 
          {
            editing === item.id 
            ? <View>
                <TextInput 
                    style={styles.editInput} 
                    onChangeText={onChange} 
                    placeholder={item.text}
                    placeholderTextColor={'black'}
                  />
                </View> 
            : <Text style={styleText.listItemText}>{item.text}</Text>
          }
      </View>
        <View style={styles.listItemIcons}>
          {editing === item.id 
            ? <Icon 
            name='check' 
            size={25} color='green'
            onPress={() => editText(item.id)}
            />
            : <Icon 
            name='edit' 
            size={25} color='black'
            onPress={() => setEditing(item.id)}
            />
          }    
          <Icon 
              name='remove'
              size={25} color='firebrick' 
              onPress={() => deleteItem(item.id)}
          />
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    editInput: {
      height: 50,
      padding: 8,
      width: 280,
      fontSize: 20,
    },
})

export default ListItem;