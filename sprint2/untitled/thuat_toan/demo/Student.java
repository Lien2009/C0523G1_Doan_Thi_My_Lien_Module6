package thuat_toan.demo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Student implements Comparable<Student> {
    private int id;
    private int point;
    private String name;

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

    public static void main(String[] args) {
        List<Student> studentList = new ArrayList<>();
        studentList.add(new Student(1,5,"Thoi"));
        studentList.add(new Student(2,1,"Lien"));
        studentList.add(new Student(3,5,"Hanh"));
        studentList.add(new Student(5,5,"Hanh"));
        studentList.add(new Student(4,5,"Hanh"));
        System.out.println(studentList);
        Collections.sort(studentList);
        System.out.println(studentList);
    }
}