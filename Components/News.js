// Components/News.js

import React from 'react'
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
import FilmList from './FilmList'
import { getFilmByReleaseDateFromApi } from '../API/TMDBApi'


class News extends React.Component {

    constructor(props) {
        super(props)
        this.page = 0
        this.totalPages = 0
        this.state = {
          films: [],
          isLoading: false
        }
        this._loadFilms = this._loadFilms.bind(this)
    }

    componentDidMount() {
        this._loadFilms()
    }

    _loadFilms() {
        this.setState({ isLoading: true })
        getFilmByReleaseDateFromApi(this.page+1).then(data => {
            this.page = data.page
            this.totalPages = data.total_pages
            this.setState({
                films: [ ...this.state.films, ...data.results ],
                isLoading: false
            })
        })
    }
    
    _displayDetailForFilm = (idFilm) => {
        this.props.navigation.navigate("FilmDetail", { idFilm: idFilm })
    }

    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <SafeAreaView style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </SafeAreaView>
          )
        }
      }

    render() {
        return (
            <SafeAreaView style={styles.main_container}>
                <FilmList
                    films={this.state.films}
                    navigation={this.props.navigation}
                    loadFilms={this._loadFilms}
                    page={this.page}
                    totalPages={this.totalPages}
                    favoriteList={false}
                />
                {this._displayLoading()}
            </SafeAreaView>
        ) 
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1
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

export default News