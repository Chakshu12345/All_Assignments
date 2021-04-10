

var EmployeeLogic = function(){
    this.departments = ['IT','HRD', 'ACCOUNTS','SALES', 'TRAINING'];
   
    this.employess = [
        {EmpNo:101, EmpName:"Mahesh", DeptName:"IT", Salary:80000},
        {EmpNo:102, EmpName:"Tejas", DeptName:"SALES", Salary:60000},
    ];
    
    this.addEmployee = function(emp){
        //alert(emp);
        this.employess.push(emp);
        return this.employess;
    };

    this.modEmployee= function(emp_no1,txtename,dname,sal){
        for(p in this.employess)
        {
             if(this.employess[p].EmpNo == emp_no1)
             {
                this.employess[p].EmpNo= emp_no1
                this.employess[p].EmpName= txtename
                this.employess[p].DeptName= dname
                this.employess[p].Salary= sal
             }
         }
         return this.employess;

    };

    this.delEmployee = function(val){
        //alert(emp);
        var index = this.employess.findIndex(function(item, i){
            return item.EmpNo === val
            });
            console.log(index);

            this.employess.splice(index, 1);
        return this.employess;
    };
    
    this.getEmployees = function(){
        return this.employess;
    };

  
        
        
    };