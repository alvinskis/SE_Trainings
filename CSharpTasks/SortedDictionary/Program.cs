using System;
using System.Collections.Generic;
using System.Linq;

namespace SortedDictionary
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("########## Creating SortedDictionary ##########");
            //Adding key/value pairs using Add() method
            SortedDictionary<int, string> sortedDictionary = new SortedDictionary<int, string>();

            sortedDictionary.Add(789, "James");
            sortedDictionary.Add(456, "John");
            sortedDictionary.Add(123, "Robert");
            sortedDictionary.Add(987, "Mary");
            sortedDictionary.Add(654, "Patricia");
            sortedDictionary.Add(321, "Jennifer");

            Console.WriteLine("\nUsing Add() Employee List Id | Name:");

            foreach (KeyValuePair<int, string> pair in sortedDictionary)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value}");
            }

            //Adding key/value pairs using Collection Initializer
            SortedDictionary<int, Employee> keyValuePairs = new SortedDictionary<int, Employee>()
            {
                { 789, new Employee { employeeId = 1, employeeName = "James", employeeLastName = "Smith" } },
                { 456, new Employee { employeeId = 2, employeeName = "John", employeeLastName = "Williams" } },
                { 123, new Employee { employeeId = 3, employeeName = "Robert", employeeLastName = "Miller" } },
                { 987, new Employee { employeeId = 4, employeeName = "Mary", employeeLastName = "Williams" } },
                { 654, new Employee { employeeId = 5, employeeName = "Patricia", employeeLastName = "Wilson" } },
                { 321, new Employee { employeeId = 6, employeeName = "Jennifer", employeeLastName = "Johnson" } }
            };

            Console.WriteLine("\nUsing Collection Initializer Employee List Id | Name:");

            foreach (KeyValuePair<int, Employee> pair in keyValuePairs)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value.employeeName}");
            }

            Console.WriteLine("\n########## Checking if the element exist in SortedDictionary by Key/Value ##########");

            Console.WriteLine("\nUsing ContainsKey(TKey) method");
            Console.Write("Is Employee with id 123 exist: ");

            if (sortedDictionary.ContainsKey(123) == true)
            {
                Console.WriteLine($"Employee exists");
            }
            else
            {
                Console.WriteLine("Employee did not exists");
            }

            Console.WriteLine("\nUsing ContainsValue(TValue) method");
            Console.Write("Is Employee with name 'Modestas' exist: ");

            if (sortedDictionary.ContainsValue("Modestas") == true)
            {
                Console.WriteLine("Employee exists");
            }
            else
            {
                Console.WriteLine("Employee did not exists");
            }

            Console.WriteLine("\n########## Removing Elements From SortedDictionary ##########");

            Console.WriteLine("\nUsing Remove(TKey) method:");
            Console.WriteLine("\nFirst Employee list removing Id = 987:");

            sortedDictionary.Remove(987);

            foreach (KeyValuePair<int, string> pair in sortedDictionary)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value}");
            }

            Console.WriteLine("\nSecond Employee list removing Id = 123:");
            keyValuePairs.Remove(123);

            foreach (KeyValuePair<int, Employee> pair in keyValuePairs)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value.employeeName}");
            }

            Console.WriteLine("\nUsing Clear() method:");
            Console.WriteLine("\nFirst Employee list:");

            sortedDictionary.Clear();

            foreach (KeyValuePair<int, string> pair in sortedDictionary)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value}");
            }

            Console.WriteLine("\nSecond Employee list:");
            keyValuePairs.Clear();

            foreach (KeyValuePair<int, Employee> pair in keyValuePairs)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value.employeeName}");
            }
        }
    }
}
