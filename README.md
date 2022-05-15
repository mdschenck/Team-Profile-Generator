# Team-Profile-Generator

Command Line Interface application that creates a website detailing member details for a development team.

# Description

Takes user input via a command line interface to describe team members in a development team, and outputs a website with a card for each team member with their id, name, role, email, and role specific information. This role specific information is office number for Managers, github name for Engineers, and school for Interns. This application was built using Test Driven Development, with a suite of tests for each employee type to ensure data integrity and proper functionality.

# Link to video screengrab of application in use:

# Link to example output HTML File:

# Link to video screengrab of all Tests PASS with Jest:

https://drive.google.com/file/d/1ky1UHjWK_ohcXI7RktH6bxtGWipAc_N3/view

# User Story:

- AS A manager
- I WANT to generate a webpage that displays my team's basic info
- SO THAT I have quick access to their emails and GitHub profiles

# Acceptance Criteria:

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for my team members and their information
- THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- WHEN I click on an email address in the HTML
- THEN my default email program opens and populates the TO field of the email with the address
- WHEN I click on the GitHub username
- THEN that GitHub profile opens in a new tab
- WHEN I start the application
- THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
- WHEN I enter the team manager’s name, employee ID, email address, and office number
- THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- WHEN I select the engineer option
- THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- WHEN I select the intern option
- THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- WHEN I decide to finish building my team
- THEN I exit the application, and the HTML is generated

# License:

MIT License

# Questions:

For any questions please email mdschenck@gmail.com
