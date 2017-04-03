using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BoatsAd.Models
{
    public class  TextContext : DbContext
    {
        public TextContext() : base("BoatsAdDb") { }
        public DbSet<Test> Tests { get; set; }
    }
}