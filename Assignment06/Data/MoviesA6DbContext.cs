using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Assignment06.Models;

namespace Assignment06.Data
{
    public class MoviesA6DbContext : DbContext
    {
        public MoviesA6DbContext (DbContextOptions<MoviesA6DbContext> options)
            : base(options)
        {
        }

        public DbSet<Assignment06.Models.Movies> Movies { get; set; } = default!;
    }
}
