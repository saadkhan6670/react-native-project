import React, {Component} from 'react';
import {Text} from 'react-native'
import {CardSection} from './common'
class ListItem extends Component {
  render() {

    return(
      <CardSection >
          <Text>
          {this.props.library.item.title}
          </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyles:{
    FontSize: 18,
    paddingLeft: 15 
  }
}
export default ListItem;