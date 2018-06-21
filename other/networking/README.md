# Sending Digital information over a Wire

__Copper Wire__
Send a voltage to the end (varies from 0V to 5V with time)
  * Two states(symbols)
      * O volts can be represented at 0
      * 5 volts can be represented as a 1.
  * Symbol rate = bod - symbol per second (1 bod), 10 bod = 10 symbols per second
  * Since we can send numbers, we can use ASCII to represent letters.

__Fiberoptics__
* Blue and Red strand
  * Each has a fiber strand in the middle.
    * There is Cladding on the outside, if you send light, it will be reflect off the walls and come out at the end.
  * Light is on or off. Basic way of on and off keying.

__Radio Waves__
* Wireless Router
  * Have an antenna that is a coil wire, which varies the voltage in the antenna at a high frequency (2.5 GHz)
  * Radiates radio waves, and another device will detect and converse it to a signal.
  * We can shift the phase of the sign and invert it.

# Clock Synchronization and Manchester Coding

Both computers must have a synchronized clock and it must alternate between 0 and 1. We have clocks that transitions from 0 to 1 at a certain rate, we then Cladding know how many 0's we have in a stretch of data. Both sides of the link, MUST have a synchronized clock. A __clock slip__ is missing a bit of information when clocks are not synchronized. The data we are receiving will not make sense during a clock slip.  

__Clock Slip Solutions__
* GPS Antenna - very accurate. Both computers are connected to this clock and then, we know that the clocks are in synch.
  * Disadvantage: Must be on the roof and extra hardware.
* Send a separate single - where we have another link that sends the clock at the same data.
  * Disadvantage: It's important that the clock and data stay aligned. __Clock Phase__ occurs when there is slip. Also, this becomes worse if the lines are really long.
* __Manchester Coding__ Use the same wire, but instead of 5V meaning a 1, we will have the transition from 0V to 5V equal 1. Also, the transition of 5V to 0V to equal 0. There is still a regular interval. There can be a shorter interval. This combines clock and data.  
