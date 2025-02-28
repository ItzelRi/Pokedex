from flask import Blueprint
from app.Tools.response_manager import ResponseManager
from app.Models.factory import ModelFactory
from bson import ObjectId
from flask_jwt_extended import jwt_required

RM = ResponseManager()
bp = Blueprint("pokemon",__name__, url_prefix="/pokemon")
pokemon_model = ModelFactory.get_model("pokemons")

@bp.route("/get/<string:pokemon_id>", methods=["GET"])
@jwt_required()
def get_pokemon(pokemon_id):
    pokemon = pokemon.find_by_id(ObjectId(pokemon_id))
    return RM.success(pokemon)

@bp.route("/getall/", methods=["GET"])
def getall():
        data = pokemon_model.find_all()
        return RM.success(data)
    