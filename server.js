const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
PORT = 37717;

// Database
var db = require('./db-connector')

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// API function layouts adapted from:
// 'CRUD Tutorial - ReactJS, NodeJS, MySQL [Part 2]' https://youtu.be/3YrOOia3-mo 
// 'CRUD Tutorial - ReactJS, NodeJS, MySQL [Part 3]' https://youtu.be/_S2GKnFpdtE

//******** Customers Query functions ********/

// READ all Customers entries using SQL SELECT

app.get('/api/get-customers', function(req, res)
    {
        // Define Read query for Customers table
        const sqlSelectCustomers = "SELECT * FROM Customers";

        // Execute query & send results
        db.pool.query(sqlSelectCustomers, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else
                res.send(results);
                /*console.log(results);*/      
        });
    });


// READ Customers entry using SQL SELECT with WHERE clause

app.get('/api/get-customer/:_id', function(req, res)
    {    
        // Query to search for a customer table entry given customerID value as the variable
        const sqlSelectCustomerByID =
        "SELECT * FROM `Customers` WHERE `customerID` = ?";

        // Execute query & send results
        db.pool.query(sqlSelectCustomerByID, req.params._id, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else
                res.send(results);
                /*console.log(results);*/       
        })
    });


// CREATE new Customers entry using SQL INSERT

app.post('/api/insert-customer', function(req, res) 
    {
        // Define variables for Customers table

        // Use 'let' to avoid invalid redeclaration of a constant value (str -> null). Assigning a value to the
        // same constant name in the same block-scope will throw 'TypeError: Assignment to constant variable'
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment

        let ipAddress = req.body.ipAddress;

        // How to assign a null value in MySQL from a json string object
        // https://stackoverflow.com/questions/54537680/how-to-insert-null-value-from-nodejs-javascript-to-mysql-using-parameterized-inp

        if ((ipAddress.trim() == '') || (ipAddress.trim().toUpperCase() == 'NULL')) {
            ipAddress = null;
          }
        let customerFirstName = req.body.customerFirstName;
        if ((customerFirstName.trim() == '') || (customerFirstName.trim().toUpperCase() == 'NULL')) { customerFirstName = null; }
        let customerLastName = req.body.customerLastName;
        if ((customerLastName.trim() == '') || (customerLastName.trim().toUpperCase() == 'NULL')) { customerLastName = null; }
        let customerStreet = req.body.customerStreet;
        if ((customerStreet.trim() == '') || (customerStreet.trim().toUpperCase() == 'NULL')) { customerStreet = null; }
        let customerCity = req.body.customerCity;
        if ((customerCity.trim() == '') || (customerCity.trim().toUpperCase() == 'NULL')) { customerCity = null; }
        let customerState = req.body.customerState;
        if ((customerState.trim() == '') || (customerState.trim().toUpperCase() == 'NULL')) { customerState = null; }
        let customerZip = req.body.customerZip;
        if ((customerZip.trim() == '') || (customerZip.trim().toUpperCase() == 'NULL')) { customerZip = null; }
        let customerEmail = req.body.customerEmail;
        if ((customerEmail.trim() == '') || (customerEmail.trim().toUpperCase() == 'NULL')) { customerEmail = null; }
        let customerPhone = req.body.customerPhone;
        if ((customerPhone.trim() == '') || (customerPhone.trim().toUpperCase() == 'NULL')) { customerPhone = null; }
        
        // Define Insert query
        const sqlInsertCustomer = 
            "INSERT INTO Customers (`ipAddress`,`customerFirstName`,`customerLastName`,`customerStreet`, `customerCity`, `customerState`, `customerZip`, `customerEmail`, `customerPhone`) VALUES (?,?,?,?,?,?,?,?,?)";
       
        // Execute query & send results
        db.pool.query(sqlInsertCustomer, [ipAddress, customerFirstName, customerLastName, customerStreet, customerCity, customerState, customerZip, customerEmail, customerPhone], function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else
                res.send(results);
                console.log(results);     
        });
    });


// UPDATE Customers entry using SQL UPDATE

