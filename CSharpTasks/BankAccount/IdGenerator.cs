using System;
using System.Collections.Generic;
using System.Text;

namespace BankAccount
{
    class IdGenerator
    {
        // use System date to create id for an Account Holder
        static int id = 0;
        string storeId;

        public IdGenerator()
        {

        }
        public string GenerateId()
        {
            string gid = DateTime.Now.ToString("YYYY-MM");
            storeId = gid + ++id;
            return storeId;
        }
    }
}
