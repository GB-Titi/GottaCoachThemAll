import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native' //on importe les composants --> obligatoire


class GamesItem extends React.Component{
    render(){ //render permet le erndu et est obligatoire dans un composent
        const jeu = this.props.game
        return( //retur est ce qui est retourné par le render et donc obligatoire aussi
            <View style={styles.main_container}>
            <Image
              style={styles.image}
              source={{uri: "../assets/favicon.png"}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{jeu.title}</Text>
                <Text style={styles.vote_text}>{jeu.vote}</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{jeu.description}</Text>
                {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
              </View>
              <View style={styles.date_container}>
                <Text style={styles.date_text}>Sorti le {jeu.release_date}</Text>
              </View>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({ //penser au StyleSheet.create() pour optimiser la vitesse de rendu
    main_container: {
        height: 190,
        flexDirection: 'row'
      },
      image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
      },
      content_container: {
        flex: 1,
        margin: 5
      },
      header_container: {
        flex: 3,
        flexDirection: 'row'
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
      },
      vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
      },
      description_container: {
        flex: 7
      },
      description_text: {
        fontStyle: 'italic',
        color: '#666666'
      },
      date_container: {
        flex: 1
      },
      date_text: {
        textAlign: 'right',
        fontSize: 14
      }
})

export default GamesItem //On exporte le composant pour l'utiliser ailleur