import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Card for Charizard */}
      <View style={styles.card}>
        <View style={styles.infoPokemon}>
          <Text style={styles.namePokemon}>Charizard</Text>
          <Text style={styles.idPokemon}>#006</Text>
          <View style={styles.tags}>
            <View style={[styles.typePokemon, { backgroundColor: 'red' }]}>
              <Text style={styles.typeText}>Fuego</Text>
            </View>
            <View style={[styles.typePokemon, { backgroundColor: 'grey' }]}>
              <Text style={styles.typeText}>Volador</Text>
            </View>
          </View>
        </View>
        <View style={[styles.imagePokemon, { backgroundColor: 'red' }]}>
          <Image
            source={{
              uri: "https://img.pokemondb.net/sprites/scarlet-violet/icon/charizard.png",
            }}
            style={styles.image}
          />
        </View>
      </View>

      {/* Card for Pikachu */}
      <View style={styles.card}>
        <View style={styles.infoPokemon}>
          <Text style={styles.namePokemon}>Pikachu</Text>
          <Text style={styles.idPokemon}>#025</Text>
          <View style={styles.tags}>
            <View style={[styles.typePokemon, { backgroundColor: 'yellow' }]}>
              <Text style={styles.typeText}>Electrico</Text>
            </View>
          </View>
        </View>
        <View style={[styles.imagePokemon, { backgroundColor: 'yellow' }]}>
          <Image
            source={{
              uri: "https://img.pokemondb.net/sprites/scarlet-violet/icon/pikachu.png",
            }}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
  },
  infoPokemon: {
    borderRadius: 15,
    backgroundColor: 'rgb(232, 232, 232)',
    width: '30%',
    padding: 5,
  },
  namePokemon: {
    fontSize: 25,
    color: 'black',
    margin: 5,
  },
  idPokemon: {
    fontSize: 20,
    color: 'black',
    margin: 5,
  },
  tags: {
    margin: 5,
  },
  typePokemon: {
    margin: 2,
    padding: 2,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeText: {
    color: 'white',
    fontSize: 12,
  },
  imagePokemon: {
    width: '70%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});
