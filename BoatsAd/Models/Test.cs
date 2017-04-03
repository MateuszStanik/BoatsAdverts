using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BoatsAd.Models
{
    public class Test
    {
        [Key]
        public int TestId { get; set; }
        public string Name { get; set; }
    }
}