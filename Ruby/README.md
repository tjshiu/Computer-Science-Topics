# Ruby

## Object Oriented Programming

__Paradigm__ - a typical exampel or pattern of something; a pattern or model. 
__Abstraction__
__Polygot__
__Similarities__
__Differences__
__Primary Example__
__Change__
__Ruby__
__Overview__

Everything is an Object. Encapsulates state and behavior(methods). Objects interact with each other. For example, we send the method "length" to the instance of an array object to return its internal state "length".

Think of data and functionality put together. 
Human has a data and height, eye color, personality, and their function is their ability to eat, sleep, and drink. 

Object oriented program has a class which is a template for the Object and the object will be the instance of the class. 

Object-oriented programming is a programming paradigm that prefers objects rather than actions adn dta rather than functions or logic. Objects typically containd data in fields known as attributes and a set of associated methods that may access and manipulate these attributes. 

Classes cna inherit form other classses, and is like a relationship. A Dog class (child class) can inherit from an Animal class (parent class)

``` Ruby
def BankAccount
    attr_reader :balance

    def initalize
        @balance = 0
    end

    def deposit(amount)
        @balance += amount
    end

    def withdraw(amount)
        @balance -= amount
    end
end
```

Strengths of Object Oriented Programming
* Modeling - great at modeling what we have in real life. We think of the world through concepts and ideas. 
* Reusability - Like hashes, arrays, and the same concepts in objects are easier. 
* Ease of Testing - Testing the object is running correctly and then the seams of the object to see if it is working well. 

``` Ruby
class CashRegister
    attr_reader :drawer

    def initaialize
        @drawer = [2000, 1000, 500, 100, 25, 10, 5, 1]
    end

    def make_change (bill, tnedered)
        difference = tendered - bill
        
        change = []
        i = 0
        denomination = @drawer[i]

        while difference > 0 do 
            if difference < denomination 
                i += 1
                denomination = @drawer[i]
                next
            end

            change << denomination
            difference -= denomination
        end

        change 
    end
end
```

__Functional Programming__ - Built of functions. Functioanl programming input data and output data. Pure Functiaonl programming meaning that they never store state or mutate the incoming data. Output will only depend on the input. It will always return the same thing. Data and procedures, state and behavior are separate. Ruby uses infex notation and 

__Encapsulation__ is a principle of object-oriented design. It dictates that the programmer. 
1. Place all code concerned with a particular set of data in one class
2. Hide methods and data essential only to a class's internal workings. 