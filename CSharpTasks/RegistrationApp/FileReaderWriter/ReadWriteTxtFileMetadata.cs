using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace RegistrationApp
{
    class ReadWriteTxtFileMetadata
    {
        public static void Metadata()
        {
            var assembly = Assembly.GetExecutingAssembly();

            var type = assembly.GetType("RegistrationApp.ReadWriteTxtFile");

            var methods = type.GetMethods().Where(m=>m.GetCustomAttributes<ReadWriteTxtFileAttribute>().Count() > 0);

            foreach (var method in methods)
            {
                Console.WriteLine($"    Method: {method.Name}\n    Parameters:");
                foreach (var parameters in method.GetParameters())
                {
                    Console.Write($"                {parameters.Name}\n");
                }
            }
        }
    }
}
