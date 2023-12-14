CREATE SCHEMA IF NOT EXISTS schoolmanagement;

CREATE TABLE IF NOT EXISTS schoolmanagement.Parents (
    ParentsID INT PRIMARY KEY AUTO_INCREMENT,
    parent_fname VARCHAR(100),
    parent_lname VARCHAR(100),
    relationship VARCHAR(100), 
    address VARCHAR(255),
    phone_number VARCHAR(15),
    parent_email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS schoolmanagement.Students (
    StudentID INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    gender VARCHAR(10),
    student_email VARCHAR(100),
    student_password VARCHAR(100),
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
    FOREIGN KEY (StudentID) REFERENCES schoolmanagement.Students(StudentID),
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
    teacher_email VARCHAR(100),
    teacher_password VARCHAR(100), 
    date_of_birth DATE,
    address VARCHAR(255),
    phone_number VARCHAR(15)
);

CREATE TABLE IF NOT EXISTS schoolmanagement.StudentSubjects (
    StudentID INT,
    SubjectID INT,
    PRIMARY KEY (StudentID, SubjectID),
    FOREIGN KEY (StudentID) REFERENCES schoolmanagement.Students(StudentID),
    FOREIGN KEY (SubjectID) REFERENCES schoolmanagement.Subjects(SubjectID)
);

CREATE TABLE IF NOT EXISTS schoolmanagement.StudentClasses (
    StudentID INT,
    ClassID INT,
    PRIMARY KEY (StudentID, ClassID),
    FOREIGN KEY (StudentID) REFERENCES schoolmanagement.Students(StudentID),
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

CREATE TABLE IF NOT EXISTS schoolmanagement.employee (
	emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_firstname VARCHAR(100) NOT NULL,
    emp_lastname VARCHAR(100) ,
    gender VARCHAR(10),
    emp_email VARCHAR(100),
    emp_password VARCHAR(100),
    date_of_birth DATE,
    address VARCHAR(255),
    phone_number VARCHAR(15),
    emp_salary DECIMAL(10, 2),
    hire_date DATE,
    department_id INT
);

CREATE TABLE IF NOT EXISTS schoolmanagement.users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL unique,
    user_password VARCHAR(255) NOT NULL,
    user_role ENUM('student', 'employee', 'teacher') NOT NULL,
    reference_id INT NOT NULL
 
);

-- Inserting data into the Student table

USE schoolmanagement;

-- Inserting data into the Parents table

INSERT INTO schoolmanagement.parents (parent_fname, parent_lname, relationship, address, phone_number, parent_email)
VALUES
  ('Bob', 'Johnson', 'Father', '789 Pine St', '5551234567', 'bob.johnson@example.com'),
  ('Mary', 'Williams', 'Mother', '101 Elm St', '2223334444', 'mary.williams@example.com'),
  ('Daniel', 'Brown', 'Father', '202 Maple St', '9998887777', 'daniel.brown@example.com'),
  ('Olivia', 'Jones', 'Mother', '303 Cedar St', '4445556666', 'olivia.jones@example.com'),
  ('George', 'Anderson', 'Father', '404 Birch St', '7778889999', 'george.anderson@example.com'),
  ('Lucas', 'Smith', 'Father', '505 Cedar St', '1112223333', 'lucas.smith@example.com'),
  ('Ava', 'Garcia', 'Mother', '606 Pine St', '4445556666', 'ava.garcia@example.com'),
  ('Christopher', 'Chen', 'Father', '707 Oak St', '7778889999', 'christopher.chen@example.com'),
  ('Isabella', 'Lopez', 'Mother', '808 Elm St', '9991112222', 'isabella.lopez@example.com'),
  ('William', 'Kim', 'Father', '909 Maple St', '3334445555', 'william.kim@example.com'),
  ('Grace', 'Wang', 'Mother', '101 Pine St', '5556667777', 'grace.wang@example.com'),
  ('Brian', 'Nguyen', 'Father', '202 Elm St', '8889990000', 'brian.nguyen@example.com'),
  ('Priya', 'Patel', 'Mother', '303 Maple St', '1234567890', 'priya.patel@example.com'),
  ('Jason', 'Liu', 'Father', '404 Oak St', '9876543210', 'jason.liu@example.com'),
  ('Ananya', 'Gupta', 'Mother', '505 Cedar St', '1112223333', 'ananya.gupta@example.com'),
  ('David', 'Miller', 'Father', '456 Oak St', '5557890123', 'david.miller@example.com'),
    ('Emma', 'Davis', 'Mother', '789 Pine St', '5554567890', 'emma.davis@example.com'),
    ('Jacob', 'Garcia', 'Father', '101 Maple St', '5552345678', 'jacob.garcia@example.com'),
    ('Sophie', 'Smith', 'Mother', '202 Cedar St', '5558901234', 'sophie.smith@example.com'),
    ('Matthew', 'Brown', 'Father', '303 Birch St', '5555678901', 'matthew.brown@example.com'),
    ('Olivia', 'Taylor', 'Mother', '404 Elm St', '5551234567', 'olivia.taylor@example.com'),
    ('Ethan', 'Jones', 'Father', '505 Pine St', '5557890123', 'ethan.jones@example.com'),
    ('Ava', 'Martinez', 'Mother', '606 Oak St', '5554567890', 'ava.martinez@example.com'),
    ('Noah', 'Wilson', 'Father', '707 Cedar St', '5552345678', 'noah.wilson@example.com'),
    ('Isabella', 'Lee', 'Mother', '808 Maple St', '5558901234', 'isabella.lee@example.com');

INSERT INTO schoolmanagement.students (firstname, lastname, gender, student_email, student_password, date_of_birth, address, phone_number, parentsID)
VALUES
    ('Olivia', 'Johnson', 'Female', 'olivia.johnson@example.com', 'pass123', '2003-04-30', '123 Oak St', '555-123-4567', 5),
    ('Ethan', 'Williams', 'Male', 'ethan.williams@example.com', 'pass456', '2004-07-15', '456 Maple St', '555-987-6543', 6),
    ('Ava', 'Brown', 'Female', 'ava.brown@example.com', 'pass789', '2005-10-22', '789 Elm St', '555-222-3333', 7),
    ('Liam', 'Jones', 'Male', 'liam.jones@example.com', 'passabc', '2006-01-12', '890 Pine St', '555-444-5555', 8),
    ('Sophia', 'Miller', 'Female', 'sophia.miller@example.com', 'passxyz', '2007-03-18', '567 Cedar St', '555-666-7777', 9),
    ('Jackson', 'Davis', 'Male', 'jackson.davis@example.com', 'pass123', '2008-05-05', '678 Birch St', '555-888-9999', 10),
    ('Mia', 'Wilson', 'Female', 'mia.wilson@example.com', 'pass456', '2009-08-12', '789 Oak St', '555-111-2233', 11),
    ('Noah', 'Taylor', 'Male', 'noah.taylor@example.com', 'pass789', '2010-11-20', '890 Maple St', '555-444-5566', 12),
    ('Emma', 'Moore', 'Female', 'emma.moore@example.com', 'passabc', '2011-02-28', '901 Pine St', '555-777-8899', 13),
    ('Aiden', 'Clark', 'Male', 'aiden.clark@example.com', 'passxyz', '2012-06-07', '123 Elm St', '555-999-1122', 14),
    ('Lucas', 'Smith', 'Male', 'lucas.smith@example.com', 'pass123', '2013-09-10', '234 Cedar St', '555-234-5678', 15),
    ('Avery', 'Anderson', 'Female', 'avery.anderson@example.com', 'pass456', '2014-12-05', '345 Oak St', '555-345-6789', 16),
    ('Mason', 'Thompson', 'Male', 'mason.thompson@example.com', 'pass789', '2015-02-20', '456 Maple St', '555-456-7890', 17),
    ('Harper', 'Hernandez', 'Female', 'harper.hernandez@example.com', 'passabc', '2016-04-15', '567 Elm St', '555-567-8901', 18),
    ('Carter', 'Garcia', 'Male', 'carter.garcia@example.com', 'passxyz', '2017-07-22', '678 Pine St', '555-678-9012', 19),
    ('Madison', 'Martinez', 'Female', 'madison.martinez@example.com', 'pass123', '2018-10-30', '789 Cedar St', '555-789-0123', 20),
    ('Elijah', 'Lopez', 'Male', 'elijah.lopez@example.com', 'pass456', '2019-01-12', '890 Oak St', '555-890-1234', 21),
    ('Aria', 'Lee', 'Female', 'aria.lee@example.com', 'pass789', '2020-03-28', '901 Maple St', '555-901-2345', 22),
    ('Grayson', 'Wright', 'Male', 'grayson.wright@example.com', 'passabc', '2021-06-07', '123 Birch St', '555-012-3456', 23),
    ('Luna', 'Nguyen', 'Female', 'luna.nguyen@example.com', 'passxyz', '2022-09-15', '234 Cedar St', '555-123-4567', 24);



-- Inserting data into the Teacher table -- 

INSERT INTO schoolmanagement.teachers (teacher_fname, teacher_lname, gender, teacher_email, teacher_password, date_of_birth, address, phone_number)
VALUES
    ('Jennifer', 'Taylor', 'Female', 'jennifer.taylor@example.com', 'pass123', '1975-04-20', '123 Oak St', '555-234-5678'),
    ('Christopher', 'Hall', 'Male', 'christopher.hall@example.com', 'pass456', '1980-07-15', '456 Pine St', '555-345-6789'),
    ('Rebecca', 'Jones', 'Female', 'rebecca.jones@example.com', 'pass789', '1985-10-22', '567 Elm St', '555-456-7890'),
    ('Gregory', 'Smith', 'Male', 'gregory.smith@example.com', 'passabc', '1990-01-12', '678 Maple St', '555-567-8901'),
    ('Stephanie', 'Clark', 'Female', 'stephanie.clark@example.com', 'passxyz', '1995-03-18', '789 Oak St', '555-678-9012'),
    ('Matthew', 'Davis', 'Male', 'matthew.davis@example.com', 'pass123', '2000-05-05', '890 Cedar St', '555-789-0123'),
    ('Laura', 'Garcia', 'Female', 'laura.garcia@example.com', 'pass456', '2005-08-12', '901 Pine St', '555-890-1234'),
    ('Jonathan', 'Ward', 'Male', 'jonathan.ward@example.com', 'pass789', '2010-11-20', '123 Birch St', '555-901-2345'),
    ('Melissa', 'Nguyen', 'Female', 'melissa.nguyen@example.com', 'passabc', '2015-02-28', '234 Cedar St', '555-012-3456'),
    ('Daniel', 'Lopez', 'Male', 'daniel.lopez@example.com', 'passxyz', '2020-06-07', '345 Oak St', '555-123-4567'),
    ('Caroline', 'Wright', 'Female', 'caroline.wright@example.com', 'pass123', '1982-09-15', '456 Pine St', '555-234-5678'),
    ('Nicholas', 'Anderson', 'Male', 'nicholas.anderson@example.com', 'pass456', '1987-12-05', '567 Elm St', '555-345-6789'),
    ('Julia', 'Martin', 'Female', 'julia.martin@example.com', 'pass789', '1992-02-20', '678 Maple St', '555-456-7890'),
    ('Derek', 'Hernandez', 'Male', 'derek.hernandez@example.com', 'passabc', '1997-04-15', '789 Oak St', '555-567-8901'),
    ('Rachel', 'Kim', 'Female', 'rachel.kim@example.com', 'passxyz', '2002-07-22', '890 Cedar St', '555-678-9012');

-- Insert into the Employee table
INSERT INTO schoolmanagement.employee (emp_firstname, emp_lastname, gender, emp_email, emp_password, date_of_birth, address, phone_number, emp_salary, hire_date, department_id)
VALUES
    ('Ryan', 'Johnson', 'Male', 'ryan.johnson@example.com', 'pass123', '1985-04-20', '123 Oak St', '555-234-5678', 60000.00, '2010-05-15', 1),
    ('Samantha', 'Smith', 'Female', 'samantha.smith@example.com', 'pass456', '1990-07-15', '456 Pine St', '555-345-6789', 70000.00, '2012-08-20', 2),
    ('Brandon', 'Williams', 'Male', 'brandon.williams@example.com', 'pass789', '1995-10-22', '567 Elm St', '555-456-7890', 80000.00, '2015-10-10', 3),
    ('Laura', 'Martinez', 'Female', 'laura.martinez@example.com', 'passabc', '2000-01-12', '678 Maple St', '555-567-8901', 90000.00, '2018-02-28', 4),
    ('Michael', 'Clark', 'Male', 'michael.clark@example.com', 'passxyz', '2005-03-18', '789 Oak St', '555-678-9012', 95000.00, '2020-04-15', 5),
    ('Emma', 'Brown', 'Female', 'emma.brown@example.com', 'pass123', '2010-05-05', '890 Cedar St', '555-789-0123', 100000.00, '2022-06-07', 1),
    ('Nathan', 'Nguyen', 'Male', 'nathan.nguyen@example.com', 'pass456', '2015-08-12', '901 Pine St', '555-890-1234', 85000.00, '2014-09-15', 2),
    ('Abigail', 'Garcia', 'Female', 'abigail.garcia@example.com', 'pass789', '2020-11-20', '123 Birch St', '555-901-2345', 92000.00, '2019-12-05', 3),
    ('Tyler', 'Hernandez', 'Male', 'tyler.hernandez@example.com', 'passabc', '1987-02-28', '234 Cedar St', '555-012-3456', 78000.00, '2016-03-28', 4),
    ('Madison', 'Ward', 'Female', 'madison.ward@example.com', 'passxyz', '1992-06-07', '345 Oak St', '555-123-4567', 88000.00, '2011-08-15', 5),
    ('Ethan', 'Lopez', 'Male', 'ethan.lopez@example.com', 'pass123', '1997-09-15', '456 Pine St', '555-234-5678', 92000.00, '2017-10-22', 1),
    ('Ava', 'Wright', 'Female', 'ava.wright@example.com', 'pass456', '2002-12-05', '567 Elm St', '555-345-6789', 76000.00, '2013-01-12', 2),
    ('Daniel', 'Anderson', 'Male', 'daniel.anderson@example.com', 'pass789', '2007-02-20', '678 Maple St', '555-456-7890', 89000.00, '2019-03-18', 3),
    ('Sophia', 'Davis', 'Female', 'sophia.davis@example.com', 'passabc', '2012-04-15', '789 Oak St', '555-567-8901', 94000.00, '2015-05-05', 4),
    ('Jackson', 'Lee', 'Male', 'jackson.lee@example.com', 'passxyz', '2017-07-22', '890 Cedar St', '555-678-9012', 99000.00, '2021-08-12', 5);


-- joining students, teachers and employee tables as a user table -- 

INSERT INTO users (username, user_password, user_role, reference_id)
SELECT student_email, COALESCE(student_password, 'default_student_password'), 'student', studentID FROM students
UNION
SELECT emp_email, COALESCE(emp_password, 'default_employee_password'), 'employee', emp_id FROM employee
UNION
SELECT teacher_email, COALESCE(teacher_password, 'default_teacher_password'), 'teacher', TeacherID FROM teachers;



