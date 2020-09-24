using System;
using System.Collections.Generic;
using System.Text;

namespace DesignPatterns.ObserverPattern
{
    class Observer : IObserver
    {
        public string UserName { get; set; }

        public Observer(string userName, ISubject subject)
        {
            UserName = userName;
            subject.AddSubscriber(this);
        }

        public void Update(string availability)
        {
            Console.WriteLine($"Hello {UserName}, Product Status: {availability}");
        }
    }
}
