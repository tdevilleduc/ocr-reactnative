// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, ActivityIndicator, ScrollView, Text } from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi' 

class FilmDetail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            film: undefined,
            isLoading: true
        }
    }

    componentDidMount() {
        getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
            this.setState({
                film: data,
                isLoading: false
            })
        })
    }

    _displayFilm() {
        const film = this.state.film
        if (film != undefined) {
            return (
                <ScrollView style={styles.scrollview_container}>
                    <Text>{film.title}</Text>
                </ScrollView>
            )
        }
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
            <View style={styles.loading_container}>
                <ActivityIndicator size='large' />
            </View>
            )
        }
    }

    render() {
        const idFilm = this.props.navigation.state.params.idFilm
        return (
        <View style={styles.main_container}>
            {this._displayFilm()}
            {this._displayLoading()}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1
    }
})

export default FilmDetail