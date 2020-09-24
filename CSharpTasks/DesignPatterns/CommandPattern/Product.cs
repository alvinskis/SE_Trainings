using System;
using System.Collections.Generic;
using System.Text;

namespace DesignPatterns.CommandPattern
{
    //Receiver Object. It contains the business logic to perform the real actions.
    class Product
    {
        public string ProductName { get; set; }
        public int ProductPrice { get; set; }
        public Product(string productName, int productPrice)
        {
            ProductName = productName;
            ProductPrice = productPrice;
        }

        public void IncreasePrice(int amount)
        {
            ProductPrice += amount;
            Console.WriteLine($"Product Name: {ProductName} | Has Increased By: {amount} Eur. | Current Price {ProductPrice}");
        }

        public void DecreasePrice(int amount)
        {
            ProductPrice -= amount;
            Console.WriteLine($"Product Name: {ProductName} | Has Decreased By: {amount} Eur. | Current Price {ProductPrice}");
        }
    }
}
