[Home](../)

# Refactoring Reference

### Reference Links

- [Industrial Logic: Smells To Refactorings Cheatsheet. GREAT](https://www.industriallogic.com/blog/smells-to-refactorings-cheatsheet/)
- [Steve Smith's Pluralsight Course on Refactorings - Fantastic](https://www.pluralsight.com/courses/refactoring-fundamentals)

### Books On Refactoring

### Types of Refactoring

### Code Smells

Code Smell - when the code is not clean, testable and predictable

Does the method have:

- Clear Purpose
- Good Name - single purpose
- Focused Code - all code in method should JUST do what its purpose is
- Code in the method should be short (e.g. one screen)
- Automated Code Test
- Predictable Result

Methods are actions so they should be Verbs

- Bloaters
  - Long method
  - Large Class
  - Data Clumps
  - Long Parameter List
  - Primitive Obsession
- Change Preventers
  - Divergent Change
  - Shotgun Surgery
  - Parallel Inheritance Hierarchies
- Couplers
  - Feature Envy
  - Inappropriate Intimacy
  - Message Chains
  - Middle Man
- Object-Oriented Abusers
  - Switch Statements
  - Temporary Field
  - Refused Bequest
  - Alternative Classes with Different Interfaces
- Dispensables
  - Lazy Class
  - Comments
  - Duplicate Code
  - Data Class
  - Dead Code
  - Speculative Generality

TODO: add an example for each item above and/or brief description
