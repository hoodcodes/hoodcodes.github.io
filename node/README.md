[Home](../)

# Node Reference

- [About NodeJs](https://nodejs.org/en/about/)

### Highlights

- Created: 2009
- Created By: Ryan Dahl (Joyent)
- Characteristics: Asynchronous, Event-Driven architecture that processes incoming requests on an event loop, as opposed to traditional threading architectures.

### Summary Description

Node.js is an asynchronous, event-driven JavaScript runtime environment that provides a platform to execute JavaScript on the server-side, enabling the building of scalable network applications.

Node.js does not operate on multiple threads, rather it uses an event loop

### Working With Environment Variables

- [Working With Environment Variables in Node.js](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html)

Install the dotenv package from the terminal: `npm install dotenv --save`

Add the following to the top level of your js file:

```javascript
require("dotenv").config();
```

Optionally you can add a check to see if you are running in production:

```javascript
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
```

Create your .env file and add your variables information. Example:

```
MYVARIABLE=VerySecretValue
PORT=7878
```

Now in your code you can refer to your variables as so: `process.env.PORT`

Example:

```javascript
app.listen(process.env.PORT, () =>
  console.log(`server running on PORT ${process.env.PORT}`)
);
```
