from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'My name is Dennis Gyan,and am a new developer!'

if __name__ == '__main__':
    app.run(debug=True)