app.put('/api/update-customer/:_id', function(req, res) 
    {
        // Define variables for Customers table
        const _id = req.params._id;
        let ipAddress = req.body.ipAddress;
        if ((ipAddress.trim() == '') || (ipAddress.trim().toUpperCase() == 'NULL')) { ipAddress = null; }
        let customerFirstName = req.body.customerFirstName;
        if ((customerFirstName.trim() == '') || (customerFirstName.trim().toUpperCase() == 'NULL')) { customerFirstName = null; }
        let customerLastName = req.body.customerLastName;
        if ((customerLastName.trim() == '') || (customerLastName.trim().toUpperCase() == 'NULL')) { customerLastName = null; }
        let customerStreet = req.body.customerStreet;
        if ((customerStreet.trim() == '') || (customerStreet.trim().toUpperCase() == 'NULL')) { customerStreet = null; }
        let customerCity = req.body.customerCity;
        if ((customerCity.trim() == '') || (customerCity.trim().toUpperCase() == 'NULL')) { customerCity = null; }
        let customerState = req.body.customerState;
        if ((customerState.trim() == '') || (customerState.trim().toUpperCase() == 'NULL')) { customerState = null; }
        let customerZip = req.body.customerZip;
        if ((customerZip.trim() == '') || (customerZip.trim().toUpperCase() == 'NULL')) { customerZip = null; }
        let customerEmail = req.body.customerEmail;
        if ((customerEmail.trim() == '') || (customerEmail.trim().toUpperCase() == 'NULL')) { customerEmail = null; }
        let customerPhone = req.body.customerPhone;
        if ((customerPhone.trim() == '') || (customerPhone.trim().toUpperCase() == 'NULL')) { customerPhone = null; }

        // Define Update query
        const sqlUpdateCustomer = 
            `UPDATE Customers 
            SET ipAddress = ?,customerFirstName = ?,customerLastName = ?,customerStreet = ?,customerCity = ?,customerState = ?,customerZip = ?, customerEmail = ?, customerPhone = ?
            WHERE customerID= ?`;
       
        // Execute query & send results
        db.pool.query(sqlUpdateCustomer, [ipAddress, customerFirstName, customerLastName, customerStreet, customerCity, customerState, customerZip, customerEmail, customerPhone, _id], function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else
                res.send(results);
                console.log(results);  
        });
    });


// DELETE Customers entry using SQL DELETE

app.delete('/api/delete-customer/:_id', (req, res) => 
    {    
        // Define Delete query for Customers table
        const sqlDeleteCustomer = "DELETE FROM `Customers` WHERE `customerID` = ?";
        
        // Execute query & send results
        db.pool.query(sqlDeleteCustomer, req.params._id, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else
                res.send(results);
                console.log(results);       
        })
    });

//********* Tracks Query functions *********/

// READ all Tracks entries using SQL SELECT

app.get('/api/get-tracks', function(req, res)
    {
        // Define Read query for Tracks table
        const sqlSelectTracks = "SELECT * FROM Tracks";

        // Execute query & send results
        db.pool.query(sqlSelectTracks, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else
                res.send(results);
                /*console.log(results);*/      
        });
    });


// CREATE new Tracks entry using SQL INSERT

app.post('/api/insert-track', function(req, res) 
    {
        // Define variables for Tracks table
        let trackTitle = req.body.trackTitle;
        if ((trackTitle.trim() == '') || (trackTitle.trim().toUpperCase() == 'NULL')) { trackTitle = null; }
        let trackLength = req.body.trackLength;
        if ((trackLength.trim() == '') || (trackLength.trim().toUpperCase() == 'NULL')) { trackLength = null; }
        let retailPrice = req.body.retailPrice;
        if ((retailPrice.trim() == '') || (retailPrice.trim().toUpperCase() == 'NULL')) { retailPrice = null; }
        let releaseDate = req.body.releaseDate;
        if ((releaseDate.trim() == '') || (releaseDate.trim().toUpperCase() == 'NULL')) { releaseDate = null; }

        // Define Insert query
        const sqlInsertTrack = 
            "INSERT INTO Tracks (`trackTitle`,`trackLength`,`retailPrice`,`releaseDate`) VALUES (?,?,?,?)";
       
        // Execute query & send results
        db.pool.query(sqlInsertTrack, [trackTitle, trackLength, retailPrice, releaseDate], function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else
                res.send(results);
                console.log(results);     
        });
    });


