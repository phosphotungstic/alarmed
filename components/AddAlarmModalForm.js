import React from 'react';
import { View, Text, TextInput, DatePickerIOS, Button, StyleSheet } from 'react-native';
import { Form, Item, Input, Label } from 'native-base';
import TimePickerModal from './TimePickerModal.js';

export default class AddAlarmModalForm extends React.Component {
  state = {
    alarmName: '',
    numberTriggers: '',
    startDate: new Date(),
    endDate: new Date()
  }

  constructor(props) {
    super(props)
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setStartDate(date) {
    this.setState({startDate: date});
  }
  
  setEndDate(date) {
    this.setState({endDate: date});
  }

  setModalVisible() {
    //this.validateForm();
    this.props.setModalVisible(false);
  }

  // validateForm() {
  //   if(this.state.alarmName.length == 0 || this.state.alarmName == undefined) {

  //   }
  // }

  render() {
    return (
      <View>
        <Text style={styles.titleText}>Add New Alarm</Text>

        <Form style={styles.formInputText}>
          <Item stackedLabel>
            <Label>Alarm Name</Label>
            <Input
              onChangeText={(text) => this.setState({alarmName: text})}
              returnKeyType="done"/>
          </Item>
        </Form>

        <Form style={styles.formInputText}>
          <Item stackedLabel>
            <Label>Number of Triggers</Label>
            <Input
              onChangeText={(text) => this.setState({numberTriggers: text})}
              keyboardType="number-pad"
              returnKeyType="done"/>
          </Item>
        </Form>

        <TimePickerModal setDate={this.setStartDate} type="Start"></TimePickerModal>
        <TimePickerModal setDate={this.setEndDate} type="End"></TimePickerModal>

        <Button
          title="Save"
          onPress={this.setModalVisible}
        />

        <Text>state.alarmName = {this.state.alarmName}</Text>
        <Text>state.numberTriggers = {this.state.numberTriggers}</Text>
        <Text>state.startDate = {this.getTime(this.state.startDate)}</Text>
        <Text>state.endDate = {this.getTime(this.state.endDate)}</Text>
      </View>
    );
  }

  getTime(time) {
    var hour = time.getHours();
    var ampm = '';
    if(hour > 12) {
      hour -= 12;
      ampm = 'pm';
    }
    else {
      ampm = 'am';
    }
    return hour + ':' + time.getMinutes() + ampm;
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    left: 20,
    marginBottom: 10,
  },
  formInputText: {
    marginBottom: 10
  }
});