import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style={ styles.main_container }>
                <TextInput style={ styles.textinput } placeHolder="Titre du film" />
                <Button title="Rechercher" onPress={() => {}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20, 
        flex: 1,
        backgroundColor: 'grey'
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
})

export default Search;