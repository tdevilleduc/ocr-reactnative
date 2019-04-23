// Components/TitleList.js

import React from 'react'
import { StyleSheet, FlatList, Text, View, Image } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi' 
import { connect } from 'react-redux'

class TitleList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          films: []
        }
    }

    
    render() {
        return (
            <FlatList 
                style={styles.list}
                data={this.props.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.item_container}>
                        <Image style={styles.image_film} 
                            source={{uri: getImageFromApi(item.poster_path) }} />
                        <View style={styles.text_container}>    
                            <Text styme={styles.text}>{item.title}</Text>
                        </View>
                    </View>
                )}
            />
        )
    }
}


const styles = StyleSheet.create({
    list: {
    },
    item_container: {
        padding: 5,
        flexDirection: 'row'
    },
    image_film: {
        width: 75,
        height: 75,
        borderRadius: 50,
        borderColor: '#9B9B9B',
        borderWidth: 1
    },
    text_container: {
        paddingLeft: 10,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        flexWrap: 'wrap',
        paddingRight: 5
    }
  })
  
  const mapStateToProps = state => {
    return {
        seenMoviesFilm: state.toggleSeenMovies.seenMoviesFilm
    }
  }
  
  export default connect(mapStateToProps)(TitleList)