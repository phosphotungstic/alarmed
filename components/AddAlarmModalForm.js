import React from 'react';
import { View, Text, TextInput, DatePickerIOS } from 'react-native';

export default class AddAlarmModalForm extends React.Component {
  state = {
    text: 'lol',
  }
  
  render() {
    return (
      <View>
        <Text>Add New Alarm</Text>
        
        <Text>Alarm Name</Text>
        <TextInput
          style={{width: 80, height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}/>
      </View>
    );
  }
}