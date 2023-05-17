# CyberQuest CTF - Insecure Direct Object Reference (IDOR) Lab

## Description

This repository contains a purposely vulnerable lab for the CyberQuest Capture the Flag (CTF) event. The lab focuses on the Insecure Direct Object Reference (IDOR) vulnerability, which involves improper access control that allows attackers to manipulate object references and access sensitive data.

**Note: Running this lab on production or personal machines is strongly discouraged. It is intended to be run in a controlled and isolated environment for educational purposes only.**

## Requirements

To set up and run this lab, you need the following:

- [Node.js](https://nodejs.org) installed on your machine
- Basic knowledge of web development and security concepts

## Installation

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/cyberbishop/cyberquest-idor-lab.git
   ```
2. Navigate to the project directory:
   ```
   cd cyberquest-idor-lab
   ```
3. Install the required dependencies:
   ```
   npm install
   ```
4. Rename .env.example to .env and fill in the appropriate values
   ```
   mv .env.example .env
   ```
5. Start the server:
   ```
   npm run start
   ```

## Usage

1. Once the server is running, open your web browser and go to `http://localhost:3000`.

## Reporting Issues

If you encounter any issues while running the lab or have any questions, please [open an issue](https://github.com/cyberbishop/cyberquest-idor-lab/issues) on this repository.

## Disclaimer

- This lab is designed for educational and learning purposes only. Do not use it for any malicious activities.
- By using this lab, you agree that the authors and maintainers of this repository are not responsible for any misuse or damages that may arise from its usage.
- Always use caution and obtain proper authorization before testing or exploiting any vulnerabilities.

## Acknowledgements

- This lab is inspired by various resources, tutorials, and examples available in the cybersecurity community. Special thanks to the creators and contributors of those materials.

Have fun and happy hacking!
