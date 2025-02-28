from app import mongo
from app.Models.super_class import SuperClass
from bson import ObjectId

class PokemonFavorites(SuperClass):
    def __init__(self):
        super().__init__("pokemon_favorites")
    
    def find_by_id(self):
        raise NotImplementedError("Los pokemones favoritos no se pueden buscar individualmente")
    
    def find_all(self, user_id):
        data = self.collection.find({"user_id": ObjectId(user_id)})
        return data

    def update(self, object_id, data):
        raise NotImplementedError("Los pokemones no se pueden actualizar")


    
    