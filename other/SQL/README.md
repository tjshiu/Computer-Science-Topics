# SQL

__SQL__ is a language for querying the database. It stands for: __Structered Query Language__

The world is full of data. Database helps us store data and helps us add, modify, and querying the data. A popular database is a relational database. __Relational database__ store data in a table. The row stores data about an item, and the columns describe properties about that item. It makes it particularly easy to form relationships within a table. For example we might have a table for people and then we have another table for their things. It's more efficient way of storage instead of having a huge table of everything.


## Example

__Groceries__
| id | name | quantity | aisle |
|---|---|---|---|
| 1 | Bananas | 3 | 1 |
| 2 | Cabbage | 1 | 2 |
| 3 | Cherries | 30 | 1 |
| 4 | Dark Chocolate | 2 | 4 |
| 5 | Ice Cream | 3 | 6 |
| 6 | Milk Chocolate | 1 | 4 |

## Group By and Having

Because we cannot use the where clause with aggregate functions like `count()`, `min()`, `sum()` etc. So having clause came into existence to overcome the problem.

__Group by__ takes a table and summarizes it into another table. For example let's take the example that we have and sort them by aisle.

``` SQL
SELECT aisle, SUM(quantity)
FROM Groceries
GROUP BY aisle
```

| aisle | SUM(quantity) |
|---|---|
| 1 | 33 |
| 2 | 1 |
| 4 | 3 |
| 6 | 3 |

__Having__ is similar to the where clause, but it is only concerned about the grouped clauses. __Having__ only cares about grouped values!

``` SQL
SELECT aisle, SUM(quantity)
FROM Groceries
GROUP BY aisle
HAVING quantity > 10
```

| aisle | SUM(quantity) |
|---|---|
| 1 | 33 |

_What will it look like if we use where instead of having?_

__Where__

``` SQL
SELECT aisle, SUM(quantity)
FROM Groceries
WHERE quantity > 10
GROUP BY aisle
```

| aisle | SUM(quantity) |
|---|---|
| 1 | 30 |

Noticed how it only included the cherries in the 1st aisle when we where using __where__. While the __having__ clause also included bananas because having only in concerned about the groups that are created.
