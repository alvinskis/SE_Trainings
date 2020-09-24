using System;
using System.Collections.Generic;
using System.Text;

namespace DesignPatterns.CommandPattern
{
    class Options
    {
        private ICommand _increaseCommand;
        private ICommand _decreaseCommand;

        public Options(ICommand increase, ICommand decrease)
        {
            _increaseCommand = increase;
            _decreaseCommand = decrease;
        }

        public void IncreasePrice()
        {
            _increaseCommand.Execute();
        }

        public void DecreasePrice()
        {
            _decreaseCommand.Execute();
        }
    }
}
