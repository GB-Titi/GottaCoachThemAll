import { Text, Button, View, StyleSheet, TextInput, Image, Pressable } from "react-native";
import React, { useState } from "react";
const Inscription = () => {
  const [lastname, setLastname] = useState("");
  const [fistname, setFirstname] = useState("");
  const [mail, setMail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [mdp, setMdp] = useState("");

  const handleInscription = () => {
    // Créez un objet avec les données du formulaire
    const userData = {
      lastname,
      firstname,
      mail,
      pseudo,
      mdp,
    };

    // Affichez les données dans la console
    console.log("Données du formulaire :", userData);

    // Envoiez les données au serveur à l'aide de fetch
    fetch("http://127.0.0.1:8090/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Réponse du serveur :", data);
        // Vous pouvez gérer la réponse du serveur ici
        navigation.navigate("Profile")
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi des données :", error);
        // Gérez les erreurs ici
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo/logo.png")}
        style={styles.tinyLogo}
      />
      <Text style={styles.titre}>
        Rejoignez l’équipe GottaCoachThemAll dès maintenant !
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={setLastname}
        value={lastname}
        placeholder="Entrez votre nom"
      />

      <TextInput
        style={styles.input}
        onChangeText={setFirstname}
        value={fistname}
        placeholder="Entrez votre prénom"
      />

      <TextInput
        style={styles.input}
        onChangeText={setMail}
        value={mail}
        placeholder="Entrez votre adresse e-mail"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPseudo}
        value={pseudo}
        placeholder="Entrez votre username"
      />

      <TextInput
        style={styles.input}
        onChangeText={setMdp}
        value={mdp}
        placeholder="Entrez votre mot de passe"
        secureTextEntry
      />

      <Pressable
        onPress={handleInscription}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>S'inscrire</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "95%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: "feffef",
  },
  titre: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    color: "grey",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#0EB9C7",
    borderRadius: 50,

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
});

export default Inscription; //On exporte le composant pour l'utiliser ailleur
