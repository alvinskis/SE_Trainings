using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;

namespace LINQtoXML
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("########## Reading XML File ##########\n");

            XDocument xDocument = XDocument.Load(@"Employees.xml");

            IEnumerable<XElement> employees = xDocument.Elements();

            foreach (XElement employee in employees)
            {
                Console.WriteLine(employee);
            }

            Console.WriteLine("########## Listing Employees Id | Names ##########\n");

            XElement xElement = XElement.Load(@"Employees.xml");

            IEnumerable<XElement> employeesElements = xElement.Elements();

            foreach (XElement employeeElement in employeesElements)
            {
                Console.WriteLine($"Id: {employeeElement.Element("Id").Value} | Name: {employeeElement.Element("Name").Value}");
            }

            Console.WriteLine("\n########## Listing All Employees Whose Salary > 2000 ##########\n");

            var salary = from element in xElement.Elements("Employee")
                         where (int)element.Element("Salary") > 2000
                         select element;

            foreach (XElement employeeSalary in salary)
            {
                Console.WriteLine($"Id: {employeeSalary.Element("Id").Value} | Name: {employeeSalary.Element("Name").Value} | Salary: {employeeSalary.Element("Salary").Value}");
            }
        }
    }
}
