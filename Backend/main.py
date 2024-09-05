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
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import ollama

app = FastAPI()
origins =[
    "http://localhost:5173"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir todas las origines. Cambia esto según tus necesidades.
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos los métodos HTTP
    allow_headers=["*"],  # Permitir todas las cabeceras
)

@app.post("/")
async def chat(request: Request):
    body = await request.json()
    user_message = body.get("message")
    
    # Initialize messages if not already present
    messages = [{"role": "assistant", "content": "How can I help you?"}, {"role": "assistant", "content": "Este modelo solo responderá preguntas relacionadas con código y atajos de teclado en NetBeans."}, {"role": "assistant", "content": "This model will only respond to questions related to code and keyboard shortcuts in NetBeans."}]
    if user_message:
        messages.append({"role": "user", "content": user_message})

    # Call the Ollama chat function
    response = ollama.chat(model='llama3.1', stream=False, messages=messages)
    
    assistant_response = response.get("message", {}).get("content", "No response from model")
    
    
    return {"response": assistant_response}


# http://127.0.0.1:8000 
