function filterValuesGreaterThan(array, value) {
    // Mảng mới để lưu trữ kết quả
    let result = [];
  
    // Duyệt qua từng phần tử trong mảng đầu vào
    for (let i = 0; i < array.length; i++) {
      // Kiểm tra nếu phần tử lớn hơn giá trị cho trước
      if (array[i] > value) {
        // Thêm phần tử vào mảng kết quả
        result.push(array[i]);
      }
    }
  
    // Trả về mảng kết quả
    return result;
  }
  
  // Sử dụng hàm với một ví dụ
  var array = [1, 4, 6, 7, -3];
  var value = 5;
  var filteredArray = filterValuesGreaterThan(array, value);
  
  // In kết quả ra console để kiểm tra
  console.log(filteredArray);
  