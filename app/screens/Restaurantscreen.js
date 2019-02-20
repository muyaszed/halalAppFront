import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';

const styles = StyleSheet.create({
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -30,
    height: 200,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    height: 300,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  divider: {
    backgroundColor: 'black',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 2,
  }
});

class RestaurantScreen extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    return {
      tabBarTestID: 'detailTab'
    }
  }

  render() {
    const { navigation } = this.props;
    const PressedItem = navigation.getParam('PressedItem');
    return (
      <View testID="restaurantScreen" style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.bgImage}
            source={{ uri: 'https://loremflickr.com/320/240/restaurant,cafe/all' }}
          />
        </View>
        <Card elevation={30} style={styles.card}>
          <Card.Content style={styles.content}>
            <Title testID="restaurantDesc">{PressedItem.name}</Title>
            <Paragraph>{PressedItem.desc}</Paragraph>
            <Divider style={styles.divider} inset={true}/>
            <Title testID="restaurantLocation">Location</Title>
            <Paragraph>{PressedItem.location}</Paragraph>
            <Divider style={styles.divider} inset={true}/>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

export default RestaurantScreen;