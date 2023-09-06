import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ route, navigation }) => {
  useEffect(() => {
    //Pour cacher l'onglet, utilisez setOptions avec tabBarVisible:false
    navigation.setOptions({
      tabBarVisible: false,
    });
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
      <View style={styles.blueTop}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../assets/avatar.png")}
            style={styles.profileImage}
          />
        </View>
      </View>
      <View style={styles.additionalInfo}>
        <View style={styles.identity}>
          <Text style={styles.identity}>
            {firstname} {lastname}
          </Text>
        </View>
        <View style={styles.username}>
          <Text style={styles.username}>{pseudo}</Text>
        </View>
        
        <View style={styles.identity}>

        <Pressable
          title="Se déconnecter"
          style={styles.logoutButton}
          onPress={() => {
            // Ajoutez ici la logique de déconnexion (si nécessaire)
            AsyncStorage.clear();

            navigation.navigate("Connexion"); // Redirigez vers la page de connexion
          }}
        >
      
          <Text style={styles.appButtonText}>Se deconnecter</Text>
        </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  blueTop: {
    flex: 0.5, // 30% de l'écran
    backgroundColor: "#0EB9C7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 95,
  },
  profileImageContainer: {
    width: 150, // Largeur de l'image
    height: 150, // Hauteur de l'image
    borderRadius: 75, // Pour arrondir l'image (la moitié de la largeur/hauteur)
    borderColor: "white", // Couleur de la bordure blanche
    borderWidth: 5, // Épaisseur de la bordure
    overflow: "hidden", // Pour permettre le débordement de l'image
    top: 100,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  additionalInfo: {
    flex: 1, // 70% de l'écran
    alignItems: "center",
    marginTop: 20,

    padding: 60,
    width: "80%",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  identity: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    alignItems: "center",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignItems: "center",
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
  logoutButton: {
    elevation: 8,
    backgroundColor: "#0EB9C7",
    borderRadius: 50,

    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    width: 200,
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default Profile;
