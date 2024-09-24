import firebase_admin
from firebase_admin import credentials, firestore
import os
import json

# Cargar las credenciales desde la variable de entorno
firebase_credentials = os.environ.get("FIREBASE_CREDENTIALS")

if firebase_credentials:
    cred_dict = json.loads(firebase_credentials)
    cred = credentials.Certificate(cred_dict)
    firebase_admin.initialize_app(cred)
else:
    raise ValueError("Firebase credentials not found in environment variables")

db = firestore.client()


# import firebase_admin
# from firebase_admin import credentials, firestore

# cred = credentials.Certificate("Backend/chatbot-e10ff-firebase-adminsdk-o5erg-1fda4a84aa.json")
# firebase_admin.initialize_app(cred)

# db = firestore.client()

# Backend/chatbot-e10ff-firebase-adminsdk-o5erg-8e7b8736bf.json