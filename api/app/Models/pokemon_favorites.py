from app import mongo
from app.Models.super_class import SuperClass
from bson import ObjectId

class PokemonFavorites(SuperClass):
    def __init__(self):
        super().__init__("pokemon_favorites")
    
    def find_by_id(self):
        raise NotImplementedError("Los pokemones favoritos no se pueden buscar individualmente")
    
    def find_all(self, user_id):
        data = list(self.collection.find({"user_id": ObjectId(user_id)}))
        for datum in data:
            datum["user_id"] = str(datum["user_id"])
            datum["pokemon_id"] = str(datum["pokemon_id"])
            datum["_id"] = str(datum["_id"])
        return data

    def update(self, object_id, data):
        raise NotImplementedError("Los pokemones no se pueden actualizar")

    def create(self, data):
        data["user_id"] = ObjectId(data["user_id"])
        data["pokemon_id"] = ObjectId(data["pokemon_id"])
        datum = self.collection.insert_one(data)
        return str(datum.inserted_id)

    
    