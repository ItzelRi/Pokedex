import { StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Recuperar Contraseña</Text>
        <Text style={styles.label}>Correo</Text>
        <TextInput style={styles.input} keyboardType="email-address" />
        <Pressable style={styles.send}>
          <Text style={styles.sendText}>Enviar</Text>
        </Pressable>
      </View>
      <View style={styles.containerFooter}>
        <Text style={styles.footerLink}>Volver al login</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    flex: 1,
  },
  containerImage: {
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  containerForm: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  input: {
    borderRadius: 10,
    fontSize: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 5,
    padding: 5,
  },
  send: {
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 10,
    marginTop: 15,
    padding: 10,
    alignItems: 'center',
  },
  sendText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  containerFooter: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  footerLink: {
    color: 'blue',
    margin: 5,
    fontSize: 15,
  },
});
