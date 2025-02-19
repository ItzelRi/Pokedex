from flask import Blueprint, request, jsonify
from app.Schemas.pokemon_schema import PokemonSchema
from marshmallow import ValidationError
from app.Models.factory import ModelFactory
from bson import ObjectId

bp = Blueprint("pokemon",__name__, url_prefix="/pokemon")
pokemon_schema= PokemonSchema()
pokemon = ModelFactory.get_model("pokemon")

@bp.route("/get/<string:user_id>", methods=["GET"])
def get_pokemon(pokemons):
    pokemon = pokemon.find_by_id(ObjectId(pokemons))
    return jsonify(pokemon, 200)

@bp.route("/getall/<string:user_id>", methods=["GET"])
def getall():
    try:
        pokemons = pokemon.find_all()
        allpokemons = list(pokemons)
        return jsonify(allpokemons, 200)
    except:
        raise NotImplementedError("No se encontraron los pokemones")