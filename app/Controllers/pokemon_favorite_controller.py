from flask import Blueprint, request, jsonify
from app.Schemas.pokemon_favorites_schema import PokemonFavoritesSchema
from marshmallow import ValidationError
from app.Models.factory import ModelFactory
from bson import ObjectId

bp = Blueprint("pokemon_favorites",__name__, url_prefix="/pokemon_favorites")
pokemon_favorites_schema= PokemonFavoritesSchema()
pokemon_favorites = ModelFactory.get_model("pokemon_favorites")

@bp.route("/register", methods=["POST"])
def register():
    try:
        data = pokemon_favorites_schema.load(request.json)
        user_id=pokemon_favorites.create(data)
        return jsonify({"user_id":str(user_id)},200) 

    except ValidationError as err:
        return jsonify("Los parametros enviados son incorrectos", 400)

@bp.route("/update/<string:user_id>", methods=["PUT"])
def update(user_id):
    try:
        data = pokemon_favorites_schema.load(request.json)
        pokemon_favorites = pokemon_favorites.update(ObjectId(user_id), data)
        return jsonify({
            "data": pokemon_favorites
        }, 200)
    except ValidationError as err:
        return jsonify("Los parametros enviados son incorrectos", 400)
    
@bp.route("/delete/<string:user_id>", methods=["DELETE"])
def delete(user_id):
    pokemon_favorites.delete(ObjectId(user_id))
    return jsonify("Usuario eliminado con exito", 200)

@bp.route("/getall/<string:user_id>", methods=["GET"])
def getall(user_id):
        pokemon_favorites = pokemon_favorites.find_all()
        allpokemons = []

        for pokemon in pokemon_favorites:
             if pokemon.user_id == user_id:
                  
                  allpokemons.append(pokemon)
        return jsonify(allpokemons, 200)

