using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


/// <summary>
/// /
/// </summary>
namespace PRS.Models
{
    public partial class RequestLines
    {
        [Key]
        public int Id { get; set; }
        public int RequestId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }

        [ForeignKey("ProductId")]
     //  [InverseProperty("RequestLines")]
        public virtual Products Product { get; set; }

        
        [ForeignKey("RequestId")]       
        public virtual Requests Request { get; set; }           // V090619p1.1:23


    }
}
