import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getUsers } from './Database';

const RecordView = ({ route }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUsers((users) => {
      const foundUser = users.find((u) => u.id === parseInt(userId, 10));
      setUser(foundUser);
    });
  }, [userId]);

  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <Text>User ID: {user.id}</Text>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </View>
      ) : (
        <Text>No record found for ID: {userId}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecordView;
