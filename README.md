# web-calc
A graphical calculator on a web page.

## Plan
- Does my program have a user interface? What will it look like? What functionality will the interface have?

  - The user interface will be a graphical calculator displayed on a web page using html and css. The calculator will look similar to a normal solar-powered calculator you'd see in real life. The interface will take in user inputs via button clicks allowing the user to specify numbers and operations to evaluate.

- What inputs will my program have? Will the user enter data or will I get input from somewhere else?
  - Mouse clicks will be retrieved from the javascript mouseevent interface.
  - Text data will be retrieved in the form of numbers that were created by user inputted mouse clicks on certain elements on the web page.

- What's the desired output?

  - The desired output is the evaluation of the user inputted expression.

- Given my inputs, what are the steps necessary to return the desired output?
  1. Track all the user input numbers and operations in an expression as a string.
  2. When the user presses the '=' button, evaluate the final expression.
  3. Print out the evaluated expression onto the graphical calculator's display.
