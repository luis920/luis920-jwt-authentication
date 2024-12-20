"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint,json
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token,get_jwt_identity,jwt_required,JWTManager



api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



#iniciar sesion y generar token
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    if not email or not password:
        return jsonify({"msg": "Email and password are required"}), 400
    
    user = User.query.filter_by(email=email).first()

    
    if not user or user.password != password:  
        return jsonify({"msg": "Bad email or password"}), 401
    
    
    
    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 200
#______________________________________________________________________
# Ruta privada
@api.route("/profile", methods=["GET"])
@jwt_required()
def protected():
   
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

# crear un nuevo usuario
@api.route('/register', methods=['POST'])
def register():

    data = request.json 

    first_name = data.get('first_name')
    last_name = data.get('last_name')
    birth_date = data.get('birth_date')
    email = data.get('email')
    password = data.get('password')

    if None in [first_name, last_name, birth_date, email, password]:
        return jsonify({"msg": "All fields are required"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Email already in use"}), 400
    try:
       body = json.loads(request.data)
       new_user= User(
           first_name = body["first_name"],
           last_name = body["last_name"],
           birth_date = body["birth_date"],
           email = body["email"] ,
           password = body["password"],
           is_active = True
           
           
       )
       db.session.add(new_user)
       db.session.commit()
       return jsonify({"msg": "User created succesfull" }),200
    except Exception as e:
        return jsonify({"msg": "Server Error" , "error": str(e)}),500 