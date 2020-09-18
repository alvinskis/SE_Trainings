using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;
using System.Threading;

namespace PrivateConstructor
{
    class PrivateConstructor
    {
        public static int firstNumber;
        public static int secondNumber;
        private PrivateConstructor()
        {
            firstNumber += 5;
            secondNumber += 5;
        }

        public PrivateConstructor(int num1, int num2)
        {
            firstNumber += num1;
            secondNumber += num2;
        }

        public static int Sum(int num1, int num2)
        {
            firstNumber += num1;
            secondNumber += num2;
            return firstNumber + secondNumber;
        }
    }
}
