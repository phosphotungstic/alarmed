import React from 'react';
import { Button, View, Modal, Text, TouchableHighlight, DatePickerIOS, StyleSheet } from 'react-native';
import AddAlarmModalForm from './AddAlarmModalForm.js'

export default class TimePickerModal extends React.Component {
  state = {
    chosenDate: new Date(),
    modalVisible: false
  };
  
  setModalVisible(visible) {
    if(!visible) {
      this.props.setDate(this.state.chosenDate);
    }
    this.setState({modalVisible: visible});
  }

  setDate(date) {
    this.setState({chosenDate: date});
  }

  render() {
    var buttonString = "Set " + this.props.type + " Time";
    return (
      <View>
        <Modal
          animationType="slide"
          visible={this.state.modalVisible}
          presentationStyle="formSheet"
          >
          <View>
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