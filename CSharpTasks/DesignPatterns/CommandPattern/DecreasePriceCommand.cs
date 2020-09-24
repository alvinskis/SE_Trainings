using System;
using System.Collections.Generic;
using System.Text;

namespace DesignPatterns.CommandPattern
{
    class DecreasePriceCommand : ICommand
    {
        private Product _product;
        public int AmountToDecrease { get; set; }
        public DecreasePriceCommand(Product product, int amount)
        {
            _product = product;
            AmountToDecrease = amount;
        }
        public void Execute()
        {
            _product.DecreasePrice(AmountToDecrease);
        }
    }
}
