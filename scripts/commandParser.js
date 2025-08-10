// commandParser.js
// Parses WhatsApp text into command + arguments

function parseCommand(message) {
    const parts = message.trim().split(" ");
    const command = parts[0].toUpperCase();
    const args = parts.slice(1);
    return { command, args };
}

// Example:
console.log(parseCommand("LIST /ProjectX"));
// Output: { command: 'LIST', args: ['/ProjectX'] }

module.exports = parseCommand;
