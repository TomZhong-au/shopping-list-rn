import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface ListItemProps {
  item: {
    id: string;
    text: string;
  };
  deleteItem: (id: string) => void;
}

const ListItem = ({item: {id, text}, deleteItem}: ListItemProps) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{text}</Text>
        <FontAwesome5
          name={'times'}
          size={20}
          color={'firebrick'}
          onPress={() => deleteItem(id)}
        />
      </View>
    </TouchableOpacity>
  );
};

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
    color: '#1e1e1e',
  },
});
export default ListItem;
