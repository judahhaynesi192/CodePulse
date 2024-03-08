// index.js

// CodePulse - A dynamic coding platform designed to inspire collaboration and innovation among developers of all levels.

// CodePulse functionality
class CodePulse {
    constructor() {
        this.projects = [];
        this.collaborators = {};
    }

    // Method to create a new project
    createProject(projectName, description) {
        const project = {
            name: projectName,
            description: description
        };
        this.projects.push(project);
    }

    // Method to add collaborators to a project
    addCollaborators(projectName, collaborators) {
        this.collaborators[projectName] = collaborators;
    }

    // Method to display all projects and their collaborators
    displayProjects() {
        console.log("Projects:");
        this.projects.forEach(project => {
            console.log(`- ${project.name}: ${project.description}`);
            if (this.collaborators[project.name]) {
                console.log(`  Collaborators: ${this.collaborators[project.name].join(", ")}`);
            }
        });
    }
}

// Example usage:
const codePulseApp = new CodePulse();

// Creating projects
codePulseApp.createProject("Real-Time Chat Application", "Build a real-time chat application using WebSocket technology.");
codePulseApp.createProject("E-commerce Website", "Develop an e-commerce website with user authentication and product listing features.");

// Adding collaborators to projects
codePulseApp.addCollaborators("Real-Time Chat Application", ["developer1", "developer2", "designer"]);
codePulseApp.addCollaborators("E-commerce Website", ["developer2", "developer3"]);

// Displaying projects
codePulseApp.displayProjects();
