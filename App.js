import React from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input, Form, Label} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import SingleTodo from "./components/SingleTodo";
import arrayMove from "array-move";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      currentTodo:'',
      todos: ["Tagliare l'erba", "Andare in palestra", "Studiare", "Fare la spesa"]
    };

    this.moveToBottom = this.moveToBottom.bind(this)

  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({isReady: true});
  }

  moveToBottom(array, i){
    let newTodos = arrayMove(array, i, array.length)
    this.setState({todos: newTodos})
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading/>;
    }


    return (
      <Container>
        <Header style={[styles.header]}>
          <Left>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title>Todo App</Title>
          </Body>
          <Right/>
        </Header>
        <Content style={[styles.body]}>
          {this.state.todos.map((todo, i) =>
              <SingleTodo todo={todo} i={i} stylesBodyCard={styles.bodyCard} moveToBottom={this.moveToBottom} todos={this.state.todos}/>
          )}
        </Content>
        <Footer style={[styles.footer]}>
          <Form >
          <FooterTab regular>
            <Item>
              <Input
                placeholder="Write Your Todo"
                onChange={(e) => this.setState({currentTodo: e.target.value})}
                value={this.state.currentTodo}
                style={[styles.todo]}
              />
            </Item>
              <Button
                onPress={()=> {
                  if(this.state.currentTodo) {
                    let newTodos = [...this.state.todos, this.state.currentTodo]
                    this.setState({todos: newTodos})
                    this.setState({currentTodo: ''})
                  }
                }}
              >
                <Text><Icon name="add-circle" style={{color: '#fff'}}/></Text>
              </Button>
          </FooterTab>
          </Form>
        </Footer>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: ''
  },
  header: {
    backgroundColor: "black"

  } ,

  footer : {
    backgroundColor: '#5cb85c',
  },

  body: {
    padding: 10

  },

  mark: {
    marginRight:0,
    marginLeft:0
  },

  bodyCard : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'

  },
  emptyButton: {
    width: '30px',
   height: '30px',
    padding: 5
  },
  checkedText: {
    textDecorationLine: 'line-through'

  },
  todo:{
    color: '#fff',
    borderWidth: '0px 0px 0px'

}
});
