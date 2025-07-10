# ⌨️ Typewriter Project
A simple and fun Node.js script that simulates a typewriter by printing out a sentence one character at a time in the terminal.

## ✨ Features
Outputs characters one-by-one with a timed delay

Mimics the feel of a typewriter or classic terminal printout

Demonstrates the use of setTimeout and process.stdout.write()

Clean, beginner-friendly script for understanding async timing in JavaScript

## 🧠 How It Works
A predefined sentence is stored in a string

The script loops through each character in the string

setTimeout delays each character's appearance based on its position

process.stdout.write() is used instead of console.log() to avoid newlines after each character

## 📦 Project Structure

typewriter/
├── typewriter.js    # Main script file
└── README.md        # Project documentation
🖥️ Example Output

H e l l o   w o r l d !
(Characters appear one-by-one in real time)

## 🚀 How to Run
Make sure you have Node.js installed

Open your terminal

Navigate into the project directory

Run:

node typewriter.js