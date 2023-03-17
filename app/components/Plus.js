import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native' //on importe les composants --> obligatoire
import Connexion from './Connexion'


class Plus extends React.Component{
    displayConnexion = () => {
        console.log("Ecran de connexion")
    }

    displayInscription = () => {
        console.log("Ecran d'inscription")
    }

    displayFAQ = () => {
        console.log("Ecran de FAQ")
    }

    displayPropos = () => {
        console.log("Ecran de la page à propos")
    }

    displayMentions = () => {
        console.log("Ecran des mentions légales")
    }

    displayCgdv = () => {
        console.log("Ecran de conditions générales des ventes")
    }

    displayCoachRegister = () => {
        console.log("Ecran d'inscription en tant que coach")
    }
    
    render(){ //render permet le erndu et est obligatoire dans un composent
        return( //retur est ce qui est retourné par le render et donc obligatoire aussi
            //on crée une vue en rendant des éléments graphiques
            <View style={styles.main_container}>
                <Button style={styles.btn_recherche} title="Connexion" onPress={() => this.displayConnexion()}/>
                <Button style={styles.btn_recherche} title="Inscription" onPress={() => this.displayInscription()}/>
                <Button style={styles.btn_recherche} title="FAQ" onPress={() => this.displayFAQ()}/>
                <Button style={styles.btn_recherche} title="A propos de l'application" onPress={() => this.displayPropos()}/>
                <Button style={styles.btn_recherche} title="Mentions légales" onPress={() => this.displayMentions()}/>
                <Button style={styles.btn_recherche} title="Conditions générales des ventes" onPress={() => this.displayCgdv()}/>
                <Button style={styles.btn_recherche} title="S'enregistrer comme coach" onPress={() => this.displayCoachRegister()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({ //penser au StyleSheet.create() pour optimiser la vitesse de rendu
    main_container: {
        marginTop: 50,
        flex: 1
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

export default Plus //On exporte le composant pour l'utiliser ailleur