// UPDATE Tracks entry using SQL UPDATE

app.put('/api/update-track/:_id', function(req, res) 
    {
        // Define variables for Tracks table
        const _id = req.params._id;
        let trackTitle = req.body.trackTitle;
        if ((trackTitle.trim() == '') || (trackTitle.trim().toUpperCase() == 'NULL')) { trackTitle = null; }
        let trackLength = req.body.trackLength;
        if ((trackLength.trim() == '') || (trackLength.trim().toUpperCase() == 'NULL')) { trackLength = null; }
        let retailPrice = req.body.retailPrice;
        if ((retailPrice.trim() == '') || (retailPrice.trim().toUpperCase() == 'NULL')) { retailPrice = null; }
        let releaseDate = req.body.releaseDate;
        if ((releaseDate.trim() == '') || (releaseDate.trim().toUpperCase() == 'NULL')) { releaseDate = null; }

        // Define Update query
        const sqlUpdateTrack = 
            `UPDATE Tracks SET trackTitle = ?,trackLength = ?,retailPrice = ?,releaseDate = ? WHERE trackID = ?`;
       
        // Execute query & send results
        db.pool.query(sqlUpdateTrack, [trackTitle, trackLength, retailPrice, releaseDate, _id], function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else 
                res.send(results);
                console.log(results);      
        });
    });


// DELETE Tracks entry using SQL DELETE

app.delete('/api/delete-track/:_id', (req, res) => 
    {    
        // Define Delete query for Tracks table
        const sqlDeleteTrack = "DELETE FROM `Tracks` WHERE `trackID` = ?";
        
        // Execute query & send results
        db.pool.query(sqlDeleteTrack, req.params._id, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else 
                res.send(results);
                console.log(results);     
        })
    });

//********* Orders Query functions *********/

// READ all Orders entries using SQL SELECT

app.get('/api/get-orders', function(req, res)
    {
        // Define Read query for Orders table
        const sqlSelectOrders = "SELECT * FROM Orders";

        // Execute query & send results
        db.pool.query(sqlSelectOrders, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else
                res.send(results);
                /*console.log(results);*/     
        });
    });


// CREATE new Orders entry using SQL INSERT

app.post('/api/insert-order', function(req, res) 
    {
        // Define variables for Orders table
        let customerID = req.body.customerID;
        if ((customerID == '') || (customerID == 'NULL')) { customerID = null; }
        let orderDateTime = req.body.orderDateTime;
        if ((orderDateTime.trim() == '') || (orderDateTime.trim().toUpperCase() == 'NULL')) { orderDateTime = null; }
        let orderComplete = req.body.orderComplete;
        if ((orderComplete.trim() == '') || (orderComplete.trim().toUpperCase() == 'NULL')) { orderComplete = null; }

        // Define Insert query
        const sqlInsertOrder = 
            "INSERT INTO Orders (`customerID`,`orderDateTime`,`orderComplete`) VALUES (?,?,?)";
       
        // Execute query & send results
        db.pool.query(sqlInsertOrder, [customerID, orderDateTime, orderComplete], function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else 
                res.send(results);
                console.log(results);     
        });
    });


// UPDATE Orders entry using SQL UPDATE

app.put('/api/update-order/:_id', function(req, res) 
    {
        // Define variables for Orders table
        const _id = req.params._id;
        let customerID = req.body.customerID;
        if ((customerID == '') || (customerID === 'NULL')) { customerID = null; }
        let orderDateTime = req.body.orderDateTime;
        if ((orderDateTime.trim() == '') || (orderDateTime.trim().toUpperCase() == 'NULL')) { orderDateTime = null; }
        let orderComplete = req.body.orderComplete;
        if ((orderComplete == '') || (orderComplete === 'NULL')) { orderComplete = null; }

        // Define Update query
        const sqlUpdateOrder = 
            `UPDATE Orders SET customerID = ?,orderDateTime= ?,orderComplete = ? WHERE orderID= ?`;
       
        // Execute query & send results
        db.pool.query(sqlUpdateOrder, [customerID, orderDateTime, orderComplete, _id], function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else 
                res.send(results);
                console.log(results);      
        });
    });


// DELETE Orders entry using SQL DELETE

