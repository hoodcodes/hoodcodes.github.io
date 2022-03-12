[Home](../)

# Other Miscellaneous Topics

### Reference Links:

- [notes on Douglas Crockford Talk: Managing Programmers](./managingprogrammers.md)
- [YouTube 55min Douglas Crockford: Programming Style & Your Brian](https://www.youtube.com/watch?v=_EANG8ZZbRs)

### VIM

- [VIM editor Cheatsheet](https://vim.rtorr.com/)

* VIM: quit without saving
  - Press ESC
  - `:quit`
* VIM: quit with saving
  - Press ESC
  - `:wq` <Enter>

### Curl

Curl is a command line tool to transfer data to and from a server using any of a number of protocols. You can download data from the internet using curl. you can test api’s.

wget is a command like curl, which allows you to recursively download files. you could download an entire website with one command, or lots of files.

curl supports more protocols and has better support for SSL.

libcurl is a library which curl uses, that other scripting languages can use for scraping web pages.

couple things i found:

- tutorial: https://www.youtube.com/watch?v=WxUVU0b95Oc
- wget and curl: https://www.lifewire.com/curl-definition-2184508

### Mac Terminal Tips

- [Mac Terminal Cheatsheet](https://github.com/0nn0/terminal-mac-cheatsheet)

* Clear terminal output: CMD + K

### Sharding

Sharding - the process of breaking a large database into many, much smaller databases. E.G. breaking up a customer database into geographic areas and storing them on servers in their respective regions.

### Encoding / Decoding

https://www.url-encode-decode.com/ handy site to encode / decode URLs

### Banker's Rounding

math.round(6.5) = 6 while math.round(9.5) = 10. why?

That's called rounding to even (or banker's rounding), which is a valid rounding strategy for minimizing accrued errors in sums (MidpointRounding.ToEven). The theory is that, if you always round a 0.5 number in the same direction, the errors will accrue faster (round-to-even is supposed to minimize that) (a).

Languages that use Bankers' rounding include Intel processors, C#, Python and R, but not Java, C/C++, JavaScript, PHP, Go, Rust or Swift. [Source](https://repo.progsbase.com/repoviewer/no.inductive.idea10.programs/math/0.1.7///BankersRound/#:~:text=Languages%20that%20use%20Bankers'%20rounding,%2C%20Go%2C%20Rust%20or%20Swift.)

### Communication with team

- [MatterMost - open source alt of Slack](https://mattermost.com/)

### Progamming Paradigms (concept or thought pattern):

- [Programming Paradigms](http://people.cs.aau.dk/~normark/prog3-03/html/notes/paradigms_themes-paradigm-overview-section.html)
- [Wikipedia: Comparison of Programming Paradigms](http://en.wikipedia.org/wiki/Comparison_of_programming_paradigms)
- Types:
  - Functional
  - Imperative
  - Logic
  - Object Oriented
  - Procedural
  - Event-Driven
  - Automata
  - Structured
  - Machine Code
  - Symbolic
  - Declarative
  - Parallel

### Terms

- _Bikeshedding_ - wasting time on trivial details at the expense of more important issues. Coined from a situation where the design of a nuclear power plant was taking place, and the discussion for the materials to use for building a bike shed were taking a disproportionate time away from the design of the actual nuclear power plant.

### Advantages of an interpreted language:

- do not need to specify types
- do not need a compiler to translate the code into machine language code.
- platform independent
- smaller executable program size
- dynamic scoping
- source code can be read and copied

### Disadvantages of interpreted languages:

- no static type-checking can make programs less reliable.
- suseptible to code-injection attacks
- slower execution compared to direct native machine code execution
- Source code can be reverse-engineered due to its nature that it can be read and copied. obfuscation can help with this.

### Interpreted vs. Compiled

the ‘mode of execution’ is either interpreted or compiled.

Many languages can be both interpreted and compiled.

Most so-called interpreted languages use an intermediate representation which combines compiling and interpreting. examples include:

- JavaScript
- Python
- Ruby

Interpreted languages:

- Lisp
- Perl
- PHP
- Smalltalk
- R
- PowerShell

Languages that are usally compiled to byte code:

- Java
- .Net Framework
- Python
- Ruby
- Lisp
- Haskell
- Fortran
- Pascal
- Rust
- Go
- F#
- COBOL
- BASIC

**Imperative** programming is about telling your machine how to do something, while **Declarative** programming really is about telling your machine what you would like to happen in order to do something.

### Open-Source Licensing

[Kyle Simpson uses the MIT License exclusively](https://getify.mit-license.org/) for his projects.

### Casing

- Camel casing: first letter first word is lower case, all other first letters capitalized
- Pascal casing: all first letters capitalized
- Hungarian notation: where you prefix a variable name to indicate its kind, or type. e.g. sName, iIndex
