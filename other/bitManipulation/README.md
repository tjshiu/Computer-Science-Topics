# Bit Manipulation

## base 2:

Binary (base- 2)

| Number | negative | 2^6 <br> =64| 2^5 <br> =32| 2^4 <br> =16| 2^3 <br> =8| 2^2 <br> =4| 2^1 <br> =2| 2^0 <br> =1|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| __0__ | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| __1__ | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| __2__ | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| __3__ | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |
| __4__ | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |
| __5__ | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 |
| __6__ | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 |
| __7__ | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| __8__ | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| __9__ | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 |
| __10__ | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| __57__ | 0 | 0 | 1 | 1 | 1 | 0 | 0 | 1 |

## Two's Complement (Negative)

The very first bit show's if it's positive or negative.

| Number | negative | 2^6 <br> =64| 2^5 <br> =32| 2^4 <br> =16| 2^3 <br> =8| 2^2 <br> =4| 2^1 <br> =2| 2^0 <br> =1|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| __18__ | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| __-18__ | 1 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |

## Shifting

Notice how the shifting of positive numbers effected the number.
Left shift will multiply the number by two. The right shift will divide the number by two and floor it.

|Shift | Number | negative | 2^6 <br> =64| 2^5 <br> =32| 2^4 <br> =16| 2^3 <br> =8| 2^2 <br> =4| 2^1 <br> =2| 2^0 <br> =1|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|Left Shift| __46__ | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 1 |
|No Shift| __23__ | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 |
|Right Shift| __11__ | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 1 |

But what about __negative numbers__?
There are two shifts. Logical and arithmetic right shift. The __Logical__ right shift will shift everything to the right and will fill the beginning with a zero to make it positive. Whereas the __Arithmetic__ right shift will fill the number with the negative value and shift all values to the right.

|Shift | Number | negative | 2^6 <br> =64| 2^5 <br> =32| 2^4 <br> =16| 2^3 <br> =8| 2^2 <br> =4| 2^1 <br> =2| 2^0 <br> =1|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|No Shift| __-23__ | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 0 |
|Logical (Right Shift)| __116__ | 0 |  1 | 1 | 1 | 0 | 1 | 0 | 0 |
|Arithmetic (Right Shift)| __-12__ | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 |

### Shift operators
a << b
a >> b

## bit-wise operators
& (and)
| (or)
~ (not)
^ (exclusive-or, xor)

### AND
0 & 0 => 0
0 & 1 => 0
1 & 1 => 1

### OR
0 | 0 => 0
0 | 1 => 1
1 | 1 => 1

### NOT
~0 => -1
~1 => -2

### XOR
0 ^ 0 => 0
0 ^ 1 => 1
1 ^ 1 => 0
