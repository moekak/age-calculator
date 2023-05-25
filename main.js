const day = document.getElementById("dayInput")
const month = document.getElementById("monthInput")
const year = document.getElementById("yearInput")
const form = document.getElementById("input-bd");
const errorMessages = document.querySelectorAll(".error")
const title = document.querySelectorAll(".label")

// displaying years
const day_border = document.getElementById("borderYear")
const month_border = document.getElementById("borderMonth")
const year_border = document.getElementById("borderDay")


function handleSubmit(){
    calculating();
 
   
}

function calculating(){


    
    const date = new Date();
    const ms = date.getTime()


    const getYear = date.getFullYear();

   

    var dayValue = day.value
    var monthValue = month.value
    var yearValue = year.value

     
    

     


    
        let bdDate =  new Date(yearValue, monthValue -1 , dayValue)
        bdDate = bdDate.getTime()

     




        const diffs = ms - bdDate
      
        const diffTime = diffs / 1000/60/60/24/365.24
        const diffMonth = (diffTime - Math.floor(diffTime)) * 12
        const diffDay = (diffMonth - Math.floor(diffMonth)) * 30.44
    

        const finalDiffYear = Math.floor(diffTime)
        const finalDiffMonth = Math.floor(diffMonth)
        const finalDiffDay = Math.floor(diffDay)




         
        // ==================================　validation ==============================

     


    if(diffs < 0){
        errorMessages[0].textContent = "Must be a valid day"
        errorMessages[1].textContent = "Must be a valid day"
        errorMessages[2].textContent = "Must be a valid day"
    }













     
        if(dayValue == "" ){
            errorMessages[0].textContent = "This field is required"
            title[0].style.color = "hsl(0, 100%, 67%)"
            day.style.border = "2px solid hsl(0, 100%, 67%)"
        }  else if(!/^-?\d+$/.test(dayValue) || dayValue < 0 || dayValue > 31 ){
            errorMessages[0].textContent = "Must be a valid day"
            title[0].style.color = "hsl(0, 100%, 67%)"
            day.style.border = "2px solid hsl(0, 100%, 67%)"
        } else if(diffs < 0){
            errorMessages[0].textContent = "Must be a valid date"
            title[0].style.color = "hsl(0, 100%, 67%)"
            day.style.border = "2px solid hsl(0, 100%, 67%)"

        } else{
            errorMessages[0].textContent = ""
            day.style.border = "1px solid rgba(0, 0, 0, 0.411)"
            title[0].style.color = "hsl(0, 1%, 44%)"
        }
        
        
        if(monthValue == ""){
            title[1].style.color = "hsl(0, 100%, 67%)"
            errorMessages[1].textContent = "This field is required"
            month.style.border = "2px solid hsl(0, 100%, 67%)"
        }else if(!/^-?\d+$/.test(monthValue) || monthValue < 1 || monthValue > 12) {
            errorMessages[1].textContent = "Must be a valid month"
            title[1].style.color = "hsl(0, 100%, 67%)"
            month.style.border = "2px solid hsl(0, 100%, 67%)"
        } else if(diffs < 0){
            title[1].style.color = "hsl(0, 100%, 67%)"
            month.style.border = "2px solid hsl(0, 100%, 67%)"
            errorMessages[1].textContent = ""
        } else{
            errorMessages[1].textContent = ""
            month.style.border = "1px solid rgba(0, 0, 0, 0.411)"
            title[1].style.color = "hsl(0, 1%, 44%)"
        }
       

        
        if(yearValue == ""){
            title[2].style.color = "hsl(0, 100%, 67%)"
            errorMessages[2].textContent = "This field is required"
            year.style.border = "2px solid hsl(0, 100%, 67%)"
        } else if(!/^-?\d+$/.test(yearValue) ){
            errorMessages[2].textContent = "Must be a valid year"
            title[2].style.color = "hsl(0, 100%, 67%)"
            year.style.border = "2px solid hsl(0, 100%, 67%)"
        } else if(diffs < 0){
            title[2].style.color = "hsl(0, 100%, 67%)"
            year.style.border = "2px solid hsl(0, 100%, 67%)"
            errorMessages[2].textContent = ""
        }else{
            errorMessages[2].textContent = ""
            year.style.border = "1px solid rgba(0, 0, 0, 0.411)"
            title[2].style.color = "hsl(0, 1%, 44%)"
        }
        
        // =============================== END ========================================
    
       
    
        
    
     
        if (errorMessages[0].innerHTML == "" && errorMessages[1].innerHTML == "" && errorMessages[2].innerHTML == ""){
           
    
            day_border.innerHTML = finalDiffYear;
            month_border.innerHTML = finalDiffMonth;
            year_border.innerHTML = finalDiffDay;
        }
      
       
       
        
        day.value = ""
        month.value = ""
        year.value = ""
    
    console.log(errorMessages[0]);
    console.log(errorMessages[1]);
    console.log(errorMessages[2]);
       
    // })
}

  

