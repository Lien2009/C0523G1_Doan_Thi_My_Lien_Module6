package practice.ex10.repository;


import practice.ex10.model.Product;
import practice.ex10.util.ReadAndWriteChar;

import java.util.ArrayList;
import java.util.List;

public class ProductRepository implements IProductRepository {
    private static final String FILE = "C:\\Users\\mylie\\Desktop\\C0523G1_Doan_Thi_My_Lien_Module6\\sprint2\\untitled\\practice\\ex10\\util\\products.csv";
    @Override
    public List<Product> getAll() {
        List<Product> productList = new ArrayList<>();
        List<String> stringList = ReadAndWriteChar.readCSV(FILE);//đọc ra console 1 list string
        String[] array = null;//tạo mảng để chứa từng string trong list, biến mỗi phần trong string thành phần tử mảng
        for (String string : stringList) {
            array = string.split(",");//biến chuỗi thành mảng
            Product product = new Product(Integer.parseInt(array[0]), array[1], Double.parseDouble(array[2]));//tạo đối tượng có các thuộc tính là phần tử của mảng
            productList.add(product);
        }
        return productList;
    }

    @Override
    public void add(Product product) {
        List<String> stringList = new ArrayList<>();
        stringList.add(product.getInfoToCSV());//add string để ghi ra file csv dạng string
        ReadAndWriteChar.writeCSV(FILE, stringList, true);
    }

}
