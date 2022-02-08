# Git Reference - Tips & Notes

### Highlights

- Created:
- Created By:
- Characteristics:

### Summary Description

### Reference Links:

- [Git Official Page](https://git-scm.com/)

### <span style="color: green">Installation</span>

### <span style="color: green">Setting up ssh certificate</span>

### <span style="color: green">Usage</span>

#### <span style="color: green">Cloning a Repo</span>

### <span style="color: green">Creating a new Repo</span>

### <span style="color: green">Managing Remotes (listing them, removing, adding, pushing to alternate remotes)</span>

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

### <span style="color: green">Track Remote Branch</span>

`git branch -u origin/<remote-branch-name>`

### <span style="color: green">Creating good commit messages</span>

Set your git config to use a git commit template named .gitmessage:

`git config --global commit.template ~/.gitmessage`

[Template that I like](https://gist.github.com/adeekshith/cd4c95a064977cdc6c50)

[Good Reference for Commit Messages from FreeCodeCamp](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)

### <span style="color: green">Create new branch</span>

### <span style="color: green">list branches</span>

### <span style="color: green">Checkout branch</span>

### <span style="color: green">Fetching and Pulling</span>

### <span style="color: green">Stage branch changes</span>

### <span style="color: green">commit staged changes</span>

### <span style="color: green">merge branches</span>

### <span style="color: green">deleting a branch</span>

### <span style="color: green">deleting commits</span>

### <span style="color: green">Merge Conflicts</span>

### <span style="color: green">Patches</span>

### <span style="color: green">Cherry Picking</span>

### <span style="color: green">Branching Strategies</span>

### <span style="color: green">Hooks</span>

### <span style="color: green">Stashing</span>

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
