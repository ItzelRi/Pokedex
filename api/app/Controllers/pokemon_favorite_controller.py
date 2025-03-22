from flask import Blueprint, request 
from app.Schemas.pokemon_favorites_schema import PokemonFavoritesSchema
from app.Tools.response_manager import ResponseManager
from marshmallow import ValidationError
from app.Models.factory import ModelFactory
from bson import ObjectId
from flask_jwt_extended import jwt_required, get_jwt_identity

RM = ResponseManager()
bp = Blueprint("pokemon_favorites",__name__, url_prefix="/pokemonfav")
pokemon_favorites_schema= PokemonFavoritesSchema()
pokemon_fav_model = ModelFactory.get_model("pokemon_favorites")

@bp.route("/create", methods=["POST"])
@jwt_required()
def create():
    user_id = get_jwt_identity()
    try:
        data = request.json
        data = pokemon_favorites_schema.load(data)
        data["user_id"] = user_id
        fp = pokemon_fav_model.create(data)
        return RM.success({"_id":fp}) 

    except ValidationError as err:
        print(err)
        return RM.error("Los parametros enviados son incorrectos")

@bp.route("/delete/<string:id>", methods=["DELETE"])
@jwt_required()
def delete(id):
    pokemon_fav_model.delete(ObjectId(id))
    return RM.success("Pokemon favorito eliminado con exito")

@bp.route("/get", methods=["GET"])
@jwt_required()
def get_all():
        user_id = get_jwt_identity()
        data = pokemon_fav_model.find_all(user_id)
        return RM.success(data)


