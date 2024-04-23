from flask import Flask, Blueprint

maze_game_bp = Blueprint('maze_game', __name__)

# Define routes and register maze_game_bp with Flask app

def create_app():
    app = Flask(__name__)
    app.register_blueprint(maze_game_bp)
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
