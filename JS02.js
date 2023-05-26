function timGiaTriLonNhat(arr) {
  let max = arr[0]; // Gán max ban đầu bằng phần tử đầu tiên của mảng

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Cập nhật giá trị max nếu tìm thấy phần tử lớn hơn
    }
  }

  return max;
}

console.log(timGiaTriLonNhat([3, 9, 2, 7, 5])); // Output: 9
console.log(timGiaTriLonNhat([-1, -5, -3, -7, -2])); // Output: -1
console.log(timGiaTriLonNhat([10, 20, 30, 40, 50])); // Output: 50
