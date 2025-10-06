
# ruleBasedChatBot

A very simple chatbot using [compromise](https://github.com/spencermountain/compromise) and Node.js.

## Overview

This lightweight, rule-based chatbot is built with JavaScript and uses the [compromise](https://github.com/spencermountain/compromise) natural language processing library. It’s designed as a customizable foundation for chatbot development — ideal for extending with new features and behaviors.

## Features

- **No UI:** Operates entirely via code, with no graphical interface.
- **Customizable Responses:** Edit `chatbot.js` and `regularExpressions.js` to change the bot’s behavior and message handling.
- **Extensible:** Add new files or rules to expand the chatbot’s capabilities.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dalliso-banda/ruleBasedChatBot.git
   cd ruleBasedChatBot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Customize the bot:**
   - Edit `chatbot.js` to adjust core bot logic and responses.
   - Modify `regularExpressions.js` to change how messages are recognized and handled.
   - You can add new files for additional features as needed.

4. **Run the chatbot:**
   ```bash
   node app.js
   ```

## Usage

- The bot runs as a Node.js process.
- Modify `chatbot.js` and `regularExpressions.js` to suit your needs.
- Extend the project by adding more rules, message handlers, or integrations.

## Customization

This chatbot is designed to be adapted for different use cases. Whether you want to change its responses, add new message patterns, or integrate with other services, simply update the logic in `chatbot.js` and `regularExpressions.js`.

## Roadmap

- Plans to add more customization points and features.
- Contributions and suggestions are welcome!

## License

 MIT
 
