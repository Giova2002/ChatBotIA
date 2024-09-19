import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("Backend/config/chatbot-e10ff-firebase-adminsdk-o5erg-cb2ce26d7c.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# Backend/chatbot-e10ff-firebase-adminsdk-o5erg-8e7b8736bf.json