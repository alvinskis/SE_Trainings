using System;
using System.Collections.Generic;
using System.Text;

namespace DesignPatterns.ObserverPattern
{
    class Subject : ISubject
    {
        private List<IObserver> observers = new List<IObserver>();
        public string ProductName { get; set; }
        private int _productPrice;
        private string _availability;

        public Subject(string productName, int productPrice, string availability)
        {
            ProductName = productName;
            _productPrice = productPrice;
            _availability = availability;
        }

        public void AddSubscriber(IObserver observer)
        {
            Console.WriteLine($"Subscriber {((Observer)observer).UserName} have been added to subscribers list");
            observers.Add(observer);
        }

        public string getAvailability()
        {
            return _availability;
        }

        public void NotifySubscriber(string availability)
        {
            Console.WriteLine($"New details about the product: {ProductName}\nProduct Price: {_productPrice} \nStatus: {availability}");
            foreach (IObserver observer in observers)
            {
                observer.Update(availability);
            }
        }

        public void setAvailability(string availability)
        {
            _availability = availability;
            Console.WriteLine($"Product {ProductName} status changed to {availability}");
            NotifySubscriber(availability);
        }
    }
}
