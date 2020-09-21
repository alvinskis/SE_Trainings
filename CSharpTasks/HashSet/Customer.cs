using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace HashSet
{
    class Customer : IEquatable<Customer>
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }

        public bool Equals(Customer other)
        {
            return Id.Equals(other.Id);
        }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }
    }
}
