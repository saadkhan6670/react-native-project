import React from 'react';
import { Text, View } from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.ViewStyle}>
        <Text style={styles.textStyle}>{this.props.headertext}</Text>
      </View>
    );
  }
}

const styles = {
    ViewStyle:{
        backgroundColor : '#f8f8f8',
        justifyContent:'center',
        alignItems:'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 4,
    },
    textStyle:{
        fontSize : 20
    }
}

export {Header};