app.delete('/api/delete-order/:_id', (req, res) => 
    {    
        // Define Delete query for Orders table
        const sqlDeleteOrder = "DELETE FROM `Orders` WHERE `orderID` = ?";
        
        // Execute query & send results
        db.pool.query(sqlDeleteOrder, req.params._id, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else 
                res.send(results);
                console.log(results);      
        })
    });

//********* OrdersTracks Query functions *********/

// READ all OrdersTracks entries using SQL SELECT

app.get('/api/get-orders-tracks', function(req, res)
    {
        // Define Read query for OrdersTracks table
        const sqlSelectOrdersTracks = 
           `SELECT OrdersTracks.orderedTrackID, Orders.orderID, Orders.customerID, Orders.orderDateTime, Orders.orderComplete, Tracks.trackID, Tracks.trackTitle, Tracks.trackLength, Tracks.retailPrice, Tracks.releaseDate
            FROM OrdersTracks
            INNER JOIN Orders ON Orders.orderID = OrdersTracks.orderID
            LEFT JOIN Tracks ON Tracks.trackID = OrdersTracks.trackID
            ORDER BY OrdersTracks.orderedTrackID`;

        // Execute query & send results
        db.pool.query(sqlSelectOrdersTracks, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else
                res.send(results);
                /*console.log(results);*/      
        });
    });


// READ OrdersTracks entry using SQL SELECT with WHERE clause

app.get('/api/get-customer-tracks/:_id', function(req, res)
    {    
        // Query to search for the OrdersTracks table entry given customerID value as the variable
        // This displays the user's tracks library
        const sqlSelectCustomerTracks =
        `SELECT OrdersTracks.orderedTrackID, Orders.customerID, Tracks.trackID, Tracks.trackTitle, Tracks.trackLength, Tracks.retailPrice, Tracks.releaseDate 
        FROM OrdersTracks 
        INNER JOIN Orders ON Orders.orderID = OrdersTracks.orderID
        LEFT JOIN Tracks ON Tracks.trackID = OrdersTracks.trackID
        WHERE Orders.customerID = ?
        ORDER BY OrdersTracks.orderedTrackID`;

        // Execute query & send results
        db.pool.query(sqlSelectCustomerTracks, req.params._id, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else
                res.send(results);
                /*console.log(results);*/      
        })
    });


// CREATE new OrdersTracks entry using SQL INSERT

app.post('/api/insert-ordered-track', function(req, res) 
    {
        // Define variables for OrdersTracks table
        let orderID = req.body.orderID;
        if ((orderID == '') || (orderID == 'NULL')) { orderID = null; }
        let trackID = req.body.trackID;
        if ((trackID == '') || (trackID == 'NULL')) { trackID = null; }

        // Define Insert query
        const sqlInsertOrderedTrack = 
            "INSERT INTO OrdersTracks (`orderID`,`trackID`) VALUES (?,?)";
       
        // Execute query & send results
        db.pool.query(sqlInsertOrderedTrack, [orderID, trackID], function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else 
                res.send(results);
                console.log(results);     
        });
    });


// UPDATE OrdersTracks entry using SQL UPDATE

app.put('/api/update-ordered-track/:_id', function(req, res) 
    {
        // Define variables for OrdersTracks table
        const _id = req.params._id;
        let orderID = req.body.orderID;
        if ((orderID == '') || (orderID == 'NULL')) { orderID = null; }
        let trackID = req.body.trackID;
        if ((trackID == '') || (trackID == 'NULL')) { trackID = null; }

        // Define Update query
        const sqlUpdateOrderedTrack = 
           `UPDATE OrdersTracks SET orderID = ?,trackID = ? WHERE orderedTrackID= ?`;
       
        // Execute query & send results
        db.pool.query(sqlUpdateOrderedTrack, [orderID, trackID, _id], function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else 
                res.send(results);
                console.log(results);      
        });
    });


// DELETE OrdersTracks entry using SQL DELETE

app.delete('/api/delete-ordered-track/:_id', (req, res) => 
    {    
        // Define Delete query for OrdersTracks table
        const sqlDeleteOrderedTrack = "DELETE FROM `OrdersTracks` WHERE `orderedTrackID` = ?";
        
        // Execute query & send results
        db.pool.query(sqlDeleteOrderedTrack, req.params._id, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else 
                res.send(results);
                console.log(results);     
        })
    });

