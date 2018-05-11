import React from 'react';
import { Button, View, Modal, Text, TouchableHighlight } from 'react-native';
import AddAlarmModalForm from './AddAlarmModalForm.js'

export default class AddAlarmModal extends React.Component {
  state = {
    modalVisible: false,
  };
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}>
          <View style={{marginTop: 22}}>
            <Text>oof</Text>

            <AddAlarmModalForm></AddAlarmModalForm>

            <Button
              title="Save"
              onPress={() => {
                this.setModalVisible(false);
              }}
            />
          </View>
        </Modal>

          <Button
            title="Add alarm"
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
      </View>
    );
  }
}