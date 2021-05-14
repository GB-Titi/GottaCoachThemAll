import { Text, Alert, Button, View, StyleSheet, TextInput, Image } from 'react-native';
import * as React from 'react';

class Connexion extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  go = () => {
           const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === true){
               alert('valid');
           }
           else{
               alert();
           }
 
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Informations utilisateur : ', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={require('../assets/logo/logo.png')}
        />
        <Text style={styles.titre}>Connectez vous afin d'utiliser toutes les fonctionnalitées</Text>
            <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            label='Email'
            style={styles.input}
            />
            <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            label='Password'
            secureTextEntry={true}
            style={styles.input}
            />
            
            <Button
            title={'Login'}
            style={styles.appButtonContainer}
            onPress={this.onLogin.bind(this)}
            />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  input: {
    width: '75%',
    height: 44,
    padding: 10,
    borderWidth: 0.2,
    borderColor: 'grey',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 25,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 25,
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
  titre: {
      fontSize: 25,
      textAlign: 'center',
      marginBottom: 20,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});


export default Connexion //On exporte le composant pour l'utiliser ailleur