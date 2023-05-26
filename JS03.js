<!DOCTYPE html>
<html>
<head>
  <title>Thay đổi màu chữ</title>
  <style>
    .red-text {
      color: red;
    }
  </style>
</head>
<body>
  <button onclick="thayDoiMauChu()">Thay đổi màu</button>
  <p id="myParagraph">Đây là một đoạn văn.</p>

  <script>
    function thayDoiMauChu() {
      var paragraph = document.getElementById("myParagraph");
      paragraph.classList.add("red-text");
    }
  </script>
</body>
</html>
