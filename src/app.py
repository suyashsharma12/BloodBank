# backend/app.py
from flask import Flask, jsonify, request
from PIL import Image
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

app = Flask(__name__)

# Load a pre-trained image classification model (adjust this based on your model)
model = load_model('C:\\Users\\Ramchandra\\Desktop\\reactjs\\skin\\src\\model.tflite')


def preprocess_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0  # Normalize the image
    return img_array

@app.route('/predict', methods=['POST'])
def predict():
    # Check if the POST request contains a file
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    # Check if the file is empty
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    try:
        img_path = 'temp.jpg'
        file.save(img_path)
        img_array = preprocess_image(img_path)
        prediction = model.predict(img_array)

        # Assuming a classification model, you might return the class probabilities
        return jsonify({'prediction': prediction.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