//********* Purchases Query functions *********/

// READ all Purchases entries using SQL SELECT

app.get('/api/get-purchases', function(req, res)
    {
        // Define Read query for Purchases table
        const sqlSelectPurchases = "SELECT * FROM Purchases";

        // Execute query & send results
        db.pool.query(sqlSelectPurchases, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else
                res.send(results);
                /*console.log(results);*/     
        });
    });


// CREATE new Purchases entry using SQL INSERT

app.post('/api/insert-purchase', function(req, res) 
    {
        // Define variables for Purchases table
        let customerID = req.body.customerID;
        if ((customerID == '') || (customerID == 'NULL')) { customerID = null; }
        let purchaseDateTime = req.body.purchaseDateTime;
        if ((purchaseDateTime.trim() == '') || (purchaseDateTime.trim().toUpperCase() == 'NULL')) { purchaseDateTime = null; }
        let totalPurchase = req.body.totalPurchase;
        if ((totalPurchase.trim() == '') || (totalPurchase.trim().toUpperCase() == 'NULL')) { totalPurchase = null; }
        let creditCardNum = req.body.creditCardNum;
        if ((creditCardNum.trim() == '') || (creditCardNum.trim().toUpperCase() == 'NULL')) { creditCardNum = null; }
        let creditCardExp = req.body.creditCardExp;
        if ((creditCardExp.trim() == '') || (creditCardExp.trim().toUpperCase() == 'NULL')) { creditCardExp = null; }

        // Define Insert query
        const sqlInsertPurchase = 
            "INSERT INTO Purchases (`customerID`,`purchaseDateTime`,`totalPurchase`,`creditCardNum`,`creditCardExp`) VALUES (?,?,?,?,?)";
       
        // Execute query & send results
        db.pool.query(sqlInsertPurchase, [customerID, purchaseDateTime, totalPurchase, creditCardNum, creditCardExp], function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else 
                res.send(results);
                console.log(results);      
        });
    });


// UPDATE Purchases entry using SQL UPDATE

app.put('/api/update-purchase/:_id', function(req, res) 
    {
        // Define update query & variables for Purchases table
        const _id = req.params._id;
        let customerID = req.body.customerID;
        if ((customerID == '') || (customerID == 'NULL')) { customerID = null; }
        let purchaseDateTime = req.body.purchaseDateTime;
        if ((purchaseDateTime.trim() == '') || (purchaseDateTime.trim().toUpperCase() == 'NULL')) { purchaseDateTime = null; }
        let totalPurchase = req.body.totalPurchase;
        if ((totalPurchase.trim() == '') || (totalPurchase.trim().toUpperCase() == 'NULL')) { totalPurchase = null; }
        let creditCardNum = req.body.creditCardNum;
        if ((creditCardNum.trim() == '') || (creditCardNum.trim().toUpperCase() == 'NULL')) { creditCardNum = null; }
        let creditCardExp = req.body.creditCardExp;
        if ((creditCardExp.trim() == '') || (creditCardExp.trim().toUpperCase() == 'NULL')) { creditCardExp = null; }

        // Define Update query
        const sqlUpdatePurchase = 
            `UPDATE Purchases SET customerID = ?,purchaseDateTime = ?,totalPurchase = ?,creditCardNum = ?, creditCardExp = ?
            WHERE purchaseID = ?`;
       
        // Execute query & send results
        db.pool.query(sqlUpdatePurchase, [customerID, purchaseDateTime, totalPurchase, creditCardNum, creditCardExp, _id], function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else 
                res.send(results);
                console.log(results);      
        });
    });


// DELETE Purchases entry using SQL DELETE

app.delete('/api/delete-purchase/:_id', (req, res) => 
    {    
        // Define Delete query for Purchases table
        const sqlDeletePurchase = "DELETE FROM `Purchases` WHERE `purchaseID` = ?";
        
        // Execute query & send results
        db.pool.query(sqlDeletePurchase, req.params._id, function (err, results, fields) {
            if (err) {
                res.status(500).json({ Error: 'Request failed' });
                console.log(err); 
            } else 
                res.send(results);
                console.log(results);      
        })
    });

/*
    LISTENER
    This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
*/
app.listen(PORT, function() {    
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});