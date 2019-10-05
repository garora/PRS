use Master;
go
DROP DATABASE IF EXISTS MPrsSql;
go
CREATE DATABASE MSqlPrs;
go
use MSqlPrs;
go


Create table Users (
	ID 				int				primary key 		identity(1,1),
    UserName 		nvarchar(20) 	not null			unique,
    Password 		nvarchar(10) 	not null,
	FirstName 		nvarchar(20) 	not null,
    LastName 		nvarchar(20) 	not null,
	PhoneNumber 	nvarchar(12) 	not null,
    Email 			nvarchar(75) 	not null,
    IsReviewer 		bit 		default 1 		not null,
    IsAdmin 		bit 		default 1 		not null,
    IsActive 		bit		default 1 		not null,
    DateCreated 	datetime 		default 		current_timestamp 		not null,
    DateUpdated 	datetime 		default 		current_timestamp on update current_timestamp 		not null,
    UpdatedByUser 	int 			default	1		not null,
    /*CONSTRAINT uname UNIQUE (UserName)*/
    );


-- Table #2
Create table vendor (
	ID 				int 			not null 		primary key 			auto_increment,	
	Code 			nvarchar(10) 	not null,
    Name 			nvarchar(255) 	not null,
    Address 		nvarchar(255) 	not null,
    City 			nvarchar(255) 	not null,
    State 			nvarchar(2) 		not null,
    Zip 			nvarchar(5) 		not null,
    PhoneNumber 	nvarchar(12) 	not null,
    Email 			nvarchar(100) 	not null,
    IsPreApproved 	bit		default 1 		not null,
    IsActive 		bit		default 1 		not null,
    DateCreated 	datetime 		default 		current_timestamp 		not null,
    DateUpdated 	datetime 		default 		current_timestamp 		not null,
    UpdatedByUser 	int 			default	1		not null,
    CONSTRAINT vcode UNIQUE (Code)
    );
    
    
    -- table #3
Create table purchaserequest (
	ID					int 				not null 		primary key 			auto_increment,	
	UserID 				int 				not null,
    Description 		nvarchar(100) 		not null,
    Justification 		nvarchar(255)		not null,
    DateNeeded 			date 				not null,
    DeliveryMode 		nvarchar(25) 		not null,
    Status 				nvarchar(20)			not null,
    Total 				decimal(10,2) 		not null,
    SubmittedDate  		datetime 			default current_timestamp 				not null,
    ReasonForRejection 	nvarchar(100),
    IsActive 			bit			default 1 not null,
    DateCreated 		datetime 			default current_timestamp 				not null,
    DateUpdated 		datetime 			default current_timestamp 				not null,
    UpdatedByUser 		int 				default	1								not null,
	FOREIGN KEY (UserID) references user (ID)    
    );
    
    
     -- table #4
Create table product (
	ID 					int 			not null 			primary key 			auto_increment,
    VendorID 			int 			not null,
    PartNumber 			nvarchar(50) 	not null,
	Name 				nvarchar(150) 	not null,
    Price 				decimal(10,2) 	not null,
    Unit 				nvarchar(255),
    PhotoPath 			nvarchar(255),
	IsActive 			bit		default 1 									not null,
    DateCreated 		datetime 		default current_timestamp 					not null,
    DateUpdated 		datetime 		default current_timestamp 					not null,
    UpdatedByUser 		int 			default 1									not null,
    FOREIGN KEY (VendorID) references vendor (ID),
    CONSTRAINT vendor_part UNIQUE (VendorID,PartNumber)
    );  
     
    
     -- table #5
