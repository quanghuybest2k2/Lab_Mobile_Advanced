import java.util.Scanner;

public class Hello {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Nhập tên
        System.out.print("Nhap ten cua ban: ");
        String ten = scanner.nextLine();

        // Nhập tuổi
        System.out.print("Nhap tuoi cua ban: ");
        int tuoi = scanner.nextInt();

        // Bỏ dòng thừa sau khi nhập số
        scanner.nextLine();

        // Nhập giới tính
        System.out.print("Nhap gioi tinh: ");
        String gioiTinh = scanner.nextLine();

        // Nhập số điện thoại
        System.out.print("Nhap so dien thoai: ");
        String dienThoai = scanner.nextLine();

        // In ra thông tin và chào và cám ơn người dùng
        System.out.println("==============Thong tin nguoi dung===========");
        System.out.println("Xin chao " + ten + "!");
        System.out.println("Ban " + gioiTinh + " " + tuoi + " tuoi.");
        System.out.println("So dien thoai cua ban la: " + dienThoai);
        System.out.println("Cam on da cung cap thong tin!");

        // Đóng Scanner
        scanner.close();
    }
}
