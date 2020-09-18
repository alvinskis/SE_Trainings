using System;

namespace PrivateConstructor
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
             * 1.1 We can have more than one private constructor in a single class.
             * 1.2 We can have private and default constructor in a class.
             *     We can't create an instance of a class using Private constructor,
             *     but we can invoke default constructor. Members of a claa will be
             *     accessable using class name itself, because all the members are
             *     static.
             */

            //We can't create an instance of the class when the constructor is private
            //PrivateConstructor privateConstructor = new PrivateConstructor();

            PrivateConstructor privateConstructor = new PrivateConstructor(2, 2);

            Console.WriteLine($"Sum of two numbers: {PrivateConstructor.Sum(4, 6)}");
        }
    }
}
