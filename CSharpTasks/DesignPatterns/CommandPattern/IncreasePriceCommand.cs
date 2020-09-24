using System;
using System.Collections.Generic;
using System.Text;

namespace DesignPatterns.CommandPattern
{
    class IncreasePriceCommand : ICommand
    {
        private Product _product;
        public int AmountToIncrease { get; set; }

        public IncreasePriceCommand(Product product, int amount)
        {
            _product = product;
            AmountToIncrease = amount;
        }
        public void Execute()
        {
            _product.IncreasePrice(AmountToIncrease);
        }
    }
}
