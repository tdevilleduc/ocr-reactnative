import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi' 

class TitleItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          isTitle: true
        }
    }

    _getItemText() {
        let itemText = this.props.film.title
        if ( ! this.state.isTitle ) {
            itemText = this.props.film.release_date
        }
        return itemText
    }

    _longPressAction() {
        this.setState({ isTitle: !this.state.isTitle })
    }

    render() {
        const {film, displayDetailForFilm} = this.props

        return (
            <TouchableOpacity 
                onPress={() => displayDetailForFilm(film.id)}
                onLongPress={() => this._longPressAction()}
                style={styles.item_container}>
                    <Image style={styles.image_film} 
                        source={{uri: getImageFromApi(film.poster_path) }} />
                    <View style={styles.text_container}>    
                        <Text style={styles.text}>{this._getItemText()}</Text>
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
        fontSize: 18,
        flexWrap: 'wrap',
        paddingRight: 5
    }
})
  
export default TitleItem