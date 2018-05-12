import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { Container, Body, Header, Left, Right, Title, Content } from 'native-base';
import AlarmList from './components/AlarmList.js';
import AddAlarmModal from './components/AddAlarmModal.js';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
          </Left>
          <Body>
            <Title>alarmed</Title>
          </Body>
          <Right>
            <AddAlarmModal></AddAlarmModal>
          </Right>
        </Header>
        <Content>
          <StatusBar hidden />
          <AlarmList></AlarmList>
        </Content>
      </Container>
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
