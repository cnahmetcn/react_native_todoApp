import React, {useState} from 'react';
import {SafeAreaView, FlatList, View, StyleSheet} from 'react-native';

import Header from './Header';
import TodoCard from './TodoCard';
import AddTodo from './AddTodo';
import data from './data.json';
import SearchBar from './Search/Search';

const App = () => {
  const [toDoList, setToDoList] = useState(data);

  const handleSearch = q => {
    if (q.trim() === '') {
      setToDoList([...toDoList]);
    } else {
      const searchedList = toDoList.filter(td => {
        const currentTitle = td.title.toLowerCase();
        const searchedTextTitle = q.toLowerCase();

        return currentTitle.includes(searchedTextTitle);
      });

      setToDoList(searchedList);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <Header toDoList={toDoList} />
      <View style={styles.flatList}>
        <FlatList
          data={toDoList}
          renderItem={({item}) => (
            <TodoCard
              work={item}
              toDoList={toDoList}
              setToDoList={setToDoList}
            />
          )}
          keyExtractor={item => item.title}
        />
      </View>
      <AddTodo toDoList={toDoList} setToDoList={setToDoList} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  flatList: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});

export default App;
