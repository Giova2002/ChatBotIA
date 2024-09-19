# from fastapi import FastAPI, Request
# import ollama

# app = FastAPI()

# @app.post("/chat")
# async def chat(request: Request):
#     body = await request.json()
#     user_message = body.get("message")
    
#     messages = [{"role": "assistant", "content": "How can I help you?"}]
#     messages.append({"role": "user", "content": user_message})

#     response = ollama.chat(model='llama3.1', stream=False, messages=messages)
#     assistant_response = response["message"]["content"]
    
#     return {"response": assistant_response}


# from fastapi import FastAPI, Request
# from fastapi.middleware.cors import CORSMiddleware
# import ollama

# app = FastAPI()
# origins =[
#     "http://localhost:5173"
# ]
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Permitir todas las origines. Cambia esto según tus necesidades.
#     allow_credentials=True,
#     allow_methods=["*"],  # Permitir todos los métodos HTTP
#     allow_headers=["*"],  # Permitir todas las cabeceras
# )

# @app.post("/")
# async def chat(request: Request):
#     body = await request.json()
#     user_message = body.get("message")
    
#     # Initialize messages if not already present
#     messages = [{"role": "assistant", "content": "How can I help you?"}, {"role": "assistant", "content": "Este modelo solo responderá preguntas relacionadas con código y atajos de teclado en NetBeans."}, {"role": "assistant", "content": "This model will only respond to questions related to code and keyboard shortcuts in NetBeans."}]
    
#     if user_message:
#         messages.append({"role": "user", "content": user_message})

#     # Call the Ollama chat function
#     response = ollama.chat(model='llama3.1', stream=False, messages=messages)
    
#     assistant_response = response.get("message", {}).get("content", "No response from model")
    
    
#     return {"response": assistant_response}


# http://127.0.0.1:8000 

# from fastapi import FastAPI, Request
# from fastapi.middleware.cors import CORSMiddleware
# import ollama

# app = FastAPI()
# chat_history = []

# origins = [
#     "http://localhost:5173"
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.post("/")
# async def chat(request: Request):
#     body = await request.json()
#     user_message = body.get("message")
    
#     # Instrucción clara para que Ollama solo responda preguntas sobre NetBeans y programación
#     system_instruction = """
#     You are a helpful assistant that only answers questions related to programming, the NetBeans IDE, or its shortcuts. 
#     If the question is not related to these topics, respond with:
#     'I can only answer questions about programming, NetBeans IDE, or its shortcuts.'
#     """

#     if user_message:
#         messages = [
#             {"role": "system", "content": system_instruction},  # Instrucción para el modelo
#             {"role": "user", "content": user_message}            # Pregunta del usuario
#         ]

#         # Llamar al modelo Ollama para obtener la respuesta
#         response = ollama.chat(model='llama3.1', stream=False, messages=messages)
#         assistant_response = response.get("message", {}).get("content", "No response from model")
#         # Guardar el mensaje del usuario y la respuesta del bot en el historial
#         chat_history.append({"role": "user", "content": user_message})
#         chat_history.append({"role": "bot", "content": assistant_response})

#         return {"response": assistant_response, "chat_history": chat_history}
    
#         # return {"response": assistant_response}

#     return {"response": "No message provided."}


from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import ollama
from .firebase_config import db # Importar Firestore desde la configuración de Firebase
from firebase_admin import firestore


app = FastAPI()
chat_history = []

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/")
async def chat(request: Request):
    body = await request.json()
    user_message = body.get("message")
    
    # Instrucción clara para que Ollama solo responda preguntas sobre NetBeans y programación
    system_instruction = """
    You are a helpful assistant that only answers questions related to programming, the NetBeans IDE, or its shortcuts. 
    If the question is not related to these topics, respond with:
    'I can only answer questions about programming, NetBeans IDE, or its shortcuts.'
    """

    if user_message:
        messages = [
            {"role": "system", "content": system_instruction},  # Instrucción para el modelo
            {"role": "user", "content": user_message}            # Pregunta del usuario
        ]

        # Llamar al modelo Ollama para obtener la respuesta
        response = ollama.chat(model='llama3.1', stream=False, messages=messages)
        assistant_response = response.get("message", {}).get("content", "No response from model")
        
        # Guardar el mensaje del usuario y la respuesta del bot en el historial
        chat_history.append({"role": "user", "content": user_message})
        chat_history.append({"role": "bot", "content": assistant_response})

        # Guardar el historial en Firebase Firestore
        try:
            doc_ref = db.collection("chatHistory").add({
                "userMessage": user_message,
                "botResponse": assistant_response,
                "timestamp": firestore.SERVER_TIMESTAMP
            })
            print(f"Historial guardado con ID: {doc_ref.id}")
        except Exception as e:
            print(f"Error guardando el historial: {e}")

        return {"response": assistant_response, "chat_history": chat_history}

    return {"response": "No message provided."}




