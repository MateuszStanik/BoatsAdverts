using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using UnitOfWork.Abstract;
using Models;

namespace UnitOfWork.Concrete
{
    public class EFDbContext : DbContext, IEFDbContext
    {
        public EFDbContext() : base("name=BoatsAdDb") {
            this.Configuration.LazyLoadingEnabled = false;
        }

        public DbSet<Login> logins{ get; set; }
        public DbSet<User> users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Properties<string>().Configure(x => x.IsUnicode(false));
            base.OnModelCreating(modelBuilder);
        }

    }
}
