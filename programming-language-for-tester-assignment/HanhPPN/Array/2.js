<!DOCTYPE html>
<html>
    <title> 
        Accessing Array Elements
    </title>
    <body>
        <h1>Input an array of five numbers</h1>
        <input type="text" id="arrayInput">
         <button onclick="logThirdElement()">OK</button>
        <script>
            function logThirdElement(){
            let inputArrayString = document.getElementById("arrayInput").value;
            let arrayOutput =inputArrayString[3].spilt( ).map(Number);
            alert('The third Element '+ arrayOutput);}
            function logThirdElement()
        </script>

</body>
</html>
