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
        fav_pokemon_id=pokemon_favorites.create(data)
        return jsonify({"fav_pokemon_id":str(fav_pokemon_id)},200) 

    except ValidationError as err:
        return jsonify("Los parametros enviados son incorrectos", 400)

@bp.route("/update/<string:fav_pokemon_id>", methods=["PUT"])
def update(fav_pokemon_id):
    try:
        data = pokemon_favorites_schema.load(request.json)
        pokemon_favorites = pokemon_favorites.update(ObjectId(fav_pokemon_id), data)
        return jsonify({
            "data": pokemon_favorites
        }, 200)
    except ValidationError as err:
        return jsonify("Los parametros enviados son incorrectos", 400)
    
@bp.route("/delete/<string:fav_pokemon_id>", methods=["DELETE"])
def delete(fav_pokemon_id):
    pokemon_favorites.delete(ObjectId(fav_pokemon_id))
    return jsonify("Usuario eliminado con exito", 200)
