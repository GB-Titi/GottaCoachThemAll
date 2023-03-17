import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Button} from 'react-native' //on importe les composants --> obligatoire

class Accueil extends React.Component{

    render(){ //render permet le erndu et est obligatoire dans un composent
        return( //retur est ce qui est retourné par le render et donc obligatoire aussi
            //on crée une vue en rendant des éléments graphiques
            <View style={styles.container}>
                <ImageBackground source={require('../assets/logo/esport.jpeg')} style={styles.BgImage_left}>
                <View style={styles.container_bis}>
                    <Text style={styles.Titre}>BIENVENUE SUR GOTTA COACH THEM ALL</Text>
                    <Text style={styles.text}>Ta nouvelle application de coaching !</Text>
                    <Text style={styles.text}>N'hésite pas à t'inscrire pour accéder à toutes les fonctionnalitées !</Text>
                 </View>
                </ImageBackground>
                <ImageBackground source={require('../assets/logo/info.jpg')} style={styles.BgImage_right}>
                    <View style={styles.container_bis}>
                        <Text style={styles.Titre_right}>PROGRESSE RAPIDEMENT</Text>
                        <Text style={styles.text_right}>Grâce à nos coachs expérimentés</Text>
                        <Text style={styles.text_underline_right}>En savoir +</Text>
                    </View>
                </ImageBackground>
                <ImageBackground source={require('../assets/logo/tuto.jpg')} style={styles.BgImage_left}>
                    <View style={styles.container_bis}>
                        <Text style={styles.Titre_left}>BESOIN DE TIPS ?</Text>
                        <Text style={styles.text_left}>Suis les tutos de nos coachs</Text>
                        <Text style={styles.text_underline_left}>En savoir +</Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({ //penser au StyleSheet.create() pour optimiser la vitesse de rendu
    Titre: {
        fontSize: 40,
        marginTop: 35,
        marginLeft: 15,
        color: 'white',
        fontWeight: 'bold',
        margin: 0,
        padding: 0,
        textShadowColor: 'black'
    },

    Titre_left: {
        fontSize: 45,
        marginLeft: 15,
        color: 'white',
        fontWeight: 'bold',
        margin: 0,
        padding: 0,
        textAlign: 'left',
        marginTop: 45,
    },

    Titre_right: {
        fontSize: 45,
        marginRight: 15,
        marginTop: 35,
        color: 'white',
        fontWeight: 'bold',
        margin: 0,
        padding: 0,
        textAlign: 'right'
    },

    text: {
        fontSize: 15,
        padding: 3,
        color: 'white',
        textAlign: 'center'
    },

    text_right: {
        fontSize: 25,
        color: 'white',
        marginRight: 15,
        marginTop: 15,
        textAlign: 'right'
    },

    
    text_left: {
        fontSize: 25,
        marginLeft: 15,
        marginTop: 15,
        color: 'white',
        textAlign: 'left',
        opacity: 1
    },

    BgImage_right: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        textAlign: 'right',
        borderBottomColor: '#0F6CC9',
        borderBottomWidth: 5,
    },

    BgImage_left: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        textAlign: 'left',
        borderBottomColor: '#4A08E8',
        borderBottomWidth: 5,
    },

    container: {
        flex: 1,
        flexDirection: "column"
      },

      container_bis: {
        backgroundColor: 'rgba(15, 154, 165,0.2)',
        height: '100%',
      },

    text_underline_left : {
        height: 50,
        textAlign: 'left',
        marginLeft: 15,
        marginTop: 15,
        textDecorationLine: 'underline',
        color: 'white',
        justifyContent: 'center',
    },

    text_underline_right : {
        height: 50,
        marginRight: 15,
        marginTop: 15,
        textAlign: 'right',
        textDecorationLine: 'underline',
        color: 'white',
    },

    border_1: {
        borderBottomColor: '#EFF0F1',
        borderBottomWidth: 2,
    }, 

    border_2: {

    }, 
    
    border_3: {

    }, 
    

})

export default Accueil //On exporte le composant pour l'utiliser ailleur