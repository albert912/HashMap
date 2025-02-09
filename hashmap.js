class HashMap {

    constructor() {
      this.buckets = new Array(12);
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
      return hashCode % this.buckets.length;
    }
  
   
    checkIndex(index) {
      if (index < 0 || index >= this.buckets.length) {
        throw new Error("Trying to access index out of bounds");
      }
    }
  
    set(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
          this.buckets[index] = [];
        }
      
      
        for (let i = 0; i < this.buckets[index].length; i++) {
          if (this.buckets[index][i].key === key) {
        
            this.buckets[index][i].value = value;
            return;
          }
        }
      
   
        this.buckets[index].push({ key, value });
      }
      
  
    get(key) {
      const index = this.hash(key);
      this.checkIndex(index); 
      if (this.buckets[index]) {
        for (let i = 0; i < this.buckets[index].length; i++) {
          if (this.buckets[index][i].key === key) {
            return this.buckets[index][i].value;
          }
        }
      }
      return null;
    }
  
    has(key) {
      const index = this.hash(key);
      this.checkIndex(index); 
      if (this.buckets[index]) {
        for (let i = 0; i < this.buckets[index].length; i++) {
          if (this.buckets[index][i].key === key) {
            return true;
          }
        }
      }
      return false;
    }
  
    remove(key) {
      const index = this.hash(key);
      this.checkIndex(index); 
      const bucket = this.buckets[index];
  
      if (!bucket) {
        return false;
      }
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
  
      return false;
    }
  
    length() {
      let count = 0;
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          count += this.buckets[i].length;
        }
      }
      return count;
    }
  
    clear() {
      this.buckets = new Array(16);
    }
  
    keys() {
      let allKeys = [];
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          for (let j = 0; j < this.buckets[i].length; j++) {
            allKeys.push(this.buckets[i][j].key);
          }
        }
      }
      return allKeys;
    }
  
    values() {
      let allValues = [];
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          for (let j = 0; j < this.buckets[i].length; j++) {
            allValues.push(this.buckets[i][j].value);
          }
        }
      }
      return allValues;
    }
  
    entries() {
      let allEntries = [];
      for (let i = 0; i < this.buckets.length; i++) {
        if (this.buckets[i]) {
          for (let j = 0; j < this.buckets[i].length; j++) {
            allEntries.push([this.buckets[i][j].key, this.buckets[i][j].value]);
          }
        }
      }
      return allEntries;
    }
  }
  
  
  const test = new HashMap();
  
  test.set('apple', 'red');
  test.set('banana', 'yellow');
  test.set('carrot', 'orange');
  test.set('dog', 'brown');
  test.set('elephant', 'gray');
  test.set('frog', 'green');
  test.set('grape', 'purple');
  test.set('hat', 'black');
  test.set('ice cream', 'white');
  test.set('jacket', 'blue');
  test.set('kite', 'pink');
  test.set('lion', 'golden');

  test.set('apple', 'yellow');

  test.set('dog', 'white');

  test.set('frog', 'red');

  test.set('moon', 'silver');

  test.set('kite', 'blue');

  test.set('hat', 'green');

  test.set('grape', 'green');



 

  console.log(test.get('ice cream'));

  console.log(test.has('frog'));

  console.log(test.length());

  console.log(test.keys());

  console.log(test.values());

  console.log(test.entries());

  console.log(test.remove('kite'));

  console.log(test.length());

  console.log(test.clear());
  


