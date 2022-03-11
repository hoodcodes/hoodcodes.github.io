[Home](../) > [Other](./)

# Managing Programmers by Douglas Crockford

- [YouTube 72min Managing Programmers by Douglas Crockford at Silicon Valley Code Camp](https://www.youtube.com/watch?v=NPlMcUxFOlY)

### My Notes

Managing Programmers
As Douglas Crockford said, which should be like a shot in the arm if we are having a bad day or working thru a difficult problem, we programmers are perhaps ‘the’ most creative of the creative arts. We can type things into existence. (https://youtu.be/3f5PdDjaP3k?t=2m3s ). Managing us is like managing musicians and artists. We are not like the other kids, so you cannot manage us the same way. If you do, you will fail. To understand us - read Dilbert and XKCD comics.

Interesting topic: How do you measure progress in programming? DC points out that there are ineffective metrics out there ( lines of code, introduction of bugs, fixing of bugs). Some of them can be gamed. Effective metrics include: number of actual defects. total remaining effort to completion. But we haven’t a clue how to deduce that, bec/ programming is not manufacturing. we are not creating things in repetition where we measure quality, output. everything is new.

programming is not manufacturing - it is discovery. we don’t know which lines are to written out of the gate. Trial and error. No functional specification survives first contact with reality. Waterfall was replaced by Agile. Funny aspect of Agile is you cannot critique agile which impedes the community from improving upon it. Agile is not perfect. Breaking things down into smaller units of work that you do as a team can hide architectural concerns

DC: Micromanaging programmers does not work. Best way to manage programmers? Directed Anarchy: give them clear requirements, give them authority and autonomy to accomplish it - and get out of their way.

Eventually - code becomes awful more often than not. How do you know who is writing good code? - Reading the source.

Every day - Code Reading. Dailies. an hour a day and you can tell if people know what they are doing. Aim for Readability.

personal thought: how do you ‘undo’ years of indoctrination of the waterfall method?

Natural Enemies of Programmers

Complexity: managing the complexity of the task they are given. software programs are THE most complex things that humans make. KNOWLEDGE is the only thing that helps manage complexity. NOT helpful to manage complexity: looking busy, good attitude, hard work, commitment, passion. CONTINUING EDUCATION should be a priority.

- Argument against investing in education: if they are getting smarter, they won’t be coding as much. so they won’t be as productive. Response: the code they write will be so much better. also - morale will be up. confidence. intangibles that help retain investment in them. new ways to tackle ideas. creating better code out of the gate makes a lower TCO - because 70%+ of $$ is going to be put towards maintenance.

Imperfection: programs must be perfect. in every way for all inputs for all of time. problem is humans have a terrible time creating perfect things. We have no way of know what will happen when programs are not perfect. we can’t read the future and what realities will occur that reveal imperfections and the magnitude of their effects.

Software can change instantly from asset to major liability. without their changing at all even. Things can happen in the world that can cause the programs to crash as an example.

Proof of correctness. mathematical proofs - that did not work. the proofs became more complex than what they were trying to prove. so we have moved to testing.

Testing cannot prove the absense of bugs. Testing can only prove the existence of bugs.

Testing is not all you need. QA organizations have been built up with an adversarial relationship to the programmers. A better approach would be seeking Bug Avoidance. Have teams incentivized to write better quality code.. Software Entomology - study every bug. how do we prevent this from ever happening again. they do this in the failure analysis of airplanes - which leads to much better airplanes.

Time: we get obsessed with performance. we have a time budget.

in computer architecture we have instructions operating at vary levels: Register (very fast), Memory (10-100x slower) , Storage ( 100x slower than memory ), Network ( 1000’s x slower than storage )

Premature Optimization: “majoring in the minors” from the sense that we spend time optimizing things of lesser consequence. programmers may not be understanding what the real performance problems are.

We should be measuring the code, then add the optimization, then measure again. if not an improvement - rip out the code.

Most of the time is spent debugging, not keyboarding

Decision making can really slow down production. Making NO choice is worse than making the wrong choice. we can become paralyzed where there are 2 ways to do something (and the pros and cons of each are known) and the team is divided.  
Scheduling: Development is a process of Discovery, not a process of development. The quality of our estimates become more unreliable to more we are venturing into the unknown.

Sleep. frequent problem for programmers. absence of good sleep severly degrades human performance. send them home if necessary, or create a place where they can sleep at work.

Programmers are being paid to be productive, not look busy.

Mismanagement: Forces that make developers create bad programs.

Urgency - most of the things you do to make development go faster will end up making it go slower. Such as
having managers saying Urgent! Urgent! Urgent! - having alarms constantly going off is very distracting - it is hard to concentrate. software takes time.

- adding staff later in the project, or worse, after project is deemed ‘late’ - which distracts the existing workers, slowing them down.
- cancelling continuing education. stopping the discipline of making your developers smarter.
- trying to manage the project linearly. focusing on intermediate milestones, where developers will work really hard to hit them, and make compromises to do so. Those compromises could set you up for failure later in the project.
- Extend the workday - burning them out, exhausted and making poor code
- Panic Mode. All hands on deck. no one goes home til this is done. Managers love this sometimes from an ego perspective, showing decisiveness. This is one of the clearest signs that management is failing if this shows up. They might ingrain in the developers that this is their own fault and this wouldn’t have happened if they had been doing a better job. Think about that while you can’t go home to your families type of thing. But if a project is properly managed, Panic Mode should never happen.

Starting over can be good if we are covering the same problem -

Good Managers create Protection - running interference. Business does not understand what programmers do so they will ask us to do crazy stupid things.

- give programmers the tools they need
- keep them out of meetings
- keep devs from getting whipped around
- defend the programmers
- make programmers understand you have their back for them
- keep requirements from getting changed on them
- let programmers be the gods that they are bec/ creating things makes them happy.

Business Reality - the big picture

- If It’s stupid, we won’t do it. - Programmers will love it. We have gifts and we don’t want to see them squandered.
- We won’t ship crap. Remember programmers want to move on to something new too, so they are not wanting to stay working on something forever, but it they say it is not ready yet - they know more than managers do about what is going on inside the code so managers should be listening to them. Manager’s argument that we are perfectionists and we’d never release code if left up to programmers perspective about when the code is ready - is not a valid argument.

Sabotage bad stuff gets leaked in or sneaked into the code base.

- may be unintentional -
  - lack of emphasis on quality. later turns into bugs
  - security exploits (continuing education can help this)
- Intentional
  - without malice - although team voted no on an approach bec it was too risky, a programmer might still sneak stuff in to make the project more interesting to them
  - with malice - the worst thing. someone who wants to hack the company from the inside so after he leaves the company he can hack into the system. (code review mediates this)

Themselves

Informed Ignorance - continuing education helps this

What is the ideal Workplace? DC gave his feature list.
