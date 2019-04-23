
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import TitleList from './TitleList'



class SeenMovies extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            films: [],
            isLoading: true
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
            <TitleList
                films={this.props.seenMoviesFilm}
                navigation={this.props.navigation}
            />
            </View>
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
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const mapStateToProps = (state) => {
    return {
      seenMoviesFilm: state.toggleSeenMovies.seenMoviesFilm
    }
  }
  export default connect(mapStateToProps)(SeenMovies)