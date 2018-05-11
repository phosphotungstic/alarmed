import React from 'react';
import { View, Text, TextInput, DatePickerIOS } from 'react-native';
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

    this.setStartDate = this.setStartDate.bind(this)
  }

  setStartDate(date) {
    this.setState({startDate: date});
  }
  
  setEndDate(date) {
    this.setState({endDate: date});
  }

  render() {
    return (
      <View>
        <Text>Add New Alarm</Text>
        
        <Text>Alarm Name</Text>
        <TextInput
          style={{width: 80, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({alarmName: text})}
          value={this.state.alarmName}/>

        <TimePickerModal setStartDate={this.setStartDate} type="Start"></TimePickerModal>
        <TimePickerModal setEndDate={this.setEndDate} type="End"></TimePickerModal>

        <Text>Number of Triggers</Text>
        <TextInput
          style={{width: 80, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({numberTriggers: text})}
          value={this.state.numberTriggers}/>

        <Text>state.alarmName = {this.state.alarmName}</Text>
        <Text>state.numberTriggers = {this.state.numberTriggers}</Text>
        <Text>state.startDate = {this.state.startDate.getTime()}</Text>
        <Text>state.endDate = {this.state.endDate.getTime()}</Text>
      </View>
    );
  }
}