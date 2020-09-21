using System;
using System.Linq;

namespace LINQ
{
    class Program
    {
        static void Main(string[] args)
        {
            var studentName = Student.GetStudents().Select(name => name.Name);
            var meritName = Student.GetMeritStudent().Select(name => name.Name);

            var notMerit = studentName.Except(meritName);
            Console.WriteLine("Students that are not part of Merit list: \n");
            foreach (var name in notMerit)
            {
                Console.WriteLine($"Student Name: {name}");
            }

            Console.WriteLine("Students Details: \n");

            var studentDetails = from students in Student.GetStudents()
                                 from subjects in students.Subjects
                                 select new { students.Id, students.Name, students.TotalMarks, subjects.SubjectName, subjects.Marks };

            foreach (var student in studentDetails)
            {
                Console.WriteLine($"Id: {student.Id}");
                Console.WriteLine($"Name: {student.Name}");
                Console.WriteLine($"Total Marks: {student.TotalMarks}");
                Console.WriteLine($"Subject Name: {student.SubjectName}");
                Console.WriteLine($"Marks: {student.Marks}");
                Console.WriteLine("");
            }

            Console.WriteLine("Students whose total marks are higher than 265: \n");

            var totalMarks = from students in Student.GetStudents()
                             where students.TotalMarks > 265
                             select new { students.Id, students.Name, students.TotalMarks };

            foreach (var student in totalMarks)
            {
                Console.WriteLine($"Id: {student.Id}");
                Console.WriteLine($"Name: {student.Name}");
                Console.WriteLine($"Total Marks: {student.TotalMarks}");
                Console.WriteLine("");
            }

            Console.WriteLine("Students whose marks in each subject are higher than 80: \n");

            var eachSubject = from students in Student.GetStudents()
                              where students.Subjects.All(marks => marks.Marks > 80)
                              select new { students.Id, students.Name };

            foreach (var student in eachSubject)
            {
                Console.WriteLine($"Id: {student.Id}");
                Console.WriteLine($"Name: {student.Name}");
                Console.WriteLine("");
            }
        }
    }
}
