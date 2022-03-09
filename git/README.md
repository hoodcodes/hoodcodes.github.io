[Home](../)

# Git Reference

### Learning Resources

- [Atlassian Git](https://www.atlassian.com/git)
- [try.github.io](https://try.github.io/)
- [Udemy - Git Started with Git and GitHub](https://www.udemy.com/course/git-started-with-github/?LSNPUBID=JVFxdTr9V80&ranEAID=JVFxdTr9V80&ranMID=39197&ranSiteID=JVFxdTr9V80-qXTOyPfHdrT7lxnuuHhjIw)
- [Pluralsight: How Git Works](https://www.pluralsight.com/courses/how-git-works)
- [Pluralsight: Git Fundamentals](https://www.pluralsight.com/courses/git-fundamentals?clickid=y9b0UzUbRxyOUJMwUx0Mo34GUkizkS29w35W2E0&irgwc=1&mpid=1193463&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1193463&aid=7010a000001xAKZAA2)

### Highlights

- Created: 2004
- Created By: Linus Torvalds
- Characteristics:

### Summary Description

### My thoughts on Git Guis vs CLI

I choose as my default to use the CLI for performing Git commands. My reasons include:

- you can just use this one interface for all projects.
- learn to do it one way - for all IDEs = Simple
- CLI - always works
- Built-in Git interfaces with IDEs are all calling the CLI under the covers anyway

For authentication (e.g. GitHub) use SSH if possible instead of HTTPS (user/password approach)

- Less hassle, and you do not need to provide credentials when you push up
- You can even have multiple SSH keys for different accounts. The key in this case is that once you have your keys added for each account, to add a local git config setting under 'Core' that looks similar to this: `sshCommand = "ssh -i ~/.ssh/mygithubsshkey"`. I have a section about doing this below.

### Reference Links:

- [Git Official Page](https://git-scm.com/)
- [Interview with Linus Torvalds on Creating Git](https://www.linuxfoundation.org/blog/10-years-of-git-an-interview-with-git-creator-linus-torvalds/)

### Installation

### Setting up ssh certificate

### Usage

#### Cloning a Repo

### Creating a new Repo

### Managing Remotes (listing them, removing, adding, pushing to alternate remotes)

You can have as many remotes as you like. Most often, we only have one remote, and usually we will give that remote a short name of `origin`. In fact, `origin` is implicitly created when we clone a remote locally.

To check the remotes you have existing, run the following:
`git remote`

To get more detail, add the `verbose` parameter:
`git remote -v`

To remove a remote:
`git remote rm <remote-name>`

To add a new remote:
`git add remote <short name> <url to repo>`

So now, you have your main remote repo which uses `origin` as the short name. But you have another repo you want to also be able to push to (e.g. a GitHub page <username>.github.io.git).

For a harmless little test:

- go to your scm(e.g. GitHub), and create a new empty repo, and call it whatever you like.
- Do not add any files, including README, .gitignore, License, etc..
- Grab the URL since you will use it.
- Think of a short name (e.g. `test`) for this additional remote. Remember `origin` is by default already being used by your main repo).
- Now run these commands:
  `git add remote <short name> <url to repo>`

`git push <short name> <local branch name>`

That should publish your repo to this new remote.

whenever you want to publish to your main remote (`origin`) of course, you can continue to use:
`git push origin <local branch name>`

### Track Remote Branch

`git branch -u origin/<remote-branch-name>`

### Creating good commit messages

Set your git config to use a git commit template named .gitmessage:

`git config --global commit.template ~/.gitmessage`

[Template that I like](https://gist.github.com/adeekshith/cd4c95a064977cdc6c50)

[Good Reference for Commit Messages from FreeCodeCamp](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)

### Amend last commit

`git commit --amend -m “my updated commit msg”`

### Create new branch

### list branches

`git branch` to list local branches

`git branch -a` to list local and remote branches

`git branch -r` to list remote branches

### Checkout branch

### Fetching and Pulling

### Stage branch changes

### commit staged changes

Best Practice - is using a commit message template

if you need to do quick commits inline you can use this:

`git commit -m "my commit message"`

### merge branches

You have 2 branches, branch1 and branch2. You want to merge branch1 changes into branch2.

`git checkout branch2`

`git merge branch1`

**Scenario**: You are in your branch working away. You get word someone has puched changes up to master. You need to get resynced up:

1. `git checkout master`
1. `Git pull`
1. `Git checkout branchname`
1. `Git merge master`

Note: if you wanted to set your work at the top of the head, instead of `merge`, use `rebase`

### deleting a branch

`git branch -d local_branch_name`

### deleting commits

**Scenario**: Remove your latest commit, but leave your changes on disk:
`git reset HEAD~` ( short for `git reset HEAD~1` )

### Merge Conflicts

### Patches

### Cherry Picking

### Branching Strategies

### Hooks

### Stashing

Stashing your work is a valuable tool. Especially if you get pulled over to look at something else when you are in the middle of some other work. Fortunately, you can create named stashes and then retrieve them. As many as you want. You can have a list of various work stashed away and easily pull them back up.

to create a named stash:
`git stash push -m "my_stash"`

to list all your stashes:
`git stash list`

to apply a stash and remove it from the stash stack:
`git stash pop stash@{n}`

to apply a stash and keep it in the stash stack:
`git stash apply stash@{n}`

where `n` is the index of the stashed change

#### Reference Links

- [Git Stash Explained with Details](https://www.golinuxcloud.com/git-stash-explained-in-detail-with-examples/)

### Setting up to have multiple ssh keys for multiple GitHub accounts

- <TODO: add ssh key gen details for 2 accounts and then elaborate on example adds below>

Example:

```sh
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
	sshCommand = "ssh -i  ~/.ssh/thecodegarage"
[user]
	name = thecodegarage
	email = email@thecodegarage.com
  	signingkey = thecodegarage

[github]
  user = "thecodegarage"


[remote "origin"]
	url = git@github.com:thecodegarage/tcg-reference.git
	fetch = +refs/heads/*:refs/remotes/origin/*

[branch "main"]
	remote = origin
	merge = refs/heads/main
```

I do not know if this was truly necessary, but I had also made adds to ssh:

```sh
 ssh-add ~/.ssh/thecodegarage
 ssh-add ~/.ssh/hoodcodes
```

and then viewed my listing of the identities:

```sh
 ssh-add -l
```

### Set VSCode as default editor

`git config --global core.editor code`

### Edit Git Config Files

list configs: `git config --list`
global config: `git config --global --edit`
local config(note: local can only be used inside a git repository): `git config --local --edit`

### Add Aliases to speed up your productivity

Edit your global config by adding these handy aliases.

Taken from this article [10 Git Aliases for faster and productive Git Workflow](https://snyk.io/blog/10-git-aliases-for-faster-and-productive-git-workflow/)

```sh
[alias]
	#status
	s = status

	#checkout branch
	co = checkout

	#checkout new branch
	cob = checkout -b

	# list branches
	del = branch -D
	br = branch --format='%(HEAD) %(color:yellow)%(refname:short)%(color:reset) - %(contents:subject) %(color:green)(%(committerdate:relative)) [%(authorname)]' --sort=-committerdate

	#rollback changes - all previous committed changes are uncommitted so you can resume work on them
	undo = reset HEAD~1 --mixed

	#clean all changes.  Resets all staged changes
	res = !git reset --hard

	#push changes to upstream (if you are pushing to the same branch you are in currently)
	done = !git push origin HEAD

	#log that is readable!
	lg = !git log --pretty=format:\"%C(magenta)%h%Creset -%C(red)%d%Creset %s %C(dim green)(%cr) [%an]\" --abbrev-commit -30
```
