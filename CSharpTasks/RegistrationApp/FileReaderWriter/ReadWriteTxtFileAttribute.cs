using System;
using System.Collections.Generic;
using System.Text;

namespace RegistrationApp
{
    [AttributeUsage(AttributeTargets.Method)]
    class ReadWriteTxtFileAttribute : Attribute
    {
    }
}
