[Home](../) > [C#](../csharp/)

# C# Version 6 Reference

## Reference Links

- [interpolated strings](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/exploration/interpolated-strings?tutorial-step=1)

## Framework Release:

- .Net Framework 4.6

## Notable News

Many smaller features added in this release with Visual Studio 2015 to make C# programming more productive.

## What's New

- Expression Bodied Methods
- Auto-property initializer
- nameof Expression
- Primary constructor
- Await in catch/finally blocks
- Exception Filter
- String Interpolation
- Null propagator
- Static imports
- Index initializers
- Default values for getter-only properties

## New Feature Examples

### String Interpolation

Example:

```csharp
//string.Format as comparison
var rootUrl = string.Format("{0}://{1}{2}", Request.Url.Scheme, Request.Url.Authority, Url.Content("~"));

//string interpolation:
var rootUrl = $"{Request.Url.Scheme}://{Request.Url.Authority}{Url.Content("~")}";
```

### Null Propigation

```csharp
//this:
if (vendorContactVm.Address.AddressTypeId == 0)
                {

//Becomes This:
 if (contactVm.Address?.AddressTypeId == 0)
                {
```
