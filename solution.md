The Storage is available under the directory “./auth"

The StyleSheet file is available under the directory “./css”

The required Data of the whole application is available under the directory “./data"

The Interface is available under the directory “./interfaces"

The Page(tsx file) is available under the directory “./pages”

Node Modules are present in “node_modules” directory.

“tsconfig.json” is the standard TypeScript’s Configuration file.

“package.json” is the standard Node’s Configuration file. It also contains custom command.

#Technical choices

I have used TypeScript because most of the errors are captured at the time of compilation. 
And I have also used React Framework. I have used Local Storage instead of real database as simple as possible.

#Architecture

I have kept architecture very simple because it was just a test. The detail is given above.

#Approach

I order to minimize the dependencies. I have not used any third party UI library, component library like bootstrap and other styling tools. I created styling classes by myself. I developed from zero to end by myself.

I used bare html elements such as inputs,select, radio buttons and buttons.

I used only React functional components in this project. Because Functional components are a bit easier to understand because there isn’t as much going on as there would be in a class component. They can also be written as a simple JS functions or as an arrow function using ES6 syntax, and their props are passed in as arguments (if any).

Unlike class components, functional components are stateless, which means that there are no lifecycle methods or state management. However, with React Hooks, there are provided functions for us to do so, such as useState() & useEffect().

Pros 

(1)Easier to test
(2)Easier to read/write
(3)Easier to debug



