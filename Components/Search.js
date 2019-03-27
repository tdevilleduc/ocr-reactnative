import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <TextInput style={ styles.textinput } placeHolder="Titre du film" />
                <Button style={{ height: 50 }} title="Rechercher" onPress={() => {}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
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