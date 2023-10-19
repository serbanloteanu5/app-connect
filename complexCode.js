/*
Filename: complexCode.js
Description: This code demonstrates a complex and elaborate implementation of a task management system.
*/

// Data Model
let tasks = [];

// Task Class
class Task {
  constructor(id, title, description, assignee, dueDate, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.assignee = assignee;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}

// Add Task Function
function addTask(task) {
  tasks.push(task);
}

// Print Task Function
function printTask(task) {
  console.log(`Task ID: ${task.id}`);
  console.log(`Title: ${task.title}`);
  console.log(`Description: ${task.description}`);
  console.log(`Assignee: ${task.assignee}`);
  console.log(`Due Date: ${task.dueDate}`);
  console.log(`Priority: ${task.priority}`);
  console.log(`Completed: ${task.completed}`);
  console.log("---------------------------");
}

// Generate Task ID Function
function generateTaskID() {
  return Math.floor(Math.random() * 1000000);
}

// Create and add tasks
let task1 = new Task(generateTaskID(), "Implement Login Page", "Design and develop the login page", "John Doe", "2022-01-15", "High");
let task2 = new Task(generateTaskID(), "Fix Bug #567", "Investigate and resolve bug #567 on the homepage", "Jane Smith", "2022-01-20", "Medium");
let task3 = new Task(generateTaskID(), "Write API Documentation", "Create comprehensive API documentation for the backend services", "Robert Johnson", "2022-01-25", "Low");

addTask(task1);
addTask(task2);
addTask(task3);

// Print all tasks
tasks.forEach(task => {
  printTask(task);
});

// Complete Task
task1.complete();

// Print updated task
console.log("Updated Task:");
printTask(task1);