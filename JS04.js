<!DOCTYPE html>
<html>
<head>
  <title>Chuyển đổi sự hiển thị</title>
</head>
<body>
  <button onclick="chuyenDoiHienThi()">Chuyển đổi</button>
  <p id="myParagraph" style="display: none;">Đây là một đoạn văn.</p>

  <script>
    function chuyenDoiHienThi() {
      var paragraph = document.getElementById("myParagraph");
      if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
      } else {
        paragraph.style.display = "none";
      }
    }
  </script>
</body>
</html>
