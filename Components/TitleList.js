// Components/TitleList.js

import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
import TitleItem from './TitleItem'

class TitleList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          films: []
        }
    }

    _displayDetailForFilm = (idFilm) => {
      this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
    }

    render() {
        return (
            <FlatList 
                data={this.props.films}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <TitleItem 
                        film={item}
                        displayDetailForFilm={this._displayDetailForFilm}
                    />
                )}
            />
        )
    }
}


  
const mapStateToProps = state => {
    return {
        seenMoviesFilm: state.toggleSeenMovies.seenMoviesFilm
    }
}
  
export default connect(mapStateToProps)(TitleList)