import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ListItem} from '../App';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

interface AddItemProps {
  addItem: (item: ListItem) => void;
}

function AddItem({addItem}: AddItemProps) {
  const [input, setInput] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Add Item"
        style={styles.input}
        onChangeText={setInput}
        value={input}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (!input) {
            return Alert.alert('Error', 'Item cannot be empty');
          }
          addItem({id: uuid(), text: input});
          setInput('');
        }}>
        <Text style={styles.btnText}>
          <FontAwesome5 name="plus" size={20} />
          {'  Add Item'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
