using System;
using System.Collections.Generic;

namespace HashSet
{
    class Program
    {
        static void Main(string[] args)
        {
            HashSet<Customer> customerList = new HashSet<Customer>()
            {
                new Customer { Id = 1, Name = "James", Location = "Vilnius"},
                new Customer { Id = 1, Name = "James", Location = "Vilnius"},
                new Customer { Id = 3, Name = "John", Location = "Kaunas"}
            };

            Console.WriteLine("Customer details: \n");
            foreach (var customer in customerList)
            {
                Console.WriteLine($"CustomerId: {customer.Id}");
                Console.WriteLine($"CustomerName: {customer.Name}");
                Console.WriteLine($"Location: {customer.Location}");
                Console.WriteLine("");
            }
            Console.ReadLine();
        }
    }
}
