from app import mongo
from app.Models.super_class import SuperClass

class PokemonFavorites(SuperClass):
    def __init__(self):
        super().__init__("pokemon_favorites")
    
    def find_by_id(self):
        raise NotImplementedError("Los pokemones favoritos no se pueden buscar individualmente")
    

    
    