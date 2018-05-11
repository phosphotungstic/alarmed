import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import AlarmList from './components/AlarmList.js';
import AddAlarmModal from './components/AddAlarmModal.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <StatusBar hidden />
       <AddAlarmModal></AddAlarmModal>
       <AlarmList></AlarmList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
