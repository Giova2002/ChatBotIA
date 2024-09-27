# import firebase_admin
# from firebase_admin import credentials, firestore
# import os
# import json

# # Cargar las credenciales desde la variable de entorno
# firebase_credentials = os.environ.get("FIREBASE_CREDENTIALS")

# if firebase_credentials:
#     cred_dict = json.loads(firebase_credentials)
#     cred = credentials.Certificate(cred_dict)
#     firebase_admin.initialize_app(cred)
# else:
#     raise ValueError("Firebase credentials not found in environment variables")

# db = firestore.client()


import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("Backend/chatbot-e10ff-firebase-adminsdk-o5erg-1fda4a84aa.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# Backend/chatbot-e10ff-firebase-adminsdk-o5erg-8e7b8736bf.json

# import firebase_admin
# from firebase_admin import credentials, firestore
# import os
# import json

# # Lee el contenido de la variable de entorno que contiene las credenciales
# firebase_credentials_json = os.getenv('FIREBASE_CREDENTIALS')

# # Verifica si las credenciales se obtuvieron correctamente
# if not firebase_credentials_json:
#     raise ValueError("Firebase credentials not found in environment variables")

# # Convierte la cadena JSON en un diccionario
# firebase_credentials_dict = json.loads(firebase_credentials_json)

# # Usa el diccionario de credenciales para inicializar Firebase
# cred = credentials.Certificate(firebase_credentials_dict)
# firebase_admin.initialize_app(cred)

# # Inicializa Firestore
# db = firestore.client()

# Ahora puedes usar `db` para acceder a Firestore
