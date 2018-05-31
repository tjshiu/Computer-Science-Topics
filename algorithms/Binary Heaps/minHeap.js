function minHeap() {
  this.content = [];
}

minHeap.prototype = {
  count: this.content.length,
  peak: this.content[0],

  push: function(element) {
    //Add new element to the end of the array
    this.content.push(element);
    this.bubbleUp(this.count - 1);
  },

  pop: function() {
    let result = this.peak;
    let end = this.content.pop();
    if (this.content.length > 0) {
      this.content[0] = end;
      this.bubbleDown(0);
    }

    return result;
  },

  bubbleUp: function(n) {
    let element = this.content[n];
    while (n > 0) {
      let parentN = Math.floor((n - 1) / 2);
      let parent = this.content[parentN];

      if (element >= parent) {
        break;
      }

      this.content[parentN] = element;
      this.content[n] = parent;
      n = parentN;
    }
  },

  bubbleDown: function(n) {
    let length = this.count;
    let element = this.content[n];

    while(true) {
      let leftChildN = 2 * n + 1;
      let rightChildN = 2 * n + 2;
      let swap = null;

      if (leftChild)
    }
  },

};
