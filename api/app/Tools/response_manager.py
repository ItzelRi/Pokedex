from flask import jsonify

class ResponseManager:
    def success(self, data):
        if isinstance(data, str):
            data = {
                "mensage":data
            }
        return jsonify(data), 200
    
    def error(sel, data="Invalid request"):
        if isinstance(data, str):
            data = {
                "mensage":data
            }
        return jsonify(data), 400
    
    def error_server(sel, data="SERVER ERROR"):
        if isinstance(data, str):
            data = {
                "mensage":data
            }
        return jsonify(data), 500