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
