import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Alert,
} from 'react-native';

import {styles} from './AddTodo.styles';

function AddTodo({toDoList, setToDoList}) {
  const [addToDo, setAddTodo] = useState('');
  const onpress = () => {
    if (addToDo === '') {
      Keyboard.dismiss();
      return Alert.alert('Warning', 'Todo input is empty');
    } else {
      const exists = toDoList.some(item => item.title === addToDo);
      if (exists) {
        setAddTodo('');
        Keyboard.dismiss();
        return Alert.alert('Warning', 'Todo already exists');
      } else {
        const newTodo = {title: addToDo, isDone: false};
        setToDoList(prevList => [...prevList, newTodo]);
        setAddTodo('');
        Keyboard.dismiss();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Todo..."
          placeholderTextColor={'#808080'}
          selectionColor={'#FFA500'}
          onChangeText={setAddTodo}
          value={addToDo}
        />
      </View>
      <View style={styles.seperator} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onpress}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AddTodo;
