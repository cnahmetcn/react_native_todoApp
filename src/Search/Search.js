import {View, TextInput, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Search.styles';

const SearchBar = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor={'#808080'}
          selectionColor={'#FFA500'}
          onChangeText={props.onSearch}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;
