// 快速排序

class QuickSort {
  // 交换
  static swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
  }

  // 返回等于部分的第一个元素的下标和最后一个下标组成的整数数组
  static partition(arr, l, r) {

    let left = l;
    let right = r - 1;

    const base = arr[r];

    while(left < right) {
      let endLeft = false;
      let endRight = false;

      if (arr[left] < base) {
        left += 1;
      } else {
        endLeft = left < right;
      }

      if (arr[right] > base) {
        right -= 1; 
      } else {
        endRight = left < right;
      }

      if (endLeft && endRight) {
        this.swap(arr, left, right);
        endLeft = false;
        endRight = false;
      }
    }

    if (arr[left] < base) {
      this.swap(arr, left + 1, r); 
    } else {
      this.swap(arr, left, r); 
    }
    return left;
  }

  // 入口
  static main(arr) {
    if (arr === null || arr === undefined || arr.length < 2) {
      return
    }
    
    this.quickSort(arr, 0, arr.length - 1);
  }


  static quickSort(arr, l, r) {
    if (l < r) {
      console.log(arr, l, r);

      const randomN = parseInt(Math.random() * (r - l));
      this.swap(arr, randomN + l, r);      
      let p = this.partition(arr, l, r);

      console.log('------------------');
      this.quickSort(arr, l, p);
      this.quickSort(arr, p + 1, r);
    }
  }
}

console.log('-----1');
const list = [2,6,3,8,4,16,1,25,32,9,14,7,5];
QuickSort.main(list);
console.log('-----end');
console.log(list);