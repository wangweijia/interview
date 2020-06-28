// 快速排序

class QuickSort {
  // 交换
  static swap(arr, i, j) {
    console.log('swap(arr, i, j)', arr, i, j);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // 返回等于部分的第一个元素的下标和最后一个下标组成的整数数组
  static partition(arr, l, r) {
    console.log('-----3', arr, l, r);

    let left = l;
    let basic = arr[r];
    let less = l - 1;
    let more = r + 1;

    while(left < more) {
      if (arr[left] < basic) {
        less += 1;
        this.swap(arr, less, left)
        left += 1;
      } else if (arr[left] > basic) {
        more -= 1;
        this.swap(arr, more, left);
      } else {
        left += 1;
      }
    }

    return [less + 1, more - 1];
    // const list = [];
    // for (let index = less + 1; index <= more - 1; index++) {
    //   list.push(index);
    // }

    // return list;
  }

  // 入口
  static quickSort(arr) {
    if (arr === null || arr === undefined || arr.length < 2) {
      return
    }
    
    this.quickSort2(arr, 0, arr.length - 1);
  }


  static quickSort2(arr, l, r) {
    console.log('-----2', arr, l, r);
    if (l < r) {
      const randomN = parseInt(Math.random() * (r - l));
      console.log('randomN:', randomN);
      this.swap(arr, randomN + l, r);

      console.log('arr::::', arr);

      const p = this.partition(arr, l, r);
      this.quickSort2(arr. l, p[0]-1);
      this.quickSort2(arr. l, p[1] + 1, r);
    }
  }
}

console.log('-----1');
const list = [2,6,3,8,4,6,1,5,2,9,4,7,5];
QuickSort.quickSort(list);
console.log('-----end');
console.log(list);