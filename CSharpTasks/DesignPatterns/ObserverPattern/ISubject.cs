using System;
using System.Collections.Generic;
using System.Text;

namespace DesignPatterns.ObserverPattern
{
    interface ISubject
    {
        void AddSubscriber(IObserver observer);
        void NotifySubscriber(string availability);
    }
}
