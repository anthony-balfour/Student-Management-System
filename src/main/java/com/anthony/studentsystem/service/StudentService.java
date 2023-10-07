package com.anthony.studentsystem.service;

import com.anthony.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    // getting list of students
    public List<Student> getAllStudents();
}
