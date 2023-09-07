import java.util.Scanner;

class ATMImprove {
    public static void main(String[] args) {
        ATMController atmController = new ATMController();

        System.out.println("Welcome to ATM Application");
        // Tạo một tài khoản mới và gán giá trị cho nó
        Account acc1 = atmController.newAccount(1, "abc123", 100, "Nguyen Van A");
        ATMView atmView = new ATMView(atmController);
        atmView.Choice("y", acc1);
    }
}

class Account {
    private int accountNo;
    private String password;
    private double amount;
    private String customerName;

    // Constructor
    public Account() {
        accountNo = 0;
        password = "";
        amount = 0;
        customerName = "";
    }

    // Ham set de thay doi gia tri cho thuoc tinh
    public void setAccountNo(int accNo) {
        this.accountNo = accNo;
    }

    // Ham get de lay gia tri cua thuoc tinh
    public int getAccountNo() {
        return this.accountNo;
    }

    public void setPassword(String pass) {
        this.password = pass;
    }

    // Ham get de lay gia tri cua thuoc tinh
    public String getPassword() {
        return this.password;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    // Ham get de lay gia tri cua thuoc tinh
    public double getAmount() {
        return this.amount;
    }

    public void setCustomerName(String custName) {
        this.customerName = custName;
    }

    // Ham get de lay gia tri cua thuoc tinh
    public String getCustomerName() {
        return this.customerName;
    }

    public boolean checkLogin(int accNo, String pass) {
        // Kiem tra login voi tai khoan nay
        return accNo == accountNo && pass.equals(password);
    }

    public boolean withdraw(double amount) {
        // Rut tien khoi tai khoan
        if (amount < this.amount) {
            this.amount -= amount;
            return true;
        } else
            return false;
    }

    public boolean depost(double amount) {
        // Nop tien vao tai khoan
        if (amount > 0) {
            this.amount += amount;
            return true;
        } else
            return false;
    }
}

class ATMController {

    public ATMController() {

    }

    // Ham chuyen tien
    public boolean transfer(Account acc1, Account acc2) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Please enter your amount to transfer:");
        // Doc bien kieu double
        double amount = sc.nextDouble();
        return acc1.withdraw(amount) && acc2.depost(amount);
    }

    // Ham xem so du
    public void viewAccount(Account acc) {
        System.out.println("Account Number: " + acc.getAccountNo());
        System.out.println("Account Name: " + acc.getCustomerName());
        System.out.println("Amount: " + acc.getAmount());
    }

    // Ham rut tien
    public boolean withdraw(Account acc) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Please enter your amount to withdraw:");
        // Doc bien kieu double
        double amount = sc.nextDouble();
        return acc.withdraw(amount);
    }

    // Ham xu ly login
    public boolean login(Account acc) {
        // Yeu cau nguoi dung nhap du lieu
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your account number:");
        // Doc bien kieu Int
        int accNo = sc.nextInt();
        System.out.print("Enter your password:");
        String pass = sc.next();
        // Kiem tra doi chieu tai khoan va mat khau
        return acc.checkLogin(accNo, pass);
    }

    public Account newAccount(int accNo, String pass, double amount, String custName) {
        Account acc = new Account();
        acc.setAccountNo(accNo);
        acc.setPassword(pass);
        acc.setAmount(amount);
        acc.setCustomerName(custName);
        return acc;
    }
}

class ATMView {
    ATMController atmController;

    public ATMView(ATMController atmController) {
        this.atmController = atmController;
    }

    public void Choice(String choice, Account acc1) {
        Scanner sc = new Scanner(System.in);
        while (choice.equalsIgnoreCase("y")) {
            // Khoi tao menu
            System.out.println("Select your action: ");
            System.out.println("1-Login");
            System.out.println("2-View Account information");
            System.out.println("3-Withdraw");
            System.out.println("4-Transfer");

            int action = sc.nextInt();
            switch (action) {
                case 1:
                    // Goi ham login
                    if (this.atmController.login(acc1)) {
                        System.out.println("Login success");
                    } else
                        System.out.println("Login fail");
                    break;
                case 2:
                    // Goi ham xem so du
                    this.atmController.viewAccount(acc1);
                    break;
                case 3:
                    // Goi ham rut tien
                    if (this.atmController.withdraw(acc1)) {
                        System.out.println("Withdraw success");
                    } else
                        System.out.println("Login Fail");
                    break;
                case 4:
                    // Thêm tài khoản thứ 2 để nhận tiền
                    Account acc2 = this.atmController.newAccount(2, "12345", 50, "Tran Van B");
                    // Goi thu tuc chuyển tiền
                    if (this.atmController.transfer(acc1, acc2)) {
                        System.out.println("Transfer success");
                    } else
                        System.out.println("Transfer fail");
                    break;
                default:
                    System.out.println("Invalid operation");
                    break;
            }// End switch... case
            System.out.println("Continue? (Y/N)");
            choice = sc.next();
            System.out.println();

        } // End while
    }
}
