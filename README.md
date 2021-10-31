## Contact Form

# Aim:
Create an validation form.

# Install
In the terminal run the following commands:
`npm install` 
To run the tests type on the terminal:
`npm test` 

# Run
In the terminal type 'npm start' in order to run the code, if a browser doesn't automatically open, in your prefered internet browser type 'localhost:3000' and the app should be running there.

# Structure
This form is developed on react.js with react-bootstrap for the responsive behaviour.

# Validation
In order to check validation, press the 'submit' button, if it passes the validation, a pop up window will pop to notify the that the form has been validated, if it doesn't, it will display the error in the correspondent field where it didin't passed.

# Decisions
I decided to use react-bootstrap as I think it would be the easiest way to create a responsive behaviour for the form, and for the colour picker I decided to add the option to display the colour selected by the user as... well... I stumble into this feature while looking into solving the test for the colour selector and thought that it would be a good user experience and a little personal touch to confirm the colour selected by the user.

# Known Issue
This form contains email, password and colour selection; has 2 tests that passes for email and for password but the test for the colour selection does not pass.