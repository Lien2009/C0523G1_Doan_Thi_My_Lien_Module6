package thuat_toan.demo;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class CompareStudent implements Comparator<Student> {
    @Override
    public int compare(Student student, Student t1) {
        if(student.getPoint()==t1.getPoint()){
                return student.getId() - t1.getId();
        }
        if(student.getName().equals(t1.getName())){
            return student.getPoint() - t1.getPoint();
        }
        return student.getName().compareTo(t1.getName());
    }

    public static void main(String[] args) {
        List<Student> studentList = new ArrayList<>();
        studentList.add(new Student(1,5,"Thoi"));
        studentList.add(new Student(2,1,"Lien"));
        studentList.add(new Student(3,5,"Hanh"));
        studentList.add(new Student(5,5,"Hanh"));
        studentList.add(new Student(4,5,"Hanh"));
        System.out.println(studentList);
        Collections.sort(studentList,new CompareStudent());
        Collections.sort(studentList,new CompareStudent());
        Collections.sort(studentList,new CompareStudent());
        Collections.sort(studentList,new CompareStudent());
        System.out.println(studentList);
        Collections.sort(studentList);
        Collections.sort(studentList);
        Collections.sort(studentList);


    }
}
