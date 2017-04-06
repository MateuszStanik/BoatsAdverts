using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnitOfWork.Abstract;

namespace Services
{
    public class User
    {
        private readonly IEFDbContext db;
         
        public User(IEFDbContext context)
        {
            this.db = context;
        }

    }
}
