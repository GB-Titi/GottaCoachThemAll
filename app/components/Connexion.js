import {
  Text,
  Alert,
  Button,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';



const Connexion = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [mdp, setMdp] = useState("");
  const [connexionEchouee, setConnexionEchouee] = useState(false);

  const handleConnexion = async () => {
    try {
      // Envoyez la demande à votre API avec les identifiants
      const response = await fetch("http://127.0.0.1:8090/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail, mdp }),
      });

      if (response.ok) {
        // Si les identifiants sont corrects, naviguez vers la page "Profile"
        const data = await response.json();

        await AsyncStorage.setItem("authToken", data.accessToken);
        await AsyncStorage.setItem("firstname", data.firstname)
        await AsyncStorage.setItem("lastname", data.lastname);
        await AsyncStorage.setItem("mail", data.mail);
        await AsyncStorage.setItem("pseudo", data.pseudo);
        await AsyncStorage.setItem("data", JSON.stringify(data));
        console.log("Token enregistré :", await AsyncStorage.getItem("authToken"));
        
        navigation.navigate("Profile", { mail });
      } else {
        // Si les identifiants sont incorrects, affichez un message d'erreur
        setConnexionEchouee(true);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      // Gérez les erreurs ici
    }
  };

  return(
  <View style={styles.container}>
    <Image
      style={styles.tinyLogo}
      source={require("../assets/logo/logo.png")}
    />
    <Text style={styles.titre}>
      Connectez vous afin d'utiliser toutes les fonctionnalitées
    </Text>
    <Text style={styles.label}>Nom d'utilisateur :</Text>
    <TextInput
      style={styles.input}
      onChangeText={setMail}
      value={mail}
      placeholder="Entrez votre nom d'utilisateur"
    />

    <Text style={styles.label}>Mot de passe :</Text>
    <TextInput
      style={styles.input}
      onChangeText={setMdp}
      value={mdp}
      placeholder="Entrez votre mot de passe"
      secureTextEntry
    />
    {connexionEchouee && (
      <Text style={styles.erreurText}>
        La connexion a échoué. Veuillez réessayer.
      </Text>
    )}
    <Pressable
      title={"Login"}
      style={styles.appButtonContainer}
      onPress={handleConnexion}
    >
      <Text style={styles.appButtonText}>Connexion</Text>
    </Pressable>
  </View>
);
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  input: {
    width: "75%",
    height: 44,
    padding: 10,
    borderWidth: 0.2,
    borderColor: "grey",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 25,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 25,
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
  titre: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
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

export default Connexion; //On exporte le composant pour l'utiliser ailleur
