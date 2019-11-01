using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PRS.Models
{                                                       // Id fk to user
    public partial class Requests
    {
        #region Public Constructors

        public Requests()
        {
            // RequestLines = new HashSet<RequestLines>();
        }

        #endregion Public Constructors

        #region Public Properties

        [Required]
        [StringLength(20)]
        public string DeliveryMode { get; set; }

        [Required]
        [StringLength(80)]
        public string Description { get; set; }

        public int Id { get; set; }

        [Required]
        [StringLength(80)]
        public string Justification { get; set; }

        [StringLength(80)]
        public string RejectionReason { get; set; }

        [Required]
        [StringLength(10)]
        public string Status { get; set; }

        [Column(TypeName = "decimal(11, 2)")]
        public decimal Total { get; set; }

        [ForeignKey("UserId")]
        //[InverseProperty("Requests")]
        public virtual Users User { get; set; }

        public int UserId { get; set; }

        #endregion Public Properties

        //  [InverseProperty("Request")]
        //  public virtual  <RequestLines> RequestLines { get; set; }
    }
}