import os
from flask import Flask, render_template

# create the app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key")

@app.route('/')
def index():
    """Homepage showcasing HAZE BOT features"""
    return render_template('index.html')

@app.route('/features')
def features():
    """Features and commands overview"""
    return render_template('index.html', section='features')

@app.route('/about')
def about():
    """About section describing the multipurpose bot"""
    return render_template('index.html', section='about')

@app.route('/support')
def support():
    """Contact and support information"""
    return render_template('index.html', section='support')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
