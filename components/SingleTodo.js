import React from 'react';
import { StyleSheet, View, Switch , Alert, SafeAreaView } from 'react-native';
import { Button, Body, Icon, Text, Card, CardItem} from 'native-base';

export default class SingleTodo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };

  }

  handleClick() {
    if(this.state.isChecked){
      this.setState({isChecked: false})
    }else{
      //this.props.moveToBottom(this.props.todos, this.props.i)
      this.setState({isChecked: true})
    }
  }


  render() {
    return (
      <Card key={this.props.i}>
        <CardItem>
          <Body style={[styles.bodyCard]}>
            <Text style={[(this.state.isChecked) ? styles.checkedText : '']}>
              {this.props.todo}
            </Text>
            <Button
              rounded success bordered
              style={[styles.emptyButton]}
              onPress={() => this.handleClick()}
            >
              {this.state.isChecked && <Icon name='checkmark' style={[styles.mark]}/>}
            </Button>
          </Body>
        </CardItem>
      </Card>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: "black"

  } ,
  todoBox : {
    borderColor: '#f0ad4e',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,

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
});
