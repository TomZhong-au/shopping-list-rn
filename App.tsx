/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import AppHeader from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

export type ListItem = {id: string; text: string};

const LIST_DATA = [
  {id: '001', text: 'Milk'},
  {id: '002', text: 'Egg'},
  {id: '003', text: 'Juice'},
  {id: '004', text: 'Bread'},
];

function App() {
  const [items, setItems] = useState(LIST_DATA);

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const addItem = (newItem: ListItem) => {
    setItems(prev => [newItem, ...prev]);
  };

  return (
    <View style={styles.container}>
      <AppHeader title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
