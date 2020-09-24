using DesignPatterns.CommandPattern;
using DesignPatterns.ObserverPattern;
using System;

namespace DesignPatterns
{
    class Program
    {
        static void Main(string[] args)
        {
            //Singleton Design Pattern
            Console.WriteLine("Singleton Design Pattern:\n");

            Singleton firstMessage = Singleton.GetInstance();
            Singleton secondMessage = Singleton.GetInstance();

            firstMessage.PrintMessage("First Message");
            secondMessage.PrintMessage("Second Message");

            //Command Design Pattern
            Console.WriteLine("\nCommand Design Pattern:\n");
            Product product = new Product("OnePlus 7T", 599);
            ICommand increasePrice = new IncreasePriceCommand(product, 54);
            ICommand decreasePrice = new DecreasePriceCommand(product, 80);
            Options options = new Options(increasePrice, decreasePrice);
            options.IncreasePrice();
            options.DecreasePrice();

            //Observer Pattern
            Console.WriteLine("\nObserver Design Pattern:\n");
            Subject onePlus = new Subject("OnePlus 7T", 599, "Not Available");
            Subject iphone = new Subject("IPhone 11", 850, "Available");
            Observer subscriber1 = new Observer("Modestas", onePlus);
            Observer subscriber2 = new Observer("John", iphone);

            Console.WriteLine($"OnePlus status: {onePlus.getAvailability()}");
            Console.WriteLine($"Iphone status: {iphone.getAvailability()}");

            onePlus.setAvailability("Available");
            iphone.setAvailability("Not Available");
        }
    }
}
