/*
   Filename: ComplexCode.js

   This code is a complex implementation of a chat application using JavaScript.
   It includes various features like user authentication, chat rooms, private messaging,
   and notifications. It utilizes object-oriented programming and event-driven architecture.

   DISCLAIMER: This code is a simplified example for demonstration purposes only.
   It does not handle edge cases or focus on performance optimizations.
*/

// Object definition for User
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.isLoggedIn = false;
    this.lastActive = new Date();
  }

  login() {
    this.isLoggedIn = true;
    this.lastActive = new Date();
    console.log(`${this.username} logged in.`);
  }

  logout() {
    this.isLoggedIn = false;
    this.lastActive = new Date();
    console.log(`${this.username} logged out.`);
  }

  sendMessage(receiver, message) {
    console.log(`${this.username} sent a message to ${receiver}: "${message}"`);
  }
}

// Object definition for ChatRoom
class ChatRoom {
  constructor(name) {
    this.name = name;
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(`${user.username} joined the chat room "${this.name}".`);
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      console.log(`${user.username} left the chat room "${this.name}".`);
    }
  }

  broadcastMessage(sender, message) {
    console.log(`[${this.name}] ${sender.username} broadcasted: "${message}"`);
  }
}

// Instantiating users and chat rooms
const user1 = new User("Alice", "password1");
const user2 = new User("Bob", "password2");
const user3 = new User("Carol", "password3");

const chatRoom1 = new ChatRoom("General");
const chatRoom2 = new ChatRoom("Private");

// User authentication
user1.login();
user2.login();

// User interactions
chatRoom1.addUser(user1);
chatRoom1.addUser(user2);
chatRoom2.addUser(user2);
chatRoom2.addUser(user3);

user1.sendMessage(user2, "Hey Bob, how are you?");
user2.sendMessage(user1, "Hi Alice! I'm doing great.");

chatRoom1.broadcastMessage(user1, "Welcome to the chat room!");
chatRoom2.broadcastMessage(user2, "This is a private chat room.");

// User logout
user1.logout();
user2.logout();

// User attempt to send a message after logout
user1.sendMessage(user2, "Hey, are you still there?");

// Gracefully removing users from chat rooms
chatRoom1.removeUser(user1);
chatRoom1.removeUser(user2);
chatRoom2.removeUser(user2);
chatRoom2.removeUser(user3);