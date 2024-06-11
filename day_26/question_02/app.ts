/* Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

Default parameters allow your functions to have preset values for their parameters. These values are used if no other value is provided, making functions more flexible. */

function greetUser(name: string = "anonymous") {
  console.log(`Hello, ${name}!`);
}

greetUser("Alice");
greetUser();
