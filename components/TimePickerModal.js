import React from 'react';
import { Button, View, Modal, Text, TouchableHighlight, DatePickerIOS } from 'react-native';
import AddAlarmModalForm from './AddAlarmModalForm.js'

export default class TimePickerModal extends React.Component {
  state = {
    chosenDate: new Date(),
    modalVisible: false
  };
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setDate(date) {
    this.setState({chosenDate: date});
    this.props.setStartDate(date);
  }

  render() {
    var buttonString = "Set " + this.props.type + " Time";
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          presentationStyle="FormSheet"
          <View style={[{marginTop: 475, backgroundColor: 'red'}, this.state.showModal ? {backgroundColor: 'rgba(0,23,0,0.5)'} : '']}>
            <DatePickerIOS
              date={this.state.chosenDate}
              onDateChange={(date) => {
                this.setDate(date);
              }}
              mode="time"
            />
            <Button
              title="Save"
              onPress={() => {
                this.setModalVisible(false);
              }}
            />
          </View>
        </Modal>

          <Button
            title={buttonString}
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
      </View>
    );
  }
}