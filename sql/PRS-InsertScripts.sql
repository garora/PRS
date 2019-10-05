

--PRODUCT TABLE
Use PrsDb;

Insert INTO product (VendorID, PartNbr, Name, Price, Unit, PhotoPath) Values 
	(6, 'P101', 'Earphones', 5.99, '12', null);
Insert INTO product (VendorID, PartNbr, Name, Price, Unit, PhotoPath) Values 
	(1, 'P102', 'No. 2 Pencil', 1.00, '8', null);
Insert INTO product (VendorID, PartNbr, Name, Price, Unit, PhotoPath) Values 
	(7, 'P103', 'Blue Table Runner', 16.50, '1', 'https://wwww.crutecreations.com/tablerunnerblue');
Insert INTO product (VendorID, PartNbr, Name, Price, Unit, PhotoPath) Values 
	(5, 'P104', 'Snow Removal', 150.00, '1', null);
Insert INTO product (VendorID, PartNbr, Name, Price, Unit, PhotoPath) Values 
	(7, 'P105', 'Pink Doily', 1.00, '2', null;
Insert INTO product (VendorID, PartNbr, Name, Price, Unit, PhotoPath) Values 
	(7, 'P106', 'Crocheted Wig', 45.00, '1', null);

--VENDOR TABLE
Use PrsDb;

Insert INTO vendor (Code, Name, Address, City, State, Zip, Phone, Email) Values 
	('V9', 'Staples', '342 Happy Valley Rd.', 'Mason', 'OH', '413', '512-313-1596', 'order@staples.com');
Insert INTO vendor (Code, Name, Address, City, State, Zip, Phone, Email) Values 
	('V10', 'Joes Pencil Shop', '354162 Commerce Way', 'Liberty', 'MI', '31546', '525-645-9696', 'joe@joespencilshop.com');
Insert INTO vendor (Code, Name, Address, City, State, Zip, Phone, Email) Values 
	('V12', ' Office Mart', '32654 Pete Rose Way', 'Cincinnati', 'OH', '413', '513-896-3032', 'placeorder@officemart.com');
Insert INTO vendor (Code, Name, Address, City, State, Zip, Phone, Email) Values 
	('V13', 'Furniture Frenzy', '23 Frenzy st.', 'Woohoo', 'PA', '63652', '313-969-5641', 'jlawson@furniturefrenzy.com');
Insert INTO vendor (Code, Name, Address, City, State, Zip, Phone, Email) Values 



--USER TABLE (NOT WORKING)
Use PrsDb;

Insert INTO User (Username, Password, Firstname, Lastname, Phone, Email, IsReviewer, IsAdmin) Values 
	('gsturgis', '34724t', 'Glenn', 'Sturgis', '937-363-5828', 'glenn.sturgis@Cloud9.com', DEFAULT, DEFAULT);
Insert INTO User (Username, Password, Firstname, Lastname, Phone, Email, IsReviewer, IsAdmin) Values 
	('bthompson', '$~1294', 'Bilbo', 'Thompson', '643-919-6431', 'bilbo.thompson@Cloud9.com', DEFAULT, DEFAULT);
Insert INTO User (Username, Password, Firstname, Lastname, Phone, Email, IsReviewer, IsAdmin) Values 
	('maquinoliwanag', '3142po$@!', 'Mateo Fernando', 'Aquino Liwanag', '515-645-3146', 'mateo.aquinoliwanag@Cloud9.com', DEFAULT, DEFAULT);
Insert INTO User (Username, Password, Firstname, Lastname, Phone, Email, IsReviewer, IsAdmin) Values 
	('skaluiokalani', 'Iluvrry@', 'Sandra', 'Kaluiokalani', '342-645-7984', 'sandra.kaluiokalani@Cloud9.com', DEFAULT, DEFAULT);
Insert INTO User (Username, Password, Firstname, Lastname, Phone, Email, IsReviewer, IsAdmin) Values 
	('tstaskiewicz', 'rIfarm@', 'Tate', 'Staskiewicz', '937-171-3491', 'tate.staskiewicz@Cloud9.com', DEFAULT, DEFAULT);

Insert INTO User (Username, Password, Firstname, Lastname, Phone, Email, IsReviewer, IsAdmin) Values 
	('mwhite', '36et!lk', 'Marcus', 'White', '313-695-4613', 'marcus.white@Cloud9.com', DEFAULT, DEFAULT);
Insert INTO User (Username, Password, Firstname, Lastname, Phone, Email, IsReviewer, IsAdmin) Values 
	('skazlauskas', '3melis42', 'Sal', 'Kazlauskas', '656-252-3175', 'sal.kazlauskas@Cloud9.com', DEFAULT, DEFAULT);
	
	
	-- REQUEST TABLE (NOT WORKING)
Use PrsDb;

Insert INTO (UserId, Description, Justification, DeliveryMode, Status, Total, RejectionReason) Values 
	(3, 'Team Supplies', 'Running out', 'Hand deliver', 'Open', 24.95, null);
Insert INTO (UserId, Description, Justification, DeliveryMode, Status, Total, RejectionReason) Values 
	(5, 'Snow Removal', 'It snowed', 'Service Company', 'Closed', 16.58, null);
Insert INTO (UserId, Description, Justification, DeliveryMode, Status, Total, RejectionReason) Values 
	(11, 'Be cool', 'I want to be', 'UPS', 'Rejected', 69.24, 'Not needed to perform duties.');
Insert INTO (UserId, Description, Justification, DeliveryMode, Status, Total, RejectionReason) Values 
	(4, 'Employee Benefit', 'I need a new style!', 'Next Day Air', 'Rejected', 34.75 , 'Nobody needs a crocheted wig.');
	
-- REQUESTLINE TABLE (NOT WORKING)	
Use PrsDb;

Insert INTO RequestLine (RequestId, ProductId, Quantity) Values (1, 2, 10);
Insert INTO RequestLine (RequestId, ProductId, Quantity) Values (2, 4, 1);
Insert INTO RequestLine (RequestId, ProductId, Quantity) Values (3, 5, 1);
Insert INTO RequestLine (RequestId, ProductId, Quantity) Values (4, 5, 5);
Insert INTO RequestLine (RequestId, ProductId, Quantity) Values (4, 6, 2);