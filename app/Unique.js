import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.background}>
      {/* Header */}
      <View style={styles.head}>
        <Text style={styles.name}>Charizard</Text>
        <Text style={styles.idPokemon}>#006</Text>
      </View>

      {/* Main */}
      <View style={styles.main}>
        <View style={styles.imgPokemon}>
          <Image
            source={{
              uri: "https://img.pokemondb.net/sprites/scarlet-violet/icon/charizard.png",
            }}
            style={styles.image}
          />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.tags}>
          <View style={[styles.tag, { backgroundColor: 'red' }]}>
            <Text style={styles.tagText}>Fuego</Text>
          </View>
          <View style={[styles.tag, { backgroundColor: 'grey' }]}>
            <Text style={styles.tagText}>Volador</Text>
          </View>
        </View>
        <View style={styles.stats}>
          <Text style={styles.titleStats}>Estadísticas</Text>
          <View style={styles.row}>
            <Text style={styles.stat}>HP:</Text>
            <Text>78</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.stat}>Ataque:</Text>
            <Text>84</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.stat}>Defensa:</Text>
            <Text>78</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  name: {
    paddingHorizontal: 60,
    color: 'red',
    backgroundColor: 'white',
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 10,
  },
  idPokemon: {
    color: 'white',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPokemon: {
    margin: 10,
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'white',
    borderWidth: 10,
    borderColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'black',
  },
  footer: {
    padding: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: -70,
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },
  tag: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  tagText: {
    color: 'white',
    fontSize: 13,
  },
  stats: {
    width: '80%',
  },
  titleStats: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(83, 30, 133)',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  stat: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
