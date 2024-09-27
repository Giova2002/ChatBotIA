# Usa una imagen base de Python
FROM python:3.9

# Instala las dependencias del sistema
RUN apt-get update && apt-get install -y libgl1-mesa-glx libglib2.0-0

# Copia los archivos del proyecto
WORKDIR /app
COPY . /app

# Instala las dependencias de Python
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expone el puerto que usa FastAPI
EXPOSE 10000

# Comando para ejecutar FastAPI
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", $PORT]
