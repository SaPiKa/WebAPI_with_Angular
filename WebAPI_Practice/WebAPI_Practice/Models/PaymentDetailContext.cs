using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_Practice.Models
{
    public class PaymentDetailContext: IdentityDbContext<ApplicationUser>
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options):base(options)
        {

        }
        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
