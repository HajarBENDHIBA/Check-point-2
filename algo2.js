
function insertionSort(arr) {
 
    for (i = 1; i < arr.length; i++) {
      current = arr[i]; 
      j = i - 1;
  
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j]; 
        j--;
      }
      
      arr[j + 1] = current;
    }
    return arr;
  }

  const array = [5, 2, 9, 1, 5, 6];
  console.log("Tableau trié:", insertionSort(array));
  