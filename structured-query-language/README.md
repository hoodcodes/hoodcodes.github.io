[Home](../)

# SQL Reference

- [A Comparison between MySQL vs. MS SQL Server](https://medium.com/@mindfiresolutions.usa/a-comparison-between-mysql-vs-ms-sql-server-58b537e474be)

### Highlights

- Created:
- Created By:
- Characteristics:

### Summary Description

### Reference Links:

- [SQL Antipatterns: Avoiding the Pitfalls of Database Programming](https://pragprog.com/book/bksqla/sql-antipatterns)

### Topics:

### CTE - Common Table Expressions

### Select values in first table that are not in second table

### Table class inheritance and polymorphism -

Notes from when I looked at this subject while solving for a problem.

Say you have a need to store an id and create a relationship. but you are not sure where the Id (FK) will be coming from. could be table a or b or even c.  
https://hashrocket.com/blog/posts/modeling-polymorphic-associations-in-a-relational-database

not sure when i might need to create an Exclusive Belongs To (AKA Exclusive Arc) but there is some thoughts on it. I did not go with this because i did not have a clear need to build it. I considered and modeled something in this realm and then decided it was overkill.

this is what i was fleshing out:

```csharp
create table Engagements(
  id serial primary key,
  <would have more columns here>
  PhoneCall_id integer references PhoneCalls,
  EmailSends_id integer references EmailSends,
  Mailing_id integer references Mailings,

  check(
    (
      (PhoneCall_id is not null)::integer +
      (EmailSends_id is not null)::integer +
      (Mailing_id is not null)::integer
    ) = 1
  )
);

create unique index on Engagements (PhoneCall_id) where PhoneCall_id is not null;
create unique index on Engagements (EmailSends_id) where EmailSends_id is not null;
create unique index on Engagements (Mailing_id) where Mailing_id is not null;
```

again - overkill. i got by with a simple table for each kind of engagement for my problem…..

### PostgreSQL Notes

Use ‘having’ in postgresql for setting conditions on a column that is a count. e.g. only give me records where the count is > 1.
