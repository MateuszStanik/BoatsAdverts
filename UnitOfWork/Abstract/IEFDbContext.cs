
using Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitOfWork.Abstract
{
    public interface IEFDbContext : IDisposable
    {
        DbSet<Login> logins { get; set; }
        DbSet<User> users { get; set; }
    }
}
