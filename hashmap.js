class Hashmap() {

constructor() {
 this.buckets = new Array(16);
        }


         hash(key) {
            let hashCode = 0;
               
            const primeNumber = 31;
            for (let i = 0; i < key.length; i++) {
              hashCode = primeNumber * hashCode + key.charCodeAt(i);
            }
         
            return hashCode % this.buckets.length;
          } 
         


          set(key, value) {
            const index = this._hash(key);
            if (!this.buckets[index]) {
              this.buckets[index] = [];
            }
            this.buckets[index].push({ key, value });
          }


          get(key) {
            const index = this._hash(key);
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
            const index = this._hash(key);
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
            const index = this._hash(key);
            const bucket = this.buckets[index]; 
            
            if (!bucket) {
              return false; 
            }
          
            for (let i = 0; i < bucket.length; i++) { 
              if (bucket[i][0] === key) { 
                bucket.splice(i, 1); 
                return true; 
              }
            }
          
            return false; 
          }
          
         

        }









         
       

  














    }





    const hashMap = new HashMap({ loadFactor: 0.5 });













