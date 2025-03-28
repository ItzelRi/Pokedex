import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Editar Perfil</Text>
        <Text style={styles.label}>Nombre</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput style={styles.input} keyboardType="email-address" />
        <Text style={styles.label}>Nueva Contraseña</Text>
        <TextInput style={styles.input} secureTextEntry={true} />
        <Pressable style={styles.send}>
          <Text style={styles.sendText}>Guardar Cambios</Text>
        </Pressable>
        <Pressable style={styles.btnCancel}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </Pressable>
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
  containerForm: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
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
  btnCancel: {
    backgroundColor: 'gray',
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  cancelText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
