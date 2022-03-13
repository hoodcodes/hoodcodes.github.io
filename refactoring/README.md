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

### Optimizing a Legacy - Challenges

Here is an example of what was found with one legacy application we were asked to optimize.

- separate api project for mobile and web - resulting in duplication of code.
  - Pros of this approach:
  - Cons of this approach:
    - duplication of code - need to maintain 2 sources of code for any work.
- EF Framework in use, but not being leveraged fully
  - migrations are not enabled
  - would like to have a database with a base set of seed data able to be created on demand automatically.
    - utilize seed scripts and empty tables scripts
- no idea how this is really architected
  - dependencies
  - no arch maps / diagrams
  - all of the services employed
- potentially a lot of dead code out there -
  - a lot of client-side code calling APIs, therefore challenging to know what is used versus not used. We cannot simply rely on VS intellisense to alert us to unused code.
- Many long conditional statements
- Some unit tests in some places, but largely this is missing
- No integration nor E2E tests
- Difficult to deploy. Historically, very painful and deploying to the cloud not possible. Have had to fall back to havng a VM with IIS, and deployment has been very manual.
- Virtually zero caching
- Very high number of database calls for activities. Not optimized
- No indexing on the SQL DB