Create table purchaserequestlineitem (
	ID 					int 			not null 			primary key 			auto_increment,
    PurchaseRequestID 	int 			not null,
    ProductID 			int 			not null,
    Quantity 			int 			not null,
	IsActive 			bit		default 1 			not null,
    DateCreated 		datetime 		default current_timestamp 					not null,
    DateUpdated 		datetime 		default current_timestamp 					not null,
    UpdatedByUser 		int 			default 1									not null,
    FOREIGN KEY (ProductID) references product (ID),    
    FOREIGN KEY (PurchaseRequestID) references purchaserequest (ID),
    CONSTRAINT req_pdt UNIQUE (PurchaseRequestID,ProductID)
    );     
   
   
   -- Table #1 user Insert  
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(1, 'adubanowski', '1kelp41', 'Amy', 'Dubanowski', '513-754-3461', 'amy.dubanowski@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(2, 'jsimms', 'Haa!yX', 'Jonah', 'Simms', '513-655-9173', 'jonah.simms@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 6);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(3, 'dfox', '$~!e124', 'Dina', 'Fox', '343-346-9713', 'dina.fox@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 6);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(4, 'gmcneil', '8252$rt', 'Garrett', 'McNeil', '515-645-3146', 'garrett.mcneil@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 3);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(5, 'cthompson', '$H@ppee', 'Cheyenne', 'Thompson', '643-357-9146', 'cheyenne.thompson@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(6, 'gsturgis', '34724t', 'Glenn', 'Sturgis', '937-363-5828', 'glenn.sturgis@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 3);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(7, 'bthompson', '$~1294', 'Bilbo', 'Thompson', '643-919-6431', 'bilbo.thompson@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 3);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(8, 'maquinoliwanag', '3142po$@!', 'Mateo Fernando', 'Aquino Liwanag', '515-645-3146', 'mateo.aquinoliwanag@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 3);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(9, 'skaluiokalani', 'Iluvrry@', 'Sandra', 'Kaluiokalani', '342-645-7984', 'sandra.kaluiokalani@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 3);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(10, 'tstaskiewicz', 'rIfarm@', 'Tate', 'Staskiewicz', '937-171-3491', 'tate.staskiewicz@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(11, 'mvartanian', 'Wise$$@', 'Myrtle', 'Vartanian', '364-645-1793', 'myrtle.vartanian@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 6);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(12, 'mwhite', '36et!lk', 'Marcus', 'White', '313-695-4613', 'marcus.white@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 6);
Insert User (ID, UserName, Password, FirstName, LastName, PhoneNumber, Email, IsReviewer, IsAdmin, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(13, 'skazlauskas', '3melis42', 'Sal', 'Kazlauskas', '656-252-3175', 'sal.kazlauskas@Cloud9.com', DEFAULT, DEFAULT, DEFAULT, DEFAULT, DEFAULT, 1);

 -- Table #2 vendor Insert
Insert vendor (ID, Code, Name, Address, City, State, Zip, PhoneNumber, Email, IsPreApproved, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(1, 'V1', 'Staples', '342 Happy Valley Rd.', 'Mason', 'OH', '413', '512-313-1596', 'order@staples.com', default, default, default, default, 3);
Insert vendor (ID, Code, Name, Address, City, State, Zip, PhoneNumber, Email, IsPreApproved, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(2, 'V2', 'Joes Pencil Shop', '354162 Commerce Way', 'Liberty', 'MI', '31546', '525-645-9696', 'joe@joespencilshop.com', default, default, default, default,  3);
Insert vendor (ID, Code, Name, Address, City, State, Zip, PhoneNumber, Email, IsPreApproved, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(3, 'V3', ' Office Mart', '32654 Pete Rose Way', 'Cincinnati', 'OH', '413', '513-896-3032', 'placeorder@officemart.com', default, default, default, default, 3);
Insert vendor (ID, Code, Name, Address, City, State, Zip, PhoneNumber, Email, IsPreApproved, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(4, 'V4', 'Furniture Frenzy', '23 Frenzy st.', 'Woohoo', 'PA', '63652', '313-969-5641', 'jlawson@furniturefrenzy.com', default, default, default, default, 1);
Insert vendor (ID, Code, Name, Address, City, State, Zip, PhoneNumber, Email, IsPreApproved, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(5, 'V5', 'Ur Snow Removal', '252 Sunny Acre Rd.', 'Simmons', 'IN', '52546', '545-943-8246', 'butch@Ursnowremoval.com', default, default, default, default, 1);
Insert vendor (ID, Code, Name, Address, City, State, Zip, PhoneNumber, Email, IsPreApproved, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(6, 'V6', 'Office Depot', '32654 Pete Rose Way', 'Cincinnati', 'OH', '413', '513-896-3032', 'placeorder@officemart.com', default, default, default, default, 6);
Insert vendor (ID, Code, Name, Address, City, State, Zip, PhoneNumber, Email, IsPreApproved, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(7, 'V7', 'Cute Creations', '32 Winding Rd.', 'Dragons Pitt', 'IN', '36412', '656-225-3353', 'bunny@cutecreations.com', default, default, default, default, 1);
 

-- Table #4 product Insert
Insert product (ID, VendorID, PartNumber, Name, Price, Unit, PhotoPath, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(1, 6, 'P101', 'Earphones', 5.99, '12', null, default, default, default, 1);
Insert product (ID, VendorID, PartNumber, Name, Price, Unit, PhotoPath, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(2, 1, 'P102', 'No. 2 Pencil', 1.00, '8', null, default, default, default, 1);
Insert product (ID, VendorID, PartNumber, Name, Price, Unit, PhotoPath, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(3, 7, 'P103', 'Blue Table Runner', 16.50, '1', 'https://wwww.crutecreations.com/tablerunnerblue', default, default, default, 3);
Insert product (ID, VendorID, PartNumber, Name, Price, Unit, PhotoPath, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(4, 5, 'P104', 'Snow Removal', 150.00, null, null, default, default, default, 6);
Insert product (ID, VendorID, PartNumber, Name, Price, Unit, PhotoPath, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(5, 7, 'P105', 'Pink Doily', 1.00, null, null, default, default, default, 3);
Insert product (ID, VendorID, PartNumber, Name, Price, Unit, PhotoPath, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(6, 7, 'P106', 'Crocheted Wig', 45.00, null, null, default, default, default, 3);


Insert purchaseRequest (ID, UserID, Description, Justification, DateNeeded, DeliveryMode, Status, Total, SubmittedDate, ReasonForRejection, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(1, 3, 'Team Supplies', 'Running out', 20190520, 'Hand deliver', 'Open', 24.95, default, null, default, default, default, 6);
Insert purchaseRequest (ID, UserID, Description, Justification, DateNeeded, DeliveryMode, Status, Total, SubmittedDate, ReasonForRejection, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(2, 5, 'Snow Removal', 'It snowed', 20190220, 'Service Company', 'Closed', 16.58, default, null, default, default, default, 10253);
Insert purchaseRequest (ID, UserID, Description, Justification, DateNeeded, DeliveryMode, Status, Total, SubmittedDate, ReasonForRejection, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(3, 11, 'Be cool', 'I want to be', 20190601, 'UPS', 'Rejected', 69.24, default, 'Not needed to perform duties.', default, default, default, 10253);
Insert purchaseRequest (ID, UserID, Description, Justification, DateNeeded, DeliveryMode, Status, Total, SubmittedDate, ReasonForRejection, IsActive, DateCreated, DateUpdated, UpdatedByUser) Values 
	(4, 4, 'Employee Benefit', 'I want to look cool!', 20190704, 'Next Day Air', 'Rejected', 34.75 , default, 'Nobody needs a crocheted wig.', default, default, default, 6);

Insert purchaseRequestLineItem (ID, PurchaseRequestID, ProductID, Quantity, UpdatedByUser) Values (1, 1, 2, 10, 3);
Insert purchaseRequestLineItem (ID, PurchaseRequestID, ProductID, Quantity, UpdatedByUser) Values (2, 2, 4, 1, 1);
Insert purchaseRequestLineItem (ID, PurchaseRequestID, ProductID, Quantity, UpdatedByUser) Values (3, 3, 5, 1, 4);
Insert purchaseRequestLineItem (ID, PurchaseRequestID, ProductID, Quantity, UpdatedByUser) Values (4, 4, 5, 5, 11);
Insert purchaseRequestLineItem (ID, PurchaseRequestID, ProductID, Quantity, UpdatedByUser) Values (5, 4, 6, 2, 6);
    
    
CREATE USER prs_user@localhost IDENTIFIED BY 'sesame';
	GRANT SELECT, INSERT, DELETE, UPDATE ON prs.* TO prs_user@localhost;
    flush privileges;
 