import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'MyDatabase.db',
  location: 'default',
});
export const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)',
      [],
      () => console.log('Table created successfully'),
      (_, error) => console.error('Error creating table: ', error)
    );
  });
};

export const insertUser = (name, email) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email],
      (_, results) => console.log('User added successfully'),
      (_, error) => console.error('Error adding user: ', error)
    );
  });
};

export const getUsers = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM users',
      [],
      (_, { rows }) => callback(rows._array),
      (_, error) => console.error('Error getting users: ', error)
    );
  });
};

export default {
  insertUser,
  getUsers,
};
