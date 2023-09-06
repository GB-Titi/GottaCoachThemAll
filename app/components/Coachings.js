import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  FlatList,
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native"; //on importe les composants --> obligatoire
import gameToId from "../helpers/gameToId";

import game from "../helpers/gamesData";
import GamesItem from "./GamesItem";
const CoachingsScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    // Effectuez une demande à l'API pour récupérer les tutoriels
    fetch("http://localhost:8090/api/coachs")
      .then((response) => response.json())
      .then((data) => {
        setCoaches(data); // Mettez à jour l'état avec les données des tutoriels
        setLoading(false); // Marquez le chargement comme terminé
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des tutoriels :", error);
        setLoading(false); // Marquez le chargement comme terminé en cas d'erreur
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loadingIndicator} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Titre}>Coach</Text>

      <FlatList
        data={coaches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // Naviguez vers la page de détail du tutoriel avec l'identifiant du tutoriel en tant que paramètre
              navigation.navigate("CoachDetailPage", { coachId: item.id });
            }}
          >
            <View style={styles.tutorialItem}>
              <View style={styles.coachItem}>
                {/* Image du coach (10% de la largeur) */}
                <Image
                  source={require("../assets/avatar.png")}
                  style={styles.coachImage}
                />
                {/* Informations du coach (90% de la largeur) */}
                <View style={styles.coachInfo}>
                  <Text style={styles.coachName}>{item.user.firstname} {item.user.lastname}</Text>
                  <Text>{gameToId[item.jeuxId - 1]}</Text>
                  <Text > {item.description}</Text>
                  {/* Affichez d'autres informations du coach ici */}
                </View>
              </View>
              <View
                style={{
                  borderBottomColor: "#E8E8E8",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginTop: 10,
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //penser au StyleSheet.create() pour optimiser la vitesse de rendu
  main_container: {
    marginTop: 50,
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#000000",
    borderWidth: 1,
    paddingLeft: 5,
  },

  Titre: {
    fontSize: 25,
    textAlign: "center",
    margin: 15,
  },

  btn_recherche: {
    elevation: 8,
    backgroundColor: "#0EB9C7",
    borderRadius: 50,
    marginTop: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tutorialItem: {
    marginBottom: 10,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tutorialItem: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    padding: 5,
    borderRadius: 5,
  },
  tutorialTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tutorialDescription: {
    fontSize: 14,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameTitle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
  },
  coachItem: {
    flexDirection: 'row', // Disposition horizontale
    alignItems: 'center',
    marginBottom: 10,
  },
  coachImage: {
    aspectRatio: 1, // Pour conserver le ratio de l'image (carrée)
    marginRight: 10,
    borderRadius: 50, // Pour obtenir une forme circulaire
    height: 50,
    width: 50,
  },
  coachInfo: {
    flex: 1, // 90% de la largeur de l'écran
  },
  coachName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CoachingsScreen; //On exporte le composant pour l'utiliser ailleur
