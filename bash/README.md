[Home](../)

# Understanding Bash Shell

<p align="center">
  <img src="assets/logo.png" alt="c#" width="100"/>
</p>

## Highlights

- Created:
- Created By: Brian Fox
- Characteristics:

### Summary Description

### Reference Links

- [Bash online manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#What-is-Bash_003f)
- [Bash Hackers wiki](https://wiki.bash-hackers.org/)
- [LinkedIn Course: Learning Bash Scripting](https://www.linkedin.com/learning/learning-bash-scripting)

### Mac Users

you are by default using an outdated version of BASH.

- article: https://itnext.io/upgrading-bash-on-macos-7138bd1066ba (nice article)
- mac default is 3.2.57 (2007)
- because Apple supports GPLv2 (and bash 3.2.57 is last version that supports that). apple does not want to support APLv3.

upgrading to latest version - offers things like programmable completion (that is context specific too).

- my update was to version 5.0.18
- to install: homebrew install bash (if you get warnings about not having permissions follow directions and then run install again)
- location of new bash: /usr/local/bin/bash
- you will have 2 versions on there now - so you need to set the default version to be the new one. (use article above for guidance)

### Shell Script Syntax

There are 2 sets of shell script syntax:

- Bourne - more widely used, and much more flexible
- C - more comfortable for C programmers because it is similar to their language syntax

For the Bourne syntax, there are different dialects available:

- sh
- bash (extension of sh. Bourne Again SHell. )
- zsh
- ksh

If you stay away from the shell-specific features, your code is portable.

TODO: more study of reference for BASH: http://cdwilson.us/articles/bash-shell-startup-files/

### <span style="color:green">Bash Shell Startup Files on Mac</span>

- [Mac Bash Shell Scripts Primer](https://developer.apple.com/library/archive/documentation/OpenSource/Conceptual/ShellScripting/shell_scripts/shell_scripts.html#//apple_ref/doc/uid/TP40004268-CH237-SW3)

### <span style="color:#8f30e3">Bash Shell Startup Files on Windows</span>

### Writing your first bash script

You will need to set your file with the correct permissions prior to running it. For the example hello.sh script, I ran the following:

```Bash
chmod u+x ./hello.sh
```

Then, being in the same directory in the terminal, I could run the command to execute the script:

```Bash
./hello.sh
```

### Resources to assist in getting up to speed or refresh your knowledge in the art of Bash Scripting

- free month of LinkedIn Learning: get one month of LinkedIn Learning for free! If the link does not work, you could probably google LinkedIn Learning just as easily and be taken to the offer.
- free 10 day trial of Pluralsight: If you haven't signed up before - head over to Pluralsight right now and you can get a 10 day trial free.
- [6 free bash scripting courses article](https://medium.com/javarevisited/6-free-courses-to-learn-bash-shell-scripting-in-linux-and-unix-a50461ecd4fe)
- [LinkedIn Course - Learning Bash Scripting](https://www.linkedin.com/learning/learning-bash-scripting/welcome?u=75159394)

### Man Pages of Interest

| command  | for  | description                                                                                                                                                               |
| -------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| man bash | bash | the manual for Bash. Also available here: [Bash Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)                                       |
| man grep | grep | good for searching for text and patterns. Think regular expressions. More good info here: [Beginner's Guide to Grep Basics](manipulate those dates. online man page here) |
| man awk  | awk  | awk is good for text processing. More good info here: [30 Examples for Awk Command in Text Processing](https://likegeeks.com/awk-command/)                                |
| man sed  | sed  | SED is a streaming editor. More good info here: [SED Streaming Editor](https://www.gnu.org/software/sed/manual/sed.html)                                                  |
| man date | date | manipulate those dates. online man page here: [Manipulate those Dates](https://ss64.com/bash/date.html)                                                                   |

###
