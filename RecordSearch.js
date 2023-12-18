import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import {insertUser, getUsers } from './Database';

const RecordSearch = ({ navigation }) => {
  const [userId, setUserId] = useState('');

  const searchRecord = () => {
    navigation.navigate('RecordView', { userId });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter User ID"
        keyboardType="numeric"
        value={userId}
        onChangeText={(text) => setUserId(text)}
      />
      <Button title="Search" onPress={searchRecord} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

export default RecordSearch;
