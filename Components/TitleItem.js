import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi' 

class TitleItem extends React.Component {

    _getItemText() {
        return this.props.film.title
    }

    render() {
        const {film, displayDetailForFilm} = this.props

        return (
            <TouchableOpacity 
                onPress={() => displayDetailForFilm(film.id)}
                style={styles.item_container}>
                    <Image style={styles.image_film} 
                        source={{uri: getImageFromApi(film.poster_path) }} />
                    <View style={styles.text_container}>    
                        <Text styme={styles.text}>{this._getItemText(film.id)}</Text>
                    </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
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
  
export default TitleItem