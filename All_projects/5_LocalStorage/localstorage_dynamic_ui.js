function generateDynamicUI(){
    return {
        table:function(dataSource){
           
            if(dataSource === undefined){
                return '<div>Invalid Data Source</div>';
            }
            if(dataSource.length === 0 ){
                return '<div>No Records</div>';
            }
            // logic for generating the table
            var table="";
            // get all keys for the 0th record
            var headers = Object.keys(dataSource[0]);
            table+= "<table style='border:double' id='customers'>";
            table += "<thead><tr>"
            for(var c=0;c<headers.length;c++){
                table+= "<th style='border:double' >"+headers[c]+"</th>"; 
            }    
            table+="</tr></thead>";
            table+="<tbody>";
            for(var row=0;row<dataSource.length;row++){
                table+="<tr>"; // each row is a JSON object from JSON Array
                for(var d=0;d<headers.length;d++){
                    // dataSource[row][headers[d]], for every row in data source, read every property (key) value 
                    table+= "<td style='border:double'>"+dataSource[row][headers[d]]+"</td>"; 
                }  
                table+="</tr>";
            }
            table+="</tbody>";
            table+="</table>";
            return table;
        }
    };


   /* radio_dynamic:function(dataSource){

    };*/
}