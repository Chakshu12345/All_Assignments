var ValidateForm = function(){
    this.checkNumeric = function(value){
        console.log('Received Values is = ' + value);
        if(!parseInt(value)){
        alert('Value must be number');
        }
        value = 0;
        return value;
    };

    this.checkIdRepetationLS=function(value){
        //var localStorage;
        //alert(localStorage.length)
        if(localStorage.length== 0)
        {
            console.log("abc")
        }
        else
        {

            keys=[]
            keys = Object.keys(localStorage)
           // console.log(keys)
            key_cnt= keys.length
            console.log(key_cnt)

            for(i=0;i<key_cnt;i++)
            {
                console.log(i)
                for(keys[i] in localStorage)
                {
                    keyin=keys[i]
                    //console.log(keyin)
                    
                    //console.log(localStorage.getItem(key_in))
                    arr=JSON.parse(localStorage.getItem(keyin))
                    for(ProductId in arr)
                    {
                        if(arr[ProductId]== value)
                        {
                            alert("Product Id already exist");
                            value=0
                        }
                    }

                    
                }
            }
            return value;
        }
    };// checkIdRepetationLS ends here
};