using ChurchAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;
using ChurchAPI.Controllers;

namespace ChurchApi.Models
{
    public class MemberContext : DbContext
    {
        public MemberContext(DbContextOptions<MemberContext> context)
            : base(context)
        {
        }

        public DbSet<Member> Members { get; set; } = null!;
    }
}