
function selectionSort() {
   for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
      for (var inner = outer + 1; 
           inner <= this.dataStore.length-1; ++inner) {         
         if (this.dataStore[inner] < this.dataStore[outer]) {
            swap(this.dataStore, inner, outer);
         }
      }
   }
}  
