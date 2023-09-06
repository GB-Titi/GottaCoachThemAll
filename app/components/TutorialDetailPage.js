import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import gameToId from "../helpers/gameToId";

const TutorialDetailPage = ({ route, navigation }) => {
  const { tutorialId } = route.params;
  const [tutorial, setTutorial] = useState(null);
  const [formattedDate, setFormattedDate] = useState(""); // Ajoutez un état pour stocker la date formatée
  useEffect(() => {
    navigation.setOptions({
      tabBarVisible: false,
    });
  }, []);

  useEffect(() => {
    // Effectuez une demande à l'API pour récupérer les détails du tutoriel en fonction de l'identifiant
    fetch(`http://localhost:8090/api/tutorials/${tutorialId}`)
      .then((response) => response.json())
      .then((data) => {
        setTutorial(data); // Mettez à jour l'état avec les détails du tutoriel
        const date = new Date(data.createdAt);
        console.log(date);

        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Les mois sont indexés de 0 à 11
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        // Formatez la date en une chaîne lisible

        setFormattedDate(
          `${day}/${month}/${year} à ${hours}:${minutes}:${seconds}`
        );
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails du tutoriel :",
          error
        );
      });
  }, [tutorialId]);

  if (!tutorial) {
    return <Text>Chargement en cours...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {gameToId[tutorial.jeuxId - 1]} </Text>

      <Image
        style={{
          width: "100%",
          height: 200,
          marginBottom: 10,
          borderRadius: 10,
        }}
        source={require("../assets/jeu/13.png")}
      />
      <Text style={styles.title}>{tutorial.title}</Text>
      <Text style={styles.subtitle}>Auteur : {tutorial.author}</Text>
      <Text style={styles.subtitle}>Date de publication : {formattedDate}</Text>

      <Text style={styles.tutorialDescription}>{tutorial.description}</Text>
      <Text style={styles.tutorialKeyPoints}>Points clés :</Text>
      <Text>{tutorial.keyPoints}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tutorialDescription: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 25,
  },
  tutorialKeyPoints: {
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
});

export default TutorialDetailPage;
