import React from 'react';
import { Text, View } from 'react-native';
import axios from 'axios'

class AlbumList extends React.Component {
  state = {albums : []};
  componentWillMount(){
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({albums : response.data}));
  }

  renderAlbums(){
    return this.state.albums.map(album => <Text>{albums.title}</Text> )
  }
  render() {
    return (
      <View >
        {this.renderAlbums()}
      </View>
    );
  }
}

const styles = {
   
}

export default AlbumList
