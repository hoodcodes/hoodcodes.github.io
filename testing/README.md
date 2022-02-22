[Home](../)

# Testing Reference

### Reference Links

### Topics in Testing

- Types of Testing
- Testing tools
- Testing Practices
- TDD
- BDD
- TDD vs BDD - where are the strengths between both and best use cases?

### Types of Testing

### Testing Tools

### Testing Practices

### TDD - Test Driven Development

3 laws of TDD

- cannot write prod code until you have a failing unit test
- cannot write any more of a unit test than is sufficient to have the test fail. Compilation errors is failure
- cannot write any more prod code than necessary to make the failing unit test then pass.

This becomes a tight loop. But the upside is-

- Everything was working as recently as a minute ago
- You’ll spend far less time debugging
- the unit test informs intent for future devs to understand the code better. It is an almost perfect low level form of documentation.

it’s no fun to write tests after the fact bec/ you know it already works

You will undoubtedly come across code that is hard to test, bec/ it was not written in a manner as to be ‘testable’. this will then lead to a test suite full of holes. When a test suite riddled with holes passes - it tells you nothing.

writing tests first - makes coding fun. if you write it first - it is impossible to write code that is hard to test. And this creates code that is uncoupled.

why do we write bad code ? because we are in a hurry. 2. it is impossible to write good code first.

### BDD - Behavior Driven Development

### TDD vs. BDD - Which is Better?
