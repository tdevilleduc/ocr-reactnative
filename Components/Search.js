import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' 

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.state = { 
            films: [],
            isLoading: false
        }
    }

    _loadFilms() {
        this.setState({ isLoading: true })
        if (this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText).then(data => 
                this.setState({ 
                    films: data.results,
                    isLoading: false 
                })
            )
        }
    }

    _displayLoad() {
        if (this.state.isLoading) {
            return (
            <View style={styles.loading_container}>
                <ActivityIndicator size='large' />
            </View>
            )
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

  render() {
    return (
        <View style={styles.main_container}>
            <TextInput onSubmitEditing={() => this._loadFilms()} 
                    onChangeText={(text) => this._searchTextInputChanged(text)} 
                    style={styles.textinput} placeholder='Titre du film'/>
            <Button title='Rechercher' onPress={() => this._loadFilms()}/>
            <FlatList
                data={this.state.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <FilmItem film={item}/>}
            />
            {this._displayLoad()}
        </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Search