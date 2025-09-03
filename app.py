import os
from flask import Flask, render_template
import config

# create the app
app = Flask(__name__)
app.secret_key = config.Config.SECRET_KEY

@app.route('/')
def index():
    """Homepage showcasing HAZE BOT features"""
    return render_template('index.html', 
                         bot_invite_url=config.BOT_INVITE_URL,
                         features=config.BOT_FEATURES,
                         stats=config.BOT_STATS,
                         commands=config.POPULAR_COMMANDS,
                         support_server=config.SUPPORT_SERVER_INVITE)

@app.route('/features')
def features():
    """Features and commands overview"""
    return render_template('index.html', 
                         section='features',
                         bot_invite_url=config.BOT_INVITE_URL,
                         features=config.BOT_FEATURES,
                         support_server=config.SUPPORT_SERVER_INVITE)

@app.route('/about')
def about():
    """About section describing the multipurpose bot"""
    return render_template('index.html', 
                         section='about',
                         bot_invite_url=config.BOT_INVITE_URL,
                         bot_info={'name': config.BOT_NAME, 'description': config.BOT_DESCRIPTION, 'version': config.BOT_VERSION},
                         support_server=config.SUPPORT_SERVER_INVITE)

@app.route('/support')
def support():
    """Contact and support information"""
    return render_template('index.html', 
                         section='support',
                         bot_invite_url=config.BOT_INVITE_URL,
                         support_server=config.SUPPORT_SERVER_INVITE,
                         contact_email=config.CONTACT_EMAIL,
                         support_email=config.SUPPORT_EMAIL)

if __name__ == '__main__':
    app.run(debug=config.Config.DEBUG, host=config.HOST, port=config.PORT)
