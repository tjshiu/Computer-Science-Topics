# Protoype

modern JavaScript = __proto__
old JavaScript = "prototype"

```JavaScript
function Dog(name) {
  this.name = name;
}

Dog.prototype.woof = function () {
  console.log(this.name + 'woof')
}
```

* JavaScript uses prototypal inheritance.
