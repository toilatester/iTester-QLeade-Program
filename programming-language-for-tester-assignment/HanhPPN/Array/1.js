<!DOCTYPE html>
    <html>
    <body>
        <script>
            function reverseArray() {
             let inputArrayString=prompt('Input your array');
            let inputArrayNumber=inputArrayString.split(/[;, ]+/).map(Number); 
        // Split(/[;, ]+/): (1) sử dụng biểu thức chính quy (regex) để chia chuỗi thành mảng các phần tử dựa trên một hoặc nhiều dấu phân cách khác nhau.
        // split(/[;, ]+/).map(Number): (1)+ chuyển chuỗi thành mảng số
    
            let reverseArray=inputArrayNumber.reverse();
            alert('Your reverse array '+ reverseArray);
  
}
            reverseArray()
</script>

</body>
</html>


