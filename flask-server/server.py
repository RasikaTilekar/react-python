from flask_cors import CORS, cross_origin
from flask import Flask

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
@cross_origin()
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route('/members')
@cross_origin()
def memberdisplay():  # put application's code here
    return {"members": ["member1", "member2", "member3"]}

if __name__ == '__main__':
    app.run()