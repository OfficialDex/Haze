# HAZE BOT Website Configuration

import os

# Bot Configuration
BOT_INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1410545595126644787&permissions=8&scope=bot"
BOT_ID = "1410545595126644787"

# Server Configuration
DOMAIN = os.environ.get("REPLIT_DEV_DOMAIN", "localhost")
PORT = int(os.environ.get("PORT", 5000))
HOST = "0.0.0.0"

# Discord Links
SUPPORT_SERVER_INVITE = "https://discord.gg/vhKYD6tQnt"  # Update with actual support server
DISCORD_SERVER_ID = "1409434527172001946"  # Update with actual support server ID

# Social Media Links
GITHUB_URL = "https://github.com/your-username/haze-bot"
TWITTER_URL = "https://twitter.com/your-twitter"
WEBSITE_URL = f"https://{DOMAIN}" if DOMAIN != "localhost" else f"http://{DOMAIN}:{PORT}"

# Bot Information
BOT_NAME = "HAZE BOT"
BOT_DESCRIPTION = "Multipurpose Bot for Every Need"
BOT_VERSION = "2.0.0"

# Features Configuration
BOT_FEATURES = [
    {
        "name": "Moderation",
        "icon": "fas fa-shield-alt",
        "description": "Advanced moderation tools including auto-mod, ban/kick commands, warning system, and spam protection."
    },
    {
        "name": "Entertainment", 
        "icon": "fas fa-gamepad",
        "description": "Fun games, memes, jokes, trivia, and interactive entertainment to keep your community engaged."
    },
    {
        "name": "Music",
        "icon": "fas fa-music", 
        "description": "High-quality music streaming with playlist support, queue management, and audio controls."
    },
    {
        "name": "Utility",
        "icon": "fas fa-tools",
        "description": "Useful tools like polls, reminders, server info, user management, and administrative utilities."
    },
    {
        "name": "Analytics",
        "icon": "fas fa-chart-bar",
        "description": "Server statistics, member activity tracking, and detailed analytics to understand your community."
    },
    {
        "name": "Customization",
        "icon": "fas fa-cog", 
        "description": "Highly customizable settings, custom commands, role management, and server-specific configurations."
    }
]

# Statistics
BOT_STATS = {
    "servers": "1000+",
    "users": "50K+", 
    "uptime": "99.9%",
    "support": "24/7"
}

# Popular Commands
POPULAR_COMMANDS = [
    {
        "command": "/moderation ban",
        "description": "Ban a user from the server"
    },
    {
        "command": "/music play", 
        "description": "Play music from YouTube or Spotify"
    },
    {
        "command": "/utility poll",
        "description": "Create interactive polls"
    },
    {
        "command": "/fun joke",
        "description": "Get a random joke"
    },
    {
        "command": "/info server",
        "description": "Display server information"
    }
]

# Flask Configuration
class Config:
    SECRET_KEY = os.environ.get("SESSION_SECRET", "dev-secret-key-change-in-production")
    DEBUG = os.environ.get("FLASK_DEBUG", "True").lower() == "true"
    
    # Database Configuration (if needed in future)
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    
    # Security Headers
    SECURITY_HEADERS = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block'
    }

# Development vs Production settings
DEVELOPMENT = os.environ.get("REPLIT_ENVIRONMENT") == "development"
PRODUCTION = not DEVELOPMENT

# API Rate Limiting (if needed)
RATE_LIMIT_STORAGE_URL = os.environ.get("REDIS_URL")
RATE_LIMIT_DEFAULT = "100 per hour"

# Contact Information
CONTACT_EMAIL = "support@hazebot.com"
SUPPORT_EMAIL = "help@hazebot.com"

# Meta Tags for SEO
META_TAGS = {
    "title": f"{BOT_NAME} - {BOT_DESCRIPTION}",
    "description": "HAZE BOT is a powerful multipurpose Discord bot with moderation, music, entertainment, and utility features. Add to your server now!",
    "keywords": "discord bot, moderation, music bot, entertainment, utility, server management",
    "author": "HAZE BOT Team",
    "og:title": f"{BOT_NAME} - {BOT_DESCRIPTION}",
    "og:description": "Enhance your Discord server with HAZE BOT's powerful features",
    "og:type": "website",
    "og:url": WEBSITE_URL,
    "twitter:card": "summary_large_image",
    "twitter:title": f"{BOT_NAME} - {BOT_DESCRIPTION}",
    "twitter:description": "Enhance your Discord server with HAZE BOT's powerful features"
}