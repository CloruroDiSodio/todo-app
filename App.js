import React from 'react';
import { StyleSheet, View, Switch , Alert, SafeAreaView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isChecked: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading/>;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right/>
        </Header>
        <Content>

            <Card>
              <CardItem>
                <Body style={[styles.bodyCard]}>
                  <Text>
                    To do
                  </Text>
                  <Button rounded dark bordered style={[(!this.state.isChecked)?  styles.emptyButton : '']}>
                    {this.state.isChecked && <Icon name='checkmark' />}
                  </Button>
                </Body>
              </CardItem>
            </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoBox : {
    borderColor: '#c9c9c9',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,

  },

  bodyCard : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'

  },
  emptyButton: {
    width: '30px',
   // height: '30px'
  }
});
