import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';

export default class AlarmList extends React.Component {
  render() {
    return (
      <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={this.getExampleData()}
        keyExtractor={(item, index) => item + index}
      />
    );
  }

  getExampleData() {
    return [
      {title: 'Active', data: ['Get Some Water', 'Do 10 situps']},
      {title: 'Inactive', data: ['Eat cheesestick', 'Do 10 pushups']},
    ];
  }
}
