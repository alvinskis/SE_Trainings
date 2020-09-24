using System;
using System.Collections.Generic;
using System.Text;

namespace DesignPatterns
{
    class Singleton
    {
        private static int _counter = 0;
        private static Singleton _instance;
        private Singleton()
        {
            _counter++;
            Console.WriteLine($"Number of Instances created: {_counter}");
        }

        public static Singleton GetInstance()
        {
            if (_instance == null)
            {
                _instance = new Singleton();
            }
            return _instance;
        }
        public void PrintMessage(string message)
        {
            Console.WriteLine(message);
        }
    }
}
