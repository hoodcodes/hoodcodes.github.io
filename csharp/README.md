[Home](../) > [Languages](../languages/)

<p align="center">
  <img src="assets/logo.png" alt="c#" width="100"/>
</p>

# C Sharp Reference

### Highlights

- Created:
- Created By:
- Characteristics:

### Summary Description

### Versions

- [Version 1 (.Net Framework 1.0)](version1.md)
- [Version 2 (.Net Framework 2.0)](version2.md)
- [Version 3 (.Net Framework 3.0/3.5)](version3.md)
- [Version 4 (.Net Framework 4)](version4.md)
- [Version 5 (.Net Framework 4.5)](version5.md)
- [Version 6 (.Net Framework 4.6)](version6.md)
- [Version 7 (.Net Core 2)](version7.md)
- [Version 8 (.Net Core 3)](version8.md)
- [Version 9 (.Net 5)](version9.md)
- [Version 10 (.Net 6)](version10.md)

### The .Net Framework Evolution

- .NET Framework
- .NET Core
- .NET Standard
- .NET

### Using `dotnet new` custom templates

At the CLI, run the following to see the list of custom templates available with the `dotnet new` command:

```sh
dotnet new --list
```

Interesting side note: You can create your own templates as well.

#### Reference Links for dotnet custom templates

- [.Net Default Templates](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new-sdk-templates)
- [Custom Templates for dotnet new](https://docs.microsoft.com/en-us/dotnet/core/tools/custom-templates)
- [Create a WedApi with dotnet custom template](https://dotnettutorials.net/lesson/creating-asp-net-core-web-api-project-using-net-core-cli/)

You can create practically any type of project using the default templates for .Net.

### Creating a WebApi in C# Steps

1. run `dotnet new webapi <projectName>`
2. run `cd <projectName>`
3. Add a gitignore by running `dotnet new gitignore`
4. run `dotnet build`
5. run `dotnet run`
6. In a browser, navigate to the URL suggested and append `/swagger` to the end. Example:
   1. ` https://localhost:7212/swagger`
   2. Click `Try it out` button. Then copy the `Request URL` and paste it into Postman on a new GET request and click `Send`.
   3. You should receive a `200` Response with JSON data in the Body

run `Ctrl+C` in the Terminal to shut down the webapi.

### Reference Links

- [ZetCode - Jan Bodnar - fantastic reference site (with tutorials as well) for C#, Go, Java, JavaScript, Python, heck all the things...](https://zetcode.com/)

### Random Nuggets

- [Proper way to re-throw exception](https://stackoverflow.com/questions/178456/what-is-the-proper-way-to-rethrow-an-exception-in-c)
- [C# Jagged Arrays](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/jagged-arrays)
- [Knowing When to Use Override and New Keywords (C# Programming Guide) | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/knowing-when-to-use-override-and-new-keywords)
- Difference between WCF vs Web API
  - **WCF**
    - uses XML
    - enables use of other protocols for higher performant processes (named pipes, TCP, UDP).
    - one way messaging, msg queues, duplex communications
  - **Web API**
    - uses HTTP
    - provides all HTTP features (request/response headers, caching, versioning, content formats, URI’s)
    - great for providing services to broad range of clients - mobile, tablet, browsers,
