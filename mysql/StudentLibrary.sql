CREATE TABLE Student (
    Stud_No INT  PRIMARY KEY,
    Stud_Name VARCHAR(50)
);

CREATE TABLE Membership(
    Mem_No INT PRIMARY KEY,
    Stud_No INTEGER,
    FOREIGN KEY (Stud_No) references Student(Stud_No)
);

CREATE TABLE Book (
    Book_no INTEGER PRIMARY KEY,
    book_name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
);

CREATE TABLE Iss_rec (
    iss_no INTEGER PRIMARY KEY,
    iss_date DATE NOT NULL,
    Mem_no INTEGER NOT NULL,
    book_no INTEGER NOT NULL,
    FOREIGN KEY (Mem_no) REFERENCES Membership (Mem_no),
    FOREIGN KEY (book_no) REFERENCES Book (Book_no)
);


-- Insert records into the Student table
INSERT INTO Student (Stud_no, Stud_name)
VALUES
    (1, 'John Smith'),
    (2, 'Alice Johnson'),
    (3, 'Michael Brown'),
    (4, 'Emily Davis'),
    (5, 'James Wilson'),
    (6, 'Sarah Lee'),
    (7, 'David Clark'),
    (8, 'Jennifer Martinez'),
    (9, 'Robert Taylor'),
    (10, 'Susan Hall');

-- Insert records into the Membership table
INSERT INTO Membership (Mem_no, Stud_no)
VALUES
    (101, 1),
    (102, 2),
    (103, 3),
    (104, 4),
    (105, 5),
    (106, 6),
    (107, 7),
    (108, 8),
    (109, 9),
    (110, 10);

-- Insert records into the Book table
INSERT INTO Book (Book_no, book_name, author)
VALUES
    (201, 'Introduction to SQL', 'John Doe'),
    (202, 'Python Programming', 'Jane Smith'),
    (203, 'Data Structures and Algorithms', 'David Johnson'),
    (204, 'History of Science', 'Emily Brown'),
    (205, 'Art of Cooking', 'James Wilson'),
    (206, 'Web Development Basics', 'Sarah Lee'),
    (207, 'Mystery Novel', 'David Clark'),
    (208, 'Financial Management', 'Jennifer Martinez'),
    (209, 'World History', 'Robert Taylor'),
    (210, 'Physics: Principles and Applications', 'Susan Hall');

-- Insert records into the Iss_rec table
INSERT INTO Iss_rec (iss_no, iss_date, Mem_no, book_no)
VALUES
    (301, '2023-09-01', 101, 201),
    (302, '2023-09-02', 102, 202),
    (303, '2023-09-03', 103, 203),
    (304, '2023-09-04', 104, 204),
    (305, '2023-09-05', 105, 205),
    (306, '2023-09-06', 106, 206),
    (307, '2023-09-07', 107, 207),
    (308, '2023-09-08', 108, 208),
    (309, '2023-09-09', 109, 209),
    (310, '2023-09-10', 110, 210);
    
    
-- SELECT s.Stud_name,m.Mem_no
-- FROM Student s,Membership m 
-- WHERE m.Stud_no=s.Stud_no;  

-- NOt a good convention(WE shud put the main table to Left of the JOIN clause)
-- SELECT s.Stud_name,m.Mem_no
-- FROM Membership m 
-- JOIN Student s ON m.Stud_no=s.Stud_no;


SELECT i.iss_no,s.Stud_name,b.book_name
FROM Iss_rec i
JOIN Membership m ON i.Mem_no=m.Mem_no
JOIN Student s on m.Stud_no = s.Stud_no
JOIN Book b on i.book_no  = b.book_no
WHERE i.iss_date = '2023-09-01';

-- The below two are quite complex
-- Give a list of books taken by the student with student number 5

SELECT b.book_name FROM Iss_rec i 
JOIN Book b ON i.book_no = b.book_no
WHERE i.Mem_no IN (
  SELECT Mem_no FROM Membership WHERE Stud_no = 5
)

This chat will have the other sql files as well

https://chat.openai.com/c/7b34af67-88f4-436e-b5e0-e596aaf186ee

