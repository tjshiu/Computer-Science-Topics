# Rails Overview

## Database
### Relational Model and Relational Database Management System
- Model data in the form of relations or tables. Relational model represents how data is stored in Relational Databases. A relational database stores data in the form of relations (tables). Consider a relation STUDENT with different attributes: ID, NAME, MAJOR, AGE. 

__STUDENT__


| ID | NAME | MAJOR | AGE |
|---|---|---|---|
| 1 | William | Accounting |  | 
| 2 | Andie | Spanish | 23 | 
| 3 | Albertine | Biology | 23 | 

__CLASSES__


| ID | NAME | INSTRUCTOR |
|---|---|---|
| 2000 | Language Studies | Routon |
| 3000 | Histology | Jones |
| 2003 | Sociology | Johnson | 

__Enrollment__


| ID | STUDENTID | CLASSID | GRADES | 
|---|---|---|---|
| 10 | 1 | 2000 |
| 11 | 1 | 2003 |
| 12 | 2 | 2000 |
| 13 | 3 | 3000 |

* __Attributes__: properties that define a relation, e.g. NAME, or AGE
* __Relation Schema__: A relation schema represents name of the relation with its attributes, e.g. STUDENT (ID, NAME, MAJOR, AGE) is a relational schema for Student, if a schema has more than 1 relation, it's called Relational Schema. 
* __Tuple__: Each row in the relation is known as a tuple. Above there are 3 tuples (3 rows)
* __Relation Instance__: A tuple at an instance of time. It can be changed when there is an insertion, deletion, or update to the dtabase. 
* __Degree__: The number of attributes in the relation is known as degree of the relation. The STUDENT relation has degree of 4. 
* __Cardinality__: The number of tuples in a relation is known as cardinality. The STUDENT relation has cardinality of 3. 
* __Column__: represents the set of values for a particular attribute. Such as extracting the column major from relation STUDENT. (Accounting, Spanish, Biology)
* __NULL Values__ Value which is not known or unavailable is called NULL value. Represented by blank space. 

There may be constraints on the relational model, such as name cannot be null. 

__RDBMS (Relational Database Managmeent System)__ Helps us access our relational model and the information. There are many different versions such as PostgreSQL and SQLite3. Interactions are similiar for all of them, but what's different is what's going on under the hood. 

__SQLite3__ - When you are limited to how much memory can be stored, SQLite3 is great for space. It is light weight and serverless. It's great for mobile phones. It's not great for production web applications. The entire databse is stored in a file. It can't handle multiple requests. 

__Data Definition Language__ - describes structure of tables and where we build our tables. We can __create__ a table and __drop__ a table. 

__Data Manipulation Language__ - allows us to add/edit/delete data in the table. Such as SELECT, INSERT, UPDATE, DELETE. 

### ORM - Object Relational Mapping

* Object-relational mapping is a technique for storing, retrieving, updating, and deleting from an object-oriented program in a relational database. 


