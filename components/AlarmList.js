import React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';

export default class AlarmList extends React.Component {
  render() {
    var cardInfos = this.getCardInfo();
    var cards = [];
    for(var i = 0; i < cardInfos.length; i++) {
      cards.push(this.getCard(cardInfos[i]));
    }

    return (cards);
  }

  getCard(cardInfo) {
    return (
      <Card key={cardInfo['key']}>
        <CardItem>
          <Body>
            <Text>
              {cardInfo['title']}
            </Text>
            <Text>
              {cardInfo['numberTriggers']} triggers
            </Text>
            <Text>
              {cardInfo['startTime']}am - {cardInfo['endTime']}pm
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }

  getCardInfo() {
    return [
      {
        key: 1,
        title: 'Eat water',
        numberTriggers: 7,
        startTime: 9,
        endTime: 5
      },
      {
        key: 2,
        title: 'Do 10 jumping jacks',
        numberTriggers: 8,
        startTime: 9,
        endTime: 3
      },
      {
        key: 3,
        title: 'Do 10 sit ups',
        numberTriggers: 3,
        startTime: 10,
        endTime: 8
      }
    ];
  }
}
