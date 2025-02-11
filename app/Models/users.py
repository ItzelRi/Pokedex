from app import mongo

class Users:
    saved = mongo.db.users

    @staticmethod
    def find_all():
        users = Users.saved.find()
        return list(users)
    
    @staticmethod
    def find_by_id(user_id):
        user = user.saved.find_one({
            "_id": user_id
        })
        return user
    
    @staticmethod
    def create(data):
        user = user.saved.insert_one(data)
        return user.inserted_id
    
    @staticmethod
    def update(user_id, data):
        user = user.saved.update_one({
            "_id": user_id
        },{
            "$set": data
        })
        return user

    @staticmethod
    def delete(user_id):
        return Users.saved.delete_one({
            "id_": user_id
        })