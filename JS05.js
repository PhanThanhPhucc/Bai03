class TaiKhoanNganHang {
    constructor(initialBalance) {
      this.balance = initialBalance;
    }
  
    NapTien(amount) {
      this.balance += amount;
    }
  
    RutTien(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Số dư không đủ.");
      }
    }
  
    KiemTraSoDu() {
      console.log("Số dư hiện tại: " + this.balance);
    }
  }
  
  // Sử dụng lớp TaiKhoanNganHang
  const myAccount = new TaiKhoanNganHang(1000); // Tạo một tài khoản mới với số dư ban đầu là 1000
  myAccount.NapTien(500); // Gửi thêm 500 vào tài khoản
  myAccount.KiemTraSoDu(); // Kiểm tra số dư
  myAccount.RutTien(200); // Rút 200 từ tài khoản
  myAccount.KiemTraSoDu(); // Kiểm tra số dư lại
