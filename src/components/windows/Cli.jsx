import React from 'react'
import Terminal from 'react-console-emulator'
import MacWindow from './Macwindow'
import './cli.scss'

const commands = {
    about: {
        description: "About me",
        fn: () => `
👋 Hi, I'm Sujal.

Frontend Developer
MERN Stack Developer
React Enthusiast
    `,
    },

    skills: {
        description: "List technical skills",
        fn: () => `
Frontend:
- React
- JavaScript
- Tailwind CSS
- HTML
- CSS

Backend:
- Node.js
- Express.js

Database:
- MongoDB

Tools:
- Git
- GitHub
- VS Code
    `,
    },

    projects: {
        description: "View featured projects",
        fn: () => `
1. MacOS Portfolio
2. Task Manager
3. Weather App
4. Notes App
    `,
    },

    contact: {
        description: "Contact information",
        fn: () => `
Email   : sujal@example.com
GitHub  : github.com/yourusername
LinkedIn: linkedin.com/in/yourusername
    `,
    },

    resume: {
        description: "Resume status",
        fn: () => `
Resume.pdf

Status : Available
    `,
    },

    whoami: {
        description: "Current user",
        fn: () => "sujal",
    },

    pwd: {
        description: "Current directory",
        fn: () => "/home/sujal",
    },

    ls: {
        description: "List portfolio files",
        fn: () => `
about.md
projects/
skills.json
resume.pdf
contact.txt
spotify/
    `,
    },

    status: {
        description: "Current availability",
        fn: () => `
Status      : Open to Work
Location    : India
Availability: Full-time
Remote       : Yes
    `,
    },
};

const Cli = ({windoName,setWindowState}) => {
    return (
        <MacWindow windoName={windoName} setWindowState={setWindowState}>
            <div className="cli-window">
                    <Terminal
                commands={commands}
                welcomeMessage={`
                Last login: Today

                Welcome to Sujal's Portfolio Terminal

                Type "help" to see all available commands.
                `}
            />
            </div>
        </MacWindow>
    )
}

export default Cli
