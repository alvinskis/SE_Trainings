using System;
using System.Collections.Generic;
using System.Text;

namespace DesignPatterns.ObserverPattern
{
    interface IObserver
    {
        void Update(string availability);
    }
}
