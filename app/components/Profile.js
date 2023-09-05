import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ route, navigation }) => {
  useEffect(() => {
    // Pour cacher l'onglet, utilisez setOptions avec tabBarVisible:false
    // navigation.setOptions({
    //   tabBarVisible: false,
    // });
  }, []);

  const [authToken, setAuthToken] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [mail, setMail] = useState("");
  const [mdp, setMdp] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    // Récupérez les données stockées localement lors du chargement de la page de profil
    const fetchDataLocally = async () => {
      try {
        //const storedUsername = await AsyncStorage.getItem('username');
        const storedAuthToken = await AsyncStorage.getItem("authToken");
        const storedPseudo = await AsyncStorage.getItem("pseudo");
        const storedMail = await AsyncStorage.getItem("mail");
        const storedMdp = await AsyncStorage.getItem("mdp");
        const storedFirstname = await AsyncStorage.getItem("firstname");
        const storedLastname = await AsyncStorage.getItem("lastname");
        const storedData = await AsyncStorage.getItem("data");

        if (storedAuthToken) {
          //setUsername(storedUsername);
          setAuthToken(storedAuthToken);
          setPseudo(storedPseudo);
          setMail(storedMail);
          setMdp(storedMdp);
          setFirstname(storedFirstname);
          setLastname(storedLastname);
          setData(storedData);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchDataLocally();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Profil de l'utilisateur :</Text>
      <View style={styles.userInfo}>
        <Text style={styles.userInfoLabel}>Nom :</Text>
        <Text style={styles.userInfoText}>{lastname} </Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userInfoLabel}>Prénom :</Text>
        <Text style={styles.userInfoText}>{firstname}
        </Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userInfoLabel}>Adresse e-mail :</Text>
        <Text style={styles.userInfoText}>{mail}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.userInfoLabel}>Username :</Text>
        <Text style={styles.userInfoText}>{pseudo}</Text>
      </View>

      <Button
        title="Se déconnecter"
        onPress={() => {
          // Ajoutez ici la logique de déconnexion (si nécessaire)
          navigation.navigate("Connexion"); // Redirigez vers la page de connexion
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  userInfoLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userInfoText: {
    fontSize: 16,
  },
  additionalInfo: {
    marginTop: 20,
  },
});

export default Profile;
