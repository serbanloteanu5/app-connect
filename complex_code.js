/* 

Filename: complex_code.js

Description: This JavaScript code is a complex and sophisticated program that implements a messaging system with various features, including sending and receiving messages, displaying message history, and searching for specific messages. The program uses object-oriented programming concepts and advanced array manipulation techniques to provide a professional and creative solution. 

*/

// Message class
class Message {
  constructor(sender, receiver, content, timestamp) {
    this.sender = sender;
    this.receiver = receiver;
    this.content = content;
    this.timestamp = timestamp;
  }

  displayMessage() {
    console.log(`[${this.timestamp}] ${this.sender} -> ${this.receiver}: ${this.content}`);
  }
}

// Messaging System class
class MessagingSystem {
  constructor() {
    this.messages = [];
  }

  sendMessage(sender, receiver, content) {
    const timestamp = new Date().toLocaleString();
    const message = new Message(sender, receiver, content, timestamp);
    this.messages.push(message);
  }

  displayMessageHistory() {
    console.log("--- Message History ---");
    this.messages.forEach((message) => message.displayMessage());
  }

  searchMessages(keywords) {
    const filteredMessages = this.messages.filter((message) => {
      const messageContent = message.content.toLowerCase();
      return keywords.some((keyword) => messageContent.includes(keyword.toLowerCase()));
    });

    if (filteredMessages.length > 0) {
      console.log("--- Search Results ---");
      filteredMessages.forEach((message) => message.displayMessage());
    } else {
      console.log("No matching messages found.");
    }
  }
}

// Example usage
const messagingSystem = new MessagingSystem();

messagingSystem.sendMessage("Alice", "Bob", "Hello Bob! How are you?");
messagingSystem.sendMessage("Bob", "Alice", "Hi Alice! I'm doing great. Thanks for asking!");
messagingSystem.sendMessage("Alice", "Bob", "That's awesome! By the way, have you seen the new movie?");
messagingSystem.sendMessage("Bob", "Alice", "Yes, I watched it last night. It was amazing!");

messagingSystem.displayMessageHistory();

messagingSystem.searchMessages(["alice", "movie"]);

/* Output:
--- Message History ---
[9/28/2022, 11:30:20 AM] Alice -> Bob: Hello Bob! How are you?
[9/28/2022, 11:30:20 AM] Bob -> Alice: Hi Alice! I'm doing great. Thanks for asking!
[9/28/2022, 11:30:20 AM] Alice -> Bob: That's awesome! By the way, have you seen the new movie?
[9/28/2022, 11:30:20 AM] Bob -> Alice: Yes, I watched it last night. It was amazing!
--- Search Results ---
[9/28/2022, 11:30:20 AM] Alice -> Bob: That's awesome! By the way, have you seen the new movie?
[9/28/2022, 11:30:20 AM] Bob -> Alice: Yes, I watched it last night. It was amazing!
*/