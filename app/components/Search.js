import React from 'react'
import { StyleSheet, View, Button, TextInput, Text, FlatList } from 'react-native' //on importe les composants --> obligatoire
import game from '../helpers/gamesData'
import GamesItem from './GamesItem'

class Search extends React.Component{
    render(){ //render permet le erndu et est obligatoire dans un composent
        return( //retur est ce qui est retourné par le render et donc obligatoire aussi
            //on crée une vue en rendant des éléments graphiques
            <View style={styles.main_container}>
                <Text style={styles.Titre}>GottaCatchThemAll</Text>
                <TextInput onSubmitEditing={() => this.GamesItem} placeholder="Nom du jeu" style={styles.textinput}/>
                <Button style={styles.btn_recherche} title="Rechercher" onPress={() => {}}/>
                <FlatList
                    data={game}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <GamesItem game={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({ //penser au StyleSheet.create() pour optimiser la vitesse de rendu
    main_container: {
        marginTop: 50,
        flex: 1
    },
    
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5 
    },

    Titre: {
        fontSize: 25,
        textAlign: 'center',
        margin: 15
    },

    btn_recherche : {
        height: 50,
    },
})

export default Search //On exporte le composant pour l'utiliser ailleur