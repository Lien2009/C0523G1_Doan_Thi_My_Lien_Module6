package thuat_toan.demo;

import java.util.*;

public class Student implements Comparable<Student> {
    private int id;
    private int point;
    private String name;
    public Student(String name) {
        this.name = name;
    }

    public Student(int id, int point,String name) {
        this.id = id;
        this.point = point;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public int compareTo(Student student) {
        if(this.getPoint()==student.getPoint()){
            if(this.getName().equals(student.getName())){
                return this.getId() - student.getId();
            }else {
                return this.getName().compareTo(student.getName());
            }
        }
        return this.getPoint() - student.getPoint();
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", point=" + point +
                ", name='" + name + '\'' +
                '}';
    }

//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Student student = (Student) o;
//        return id == student.id && point == student.point && Objects.equals(name, student.name);
//    }

    @Override
    public int hashCode() {
        return Objects.hash(id, point, name);
    }

    public static void main(String[] args) {
//        List<Student> studentList = new ArrayList<>();
//        studentList.add(new Student(1,5,"Thoi"));
//        studentList.add(new Student(2,1,"Lien"));
//        studentList.add(new Student(3,5,"Hanh"));
//        studentList.add(new Student(5,5,"Hanh"));
//        studentList.add(new Student(4,5,"Hanh"));
//        System.out.println(studentList);
//        Collections.sort(studentList);
//        System.out.println(studentList);
        Student s1 = new Student(2,10,"Lien");
        Student s2 = new Student(2,10,"Lien");
        System.out.println(s1 == s2);

        System.out.println(s1.hashCode());
        System.out.println(s2.hashCode());
        List<Student> list1 = new LinkedList<>();
        ArrayList<Student> list = new ArrayList<>();
    }
}