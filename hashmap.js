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












         }
       

  














    }





    const hashMap = new HashMap({ loadFactor: 0.5 });













