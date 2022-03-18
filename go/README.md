[Home](../) > [Languages](../languages/)

# Go Reference

### Highlights

- Created: 2007
- Created By: Google
  - Robert Griesemar
  - Rob Pike
  - Ken Thompson
- Characteristics: Has concurrecy and parallelism built in. Made by the Google Guys. Very fast, simple and efficient. one motivation for creating it was frustation with the complexity of the C++ language. has garbage collection. productive and readable.

### Summary Description

Created at Google to help solve issues they were encountering when working to provide solutions that scale. At the time, 3 main languages were in use: Python, Java and C/C++. There were limitations which each of them:

- python: easy to use, but slow
- Java: very quick, but an increasingly complex type system
- C/C++: quick as well, but also has a complex type system and slow compile times. (when they were written, memory was a limitation so optimizations were made in the compilers to use as little memory as possible, but the result was slow compile times. Today of course, memory is cheap however).

Also worth noting, when all 3 of these applications were created, multi-threaded apps were rare, so at best - concurrency patterns were patched in to the languages. Working in highly parallel, highly concurrent applications like Google had was more challenging at the time they decided to build a new language.

Go characteristics:

- Strong and statically typed
- Excellent Community
- Simplicity is core to the language. Decisions are made to leave some features out if they would add significant complexity
- Fast compile times
- Garbage Collection
- Built-in concurrency
- Compiles to standalone binaries. All Go dependencies are contained in the binary.

Note on the language name: While the name is Go, golang is used often as golang helps to create more useful search results on the web.

### Reference Links

- [FreeCodeCamp.org - Learn Go Programming 6hr 40 min](https://www.youtube.com/watch?v=YS4e4q9oBaU)
- [Official Website: Go.dev](https://go.dev/)
  - [Getting Started](https://go.dev/learn/)
    - [Tour of Go](https://go.dev/tour/welcome/1)
    - [Documentation](https://go.dev/doc/)
    - [Playground](https://go.dev/play/)
    - [Packages](https://pkg.go.dev/)
    - [Blog](https://go.dev/blog/)
- [Golang Bridge Community](https://forum.golangbridge.org/)

**Other Links**

- [Go by Example](https://gobyexample.com/)
- [My 5 favourite features of Go and how to use them](https://making.pusher.com/my-5-favourite-features-of-go-and-how-to-use-them/)
- [Comparing Exilir and Go](https://www.cloudbees.com/blog/comparing-elixir-go)
- [Callicoder Github - Golang Tutorials with simple examples](https://github.com/callicoder/golang-tutorials). Good resource created by Rajeev Singh
- [YT 34min Build a Rest API with GoLang](https://www.youtube.com/watch?v=d_L64KT3SFM)
- [Three Dots Labs](https://threedots.tech/)
- [YT 3:48hr Workshop: Practical Go - GoSG Meetup by Dave Cheney](https://www.youtube.com/watch?v=gi7t6Pl9rxE)
- [Dave Cheney - Practical Go](https://dave.cheney.net/practical-go)
- [Effective Go](https://go.dev/doc/effective_go)
- [Organizing Go Code](https://go.dev/blog/organizing-go-code)
- [Go Proverbs](https://go-proverbs.github.io/)
- [Go Code Review Comments](https://gist.github.com/adamveld12/c0d9f0d5f0e1fba1e551)
- [SOLID Go Design](https://dave.cheney.net/2016/08/20/solid-go-design)
- [reddit r/golang](https://www.reddit.com/r/golang/)

**Go Version 1.18 New Features (March 15, 2022 Release)**

- [Blog Article Announcing 1.18 Release](https://go.dev/blog/go1.18)
- Generics! [Generics in Go Tutorial](https://go.dev/doc/tutorial/generics)
- Fuzzing [Fuzzing in Go Tutorial](https://go.dev/doc/tutorial/fuzz)
- Workspaces - allowing you to work across multiple modules [Getting Started with Workspaces in Go](https://go.dev/doc/tutorial/workspaces)

### Your First Go Program

`go run hello.go`

### Useful Packages

- [Gin](https://github.com/gin-gonic/gin): Framework for writing microservices
- [Mock](https://github.com/golang/mock): Auto generate mocks from interfaces for unit testing
- [testify#suite-package](https://github.com/stretchr/testify#suite-package): package for a clear separation of setup and teardown during tests and the Require() to fail fast the test at the point of error
- [zerolog](https://github.com/rs/zerolog): provides a fast and simple logger dedicated to JSON output.
- [errgroup](https://pkg.go.dev/golang.org/x/sync/errgroup): provides synchronization, error propagation, and Context cancelation for groups of goroutines working on subtasks of a common task.

### Testing in Go

Create a go file using `_test.go` as the suffix for the filename for the file you are testing against.

import the `testing` package:

```go
import (
	"testing"
)
```

example test method(testing a method named Calculate):

```go
func TestCalculate(t *testing.T) {
	if Calculate(2) != 4 {
		t.Error("Expected 2 + 2 to equal 4")
	}
}
```

to run tests: `go test`

to run tests with verbosity: `go test -v` example results:

```
=== RUN   TestCalculate
--- PASS: TestCalculate (0.00s)
=== RUN   TestTableCalculate
--- PASS: TestTableCalculate (0.00s)
PASS
ok      example/go-p1   0.120s
```

### Go Routines
