from marshmallow import Schema, fields, ValidationError

class PokemonFavoritesSchema(Schema):
    idPokemon =  fields.Str(
        required=True,
        validate=lambda x: len(x) > 0,
        error_messages={
            "required": "El id del pokemon es requerido"
        }
    )
    idUser =  fields.Str(
        required=True,
        validate=lambda x: len(x) > 0,
        error_messages={
            "required": "El id del usuario es requerido"
        }
    )
