        var mydb; // for database reference
        var transaction; // for transaction reference
        var tbl; // for ObjectStore reference
        function createDatabase(){
            // create database 
            mydb = window.indexedDB.open("ProductIN", 1);

            mydb.onupgradeneeded = function(e){
                
                var dbRef = e.target.result; 
                // crete an object store
                tbl = dbRef.createObjectStore('Product', {keyPath: "id"});
                // define the column constraints
                var columnConstraints = {unique:false};
                // defining coluns
                
                tbl.createIndex("ProductId1","ProductId",columnConstraints);
                tbl.createIndex("ProductNM1","ProductNM",columnConstraints);
                tbl.createIndex("CategoryName1","CategoryName",columnConstraints);
                tbl.createIndex("Manufacturer1","Manufacturer",columnConstraints);
                tbl.createIndex("Description1","Description",columnConstraints);
                tbl.createIndex("Price1","Price",columnConstraints);

                tbl1 = dbRef.createObjectStore('Bill', {keyPath: "id"});
                // define the column constraints
                var columnConstraints = {unique:false};
                // defining coluns
                
                tbl1.createIndex("billId1","billId",columnConstraints);
                tbl1.createIndex("totalBill1","totalBill",columnConstraints);
                



                document.getElementById('dvstatus').innerHTML += 'Database is created successfully with objectstore';

            };

            // subscribe to the success event 
            mydb.onsuccess = function(e){
                document.getElementById('dvstatus').innerHTML += 'Database is created successfully';
            };
            // for error
            mydb.onerror = function(e){
                document.getElementById('dvstatus').innerHTML += 'Database creation failed';
            }


        }

        function saveData(saveobj){
            
            //console.log(saveobj)
            mydb = window.indexedDB.open("ProductIN");
            if(mydb){
                //console.log("In my db")
                mydb.onsuccess=function(e){
                    
                    var tx = e.target.result.transaction("Product", "readwrite");
                    // get the ObjectStore which is set for transaction
                    // making the ObjectStore ready for the transaction
                    tbl = tx.objectStore("Product");
                    
                    console.log(tbl)
                    // read values from UI
                     
                    // pass the object to the add() method
                    var saveOperations = tbl.add(saveobj);
                    //console.log(saveOperations)
                    saveOperations.onsuccess = function(e){
                        document.getElementById('dvstatus').innerHTML += 'Data Saved Successfully ' + e.target.result;
                    };
                    // subscribe to error on operations
                    saveOperations.onerror = function(e){
                        document.getElementById('dvstatus').innerHTML += 'Data Saved failed ' + e.target.value;
                    };

                }
            }

            else {
                document.getElementById('dvstatus').innerHTML += 'Error in Save Operation, may be database is not open';
            }

        
        };

        function savebill(billdata){
            var records = [];
            var max =1 
            var billdata
            mydb = window.indexedDB.open("ProductIN");
            if(mydb){
                //console.log("In my db")
                mydb.onsuccess=function(e){
                    var bill_id
                    var tx = e.target.result.transaction("Bill", "readwrite");
                    
                    tbl= tx.objectStore("Bill");
                    //console.log(tbl)
                    
                    var readCursor = tbl.openCursor();
                    //console.log(readCursor)
                    readCursor.onsuccess = function(e){
                        var reader = e.target.result;
                        //console.log("onsuccess")
                        //console.log(reader)
                        if(reader){
                            records.push(reader.value);
                            console.log(records.length)
                            max=parseInt(records.length) + 1
                            console.log(max)
                            bill_id='B1-'+ max 
                        }
                        else{   
                                             
                            bill_id='B1-'+max
                            //console.log(bill_id)
                        }
                        //console.log(bill_id)
                    //console.log(billdata)
                        var saveobj={
                        "id":max,
                        "billId":bill_id,
                        "totalBill":billdata
                        
                        };
                        var saveOperations = tbl.add(saveobj);
                        saveOperations.onsuccess = function(e){
                            document.getElementById('dvstatus').innerHTML += 'Data Saved Successfully ' + e.target.result;
                        };
                        // subscribe to error on operations
                        saveOperations.onerror = function(e){
                            document.getElementById('dvstatus').innerHTML += 'Data Saved failed ' + e.target.value;
                        };
                    }
    
                }

            }

        };

        