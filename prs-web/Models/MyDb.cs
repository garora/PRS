using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PRS.Models
{
    public partial class MyDb : DbContext                    /*Name changed from qlPrsContext*/
    {
        public MyDb()                                        /*Name changed from SqlPrsContext*/
        {
        }

        public MyDb(DbContextOptions<MyDb> options)           /*Name changed from SqlPrsContext*/
            : base(options)
        {
        }

        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<RequestLines> RequestLines { get; set; }
        public virtual DbSet<Requests> Requests { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<Vendors> Vendors { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
/*#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.*/
                optionsBuilder.UseSqlServer("Data Source=.\\SQLEXPRESS;Initial Catalog=SqlPrs;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        
         protected override void OnModelCreating(ModelBuilder modelBuilder)
         {
             modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

             modelBuilder.Entity<Products>(entity =>
             {
                 entity.HasIndex(e => e.PartNbr)
                     .HasName("UQ__Products__DAFC0C1ED60E9905")
                     .IsUnique();

                 //entity.HasOne(d => d.Vendor)
                 //    .WithMany(p => p.Products)
                 //    .HasForeignKey(d => d.VendorId)
                 //    .OnDelete(DeleteBehavior.ClientSetNull)
                 //    .HasConstraintName("FK__Products__Vendor__5812160E");
             });

             modelBuilder.Entity<RequestLines>(entity =>
             {
                 entity.Property(e => e.Quantity).HasDefaultValueSql("((1))");

                 //entity.HasOne(d => d.Product)
                 //    .WithMany(p => p.RequestLines)
                 //    .HasForeignKey(d => d.ProductId)
                 //    .OnDelete(DeleteBehavior.ClientSetNull)
                 //    .HasConstraintName("FK__RequestLi__Produ__6477ECF3");

                 //entity.HasOne(d => d.Request)
                 //    .WithMany(p => p.RequestLines)
                 //    .HasForeignKey(d => d.RequestId)
                 //    .OnDelete(DeleteBehavior.ClientSetNull)
                 //    .HasConstraintName("FK__RequestLi__Reque__6383C8BA");
             });

             modelBuilder.Entity<Requests>(entity =>
             {
                 entity.Property(e => e.DeliveryMode).HasDefaultValueSql("('PickUp')");

                 entity.Property(e => e.Status).HasDefaultValueSql("('NEW')");

                 //entity.HasOne(d => d.User)
                 //    .WithMany(p => p.Requests)
                 //    .HasForeignKey(d => d.UserId)
                 //    .OnDelete(DeleteBehavior.ClientSetNull)
                 //    .HasConstraintName("FK__Requests__UserId__60A75C0F");
             });

             modelBuilder.Entity<Users>(entity =>
             {
                 entity.HasIndex(e => e.Username)
                     .HasName("UQ__Users__C9F28456D3EE38D3")
                     .IsUnique();

                 entity.Property(e => e.IsAdmin).HasDefaultValueSql("((1))");

                 entity.Property(e => e.IsReviewer).HasDefaultValueSql("((1))");
             });

             modelBuilder.Entity<Vendors>(entity =>
             {
                 entity.HasIndex(e => e.Code)
                     .HasName("UQ__Vendors__A25C5AA710A62258")
                     .IsUnique();
             });
        }
    }
}
