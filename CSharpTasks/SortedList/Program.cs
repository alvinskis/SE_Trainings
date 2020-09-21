using System;
using System.Collections;
using System.Linq;

namespace SortedListTask
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("########## Creating SortedList ##########\n");
            Console.WriteLine("Adding key/value pairs using Add() method Id | Name: \n");

            SortedList sortedList1 = new SortedList();

            sortedList1.Add(789, "James");
            sortedList1.Add(456, "John");
            sortedList1.Add(123, "Robert");
            sortedList1.Add(987, "Mary");
            sortedList1.Add(654, "Patricia");
            sortedList1.Add(321, "Jennifer");

            foreach (DictionaryEntry pair in sortedList1)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value}");
            }

            Console.WriteLine("\nAdding key/value pairs using Collection Initializer Name | LastName: \n");

            SortedList sortedList2 = new SortedList()
            {
                { "James", "Smith" },
                { "John", "Williams" },
                { "Robert", "Miller" },
                { "Mary",  "Williams" },
                { "Patricia", "Wilson" },
                { "Jennifer", "Johnson" }
            };

            foreach (DictionaryEntry pair in sortedList2)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value}");
            }

            Console.WriteLine("\n########## Checking if key/value exists in SortedList ##########\n");
            Console.Write("\nUsing Containts() method if Id = 789 exists: ");

            if (sortedList1.Contains(789) == true)
            {
                Console.WriteLine("Exists");
            }
            else
            {
                Console.WriteLine("Not Exists");
            }

            Console.Write("Using ContaintsKey() method if Id = 424 exists: ");

            if (sortedList1.ContainsKey(424) == true)
            {
                Console.WriteLine("Exists");
            }
            else
            {
                Console.WriteLine("Not Exists");
            }

            Console.Write("Using ContaintsValue() method if LastName = 'Williams' exists: ");

            if (sortedList2.ContainsValue("Williams") == true)
            {
                Console.WriteLine("Exists");
            }
            else
            {
                Console.WriteLine("Not Exists");
            }

            Console.WriteLine("\n########## Removing key/value pairs from SortedList ##########\n");
            Console.WriteLine("Remove key/value pair at index 3: \n");

            sortedList1.RemoveAt(3);

            foreach (DictionaryEntry pair in sortedList1)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value}");
            }

            Console.WriteLine("\nRemove key/value pair where key is 987: \n");

            sortedList1.Remove(987);

            foreach (DictionaryEntry pair in sortedList1)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value}");
            }

            Console.WriteLine("\nRemove all key/value pairs from both lists: \n");

            sortedList1.Clear();
            sortedList2.Clear();

            Console.WriteLine("First List: \n");

            foreach (DictionaryEntry pair in sortedList1)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value}");
            }

            Console.WriteLine("Second List: ");

            foreach (DictionaryEntry pair in sortedList2)
            {
                Console.WriteLine($"{pair.Key} | {pair.Value}");
            }
        }
    }
}
