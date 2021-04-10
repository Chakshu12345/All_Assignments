 src="./employeeFormLogic.js"

var ValidateForm = function(){
        this.checkNumeric = function(value){
        console.log('Received Values is = ' + value);
        if(!parseInt(value)){
        alert('Value must be number');
        }
        value = 0;
        return value;
    };

    this.validation_fields = function(val1,val2)
    {
        for(var p in employees) {
            if(employees[p].EmpNo== val1)
            {
                alert("Emp No can not be Repetative");
            }
        }

        if(val2=='')
        {
        alert("Please Enter emp Name");
        }

       /* this.letterNumber = /^[a-zA-Z]+$/;
        if((val2.value.this.match(letterNumber))) 
        {
        return true;
        }
        else
        { 
        alert("Emp Name as character only!"); 
        return false; 
        }*/



    };
};