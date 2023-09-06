import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import gameToId from "../helpers/gameToId";

const CoachDetailPage = ({ route, navigation }) => {
  const { coachId } = route.params;
  const [coach, setCoach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tutorialList, setTutorialList] = useState(null);
  const [formattedDate, setFormattedDate] = useState(""); // Ajoutez un état pour stocker la date formatée
  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });
  }, []);

  useEffect(() => {
    // Effectuez une demande à l'API pour récupérer les détails du tutoriel en fonction de l'identifiant

    fetch(`http://localhost:8090/api/tutorials/coach/${coachId}`)
      .then((response) => response.json())
      .then((data) => {
        setTutorialList(data); // Mettez à jour l'état avec les détails du tutoriel
        console.log(tutorialList);
        console.log(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails des tutoriels :",
          error
        );
      });

    fetch(`http://localhost:8090/api/coachs/${coachId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoach(data); // Mettez à jour l'état avec les détails du tutoriel
        console.log(coach);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails du coach :",
          error
        );
      });
  }, [coachId]);

  if (!coach) {
    return <Text>Chargement en cours...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.blueTop}>
          <Text style={styles.coachName}>
            {coach.user.firstname} {coach.user.lastname}
          </Text>
          <Text style={styles.pseudo}>{coach.user.pseudo}</Text>
        </View>
        <View style={styles.additionalInfo}>
          <Text style={styles.title}>A propos de moi :</Text>
          <Text style={styles.gameName}>
            Jeu : {gameToId[coach.jeuxId - 1]}
          </Text>
          <Text style={styles.coachDescription}>{coach.description}</Text>
          <Text style={styles.title}>Mes Tutoriels:</Text>

          <FlatList
            data={tutorialList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  // Naviguez vers la page de détail du tutoriel avec l'identifiant du tutoriel en tant que paramètre
                  navigation.navigate("TutorialDetailPage", {
                    tutorialId: item.id,
                  });
                }}
              >
                <View style={styles.tutorialItem}>
                  <Text style={styles.gameTitle} >{item.title}</Text>
                </View>
                <View
                style={{
                  borderBottomColor: "#E8E8E8",
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  marginTop: 10,
                }}
              />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  blueTop: {
    flex: 0.4, // 30% de l'écran
    backgroundColor: "#0EB9C7",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileImageContainer: {
    width: 150, // Largeur de l'image
    height: 150, // Hauteur de l'image
    borderRadius: 75, // Pour arrondir l'image (la moitié de la largeur/hauteur)
    borderColor: "white", // Couleur de la bordure blanche
    borderWidth: 5, // Épaisseur de la bordure
    overflow: "hidden", // Pour permettre le débordement de l'image
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  additionalInfo: {
    alignItems: "center",
    marginTop: 20,
    paddingEnd: 20,
    paddingStart: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  coachDescription: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 25,
    paddingBottom: 20,
  },
  coachKeyPoints: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "bold",
    color: "grey",
  },
  coachName: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  pseudo: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  gameName: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  coachDescription: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  gameTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    marginBottom: 10,
  },

});

export default CoachDetailPage;
