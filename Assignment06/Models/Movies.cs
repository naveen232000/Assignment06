using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography.X509Certificates;

namespace Assignment06.Models
{
    [Table("Movies")]
    public class Movies
    {
        [Key]
        public int Movie_Id { get; set; }
        public string Movie_Name { get; set;}
        public string StarCast {  get; set;}
        public string Director { get; set;}
        public string Producer { get; set;}
        public DateTime ReleaseDate { get; set;}
        
    }
}
