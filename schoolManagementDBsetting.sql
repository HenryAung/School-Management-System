parentsstudent_ibfk_1CREATE SCHEMA IF NOT EXISTS schoolmanagement;

CREATE TABLE IF NOT EXISTS schoolmanagement.Parents (
    ParentsID INT PRIMARY KEY AUTO_INCREMENT,
    parent_fname VARCHAR(100),
    parent_lname VARCHAR(100),
    relationship VARCHAR(100), 
    address VARCHAR(255),
    phone_number VARCHAR(15),
    parent_email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS schoolmanagement.Student (
    StudentID INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    gender VARCHAR(10),
    email VARCHAR(100),
    date_of_birth DATE,
    address VARCHAR(255),
    phone_number VARCHAR(15),
    parentsID INT,
    FOREIGN KEY (parentsID) REFERENCES schoolmanagement.Parents(ParentsID)
);


CREATE TABLE IF NOT EXISTS schoolmanagement.Courses (
    CourseID INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    course_code VARCHAR(20) NOT NULL,
    course_description TEXT,
    start_date DATE,
    end_date DATE
);

CREATE TABLE IF NOT EXISTS schoolmanagement.StudentCourses (
    StudentID INT,
    CourseID INT,
    PRIMARY KEY (StudentID, CourseID),
    FOREIGN KEY (StudentID) REFERENCES schoolmanagement.Student(StudentID),
    FOREIGN KEY (CourseID) REFERENCES schoolmanagement.Courses(CourseID)
);

CREATE TABLE IF NOT EXISTS schoolmanagement.Classes (
    ClassID INT PRIMARY KEY AUTO_INCREMENT,
    class_name VARCHAR(50) NOT NULL,
    class_code VARCHAR(20) NOT NULL,
    class_description TEXT
);

CREATE TABLE IF NOT EXISTS schoolmanagement.Subjects (
    SubjectID INT PRIMARY KEY AUTO_INCREMENT,
    subject_name VARCHAR(50) NOT NULL,
    subject_code VARCHAR(20) NOT NULL,
    subject_description TEXT
);

CREATE TABLE IF NOT EXISTS schoolmanagement.Teachers (
    TeacherID INT PRIMARY KEY AUTO_INCREMENT,
    teacher_fname VARCHAR(100) NOT NULL,
    teacher_lname VARCHAR(100) ,
    gender VARCHAR(10),
    email VARCHAR(100),
    date_of_birth DATE,
    address VARCHAR(255),
    phone_number VARCHAR(15)
);

CREATE TABLE IF NOT EXISTS schoolmanagement.StudentSubjects (
    StudentID INT,
    SubjectID INT,
    PRIMARY KEY (StudentID, SubjectID),
    FOREIGN KEY (StudentID) REFERENCES schoolmanagement.Student(StudentID),
    FOREIGN KEY (SubjectID) REFERENCES schoolmanagement.Subjects(SubjectID)
);

CREATE TABLE IF NOT EXISTS schoolmanagement.StudentClasses (
    StudentID INT,
    ClassID INT,
    PRIMARY KEY (StudentID, ClassID),
    FOREIGN KEY (StudentID) REFERENCES schoolmanagement.Student(StudentID),
    FOREIGN KEY (ClassID) REFERENCES schoolmanagement.Classes(ClassID)
);

CREATE TABLE IF NOT EXISTS schoolmanagement.SubjectClasses (
    SubjectID INT,
    ClassID INT,
    PRIMARY KEY (SubjectID, ClassID),
    FOREIGN KEY (SubjectID) REFERENCES schoolmanagement.Subjects(SubjectID),
    FOREIGN KEY (ClassID) REFERENCES schoolmanagement.Classes(ClassID)
);

-- Intermediate table for Teacher-Classes relationship
CREATE TABLE IF NOT EXISTS schoolmanagement.TeacherClasses (
    TeacherID INT,
    ClassID INT,
    PRIMARY KEY (TeacherID, ClassID),
    FOREIGN KEY (TeacherID) REFERENCES schoolmanagement.Teachers(TeacherID),
    FOREIGN KEY (ClassID) REFERENCES schoolmanagement.Classes(ClassID)
);

-- Intermediate table for Teacher-Subjects relationship
CREATE TABLE IF NOT EXISTS schoolmanagement.TeacherSubjects (
    TeacherID INT,
    SubjectID INT,
    PRIMARY KEY (TeacherID, SubjectID),
    FOREIGN KEY (TeacherID) REFERENCES schoolmanagement.Teachers(TeacherID),
    FOREIGN KEY (SubjectID) REFERENCES schoolmanagement.Subjects(SubjectID)
);

-- Intermediate table for Teacher-Courses relationship
CREATE TABLE IF NOT EXISTS schoolmanagement.TeacherCourses (
    TeacherID INT,
    CourseID INT,
    PRIMARY KEY (TeacherID, CourseID),
    FOREIGN KEY (TeacherID) REFERENCES schoolmanagement.Teachers(TeacherID),
    FOREIGN KEY (CourseID) REFERENCES schoolmanagement.Courses(CourseID)
);


-- Inserting an example student into the Student table
INSERT INTO schoolmanagement.Student (firstname, lastname, gender, email, date_of_birth, address, phone_number)
VALUES ('John', 'Doe', 'Male', 'john.doe@example.com', '2000-01-01', '123 Main St', '123-456-7890');

-- Inserting an example teacher into the Teachers table
INSERT INTO schoolmanagement.Teachers (teacher_name, teacher_email, teacher_phone)
VALUES ('Mrs. Smith', 'smith.teacher@example.com', '987-654-3210');

SELECT * FROM schoolmanagement.student; 
SELECT * FROM schoolmanagement.teachers


