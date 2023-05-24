const day = document.getElementById("dayInput")
const month = document.getElementById("monthInput")
const year = document.getElementById("yearInput")
const form = document.getElementById("input-bd");
const errorMessages = document.querySelectorAll(".error")
const title = document.querySelectorAll(".label")


function handleSubmit(){
    calculating();
 
   
}

function calculating(){
   
        var dayValue = day.value
         var monthValue = month.value
         var yearValue = year.value

    
    // form.addEventListener("submit", (e) =>{
    
    

       
         var dayValue = day.value
         var monthValue = month.value
         var yearValue = year.value

     
    
        let date = new Date();
        date = date.getTime()

        console.log(date);
        let bdDate =  new Date(yearValue, monthValue , dayValue)
        bdDate = bdDate.getTime()
        const diffs = date - bdDate
        const diffTime = diffs / 1000/60/60/24/365.24
        console.log(diffTime);


        const diff = date - bdDate;

        // 分に変換
        const diffMin = diffTime / 60000 
        // 時間に変更
        const diffHour = diffTime / 60000 / 60
        // 日付に変更
        const diffDay = diffTime / 60000 / 60/ 24
        // 月に変換
        const diffMonth = diffTime / 60000 / 60/ 24 / 30.4167 
        console.log(diffMonth);
        // 年に変換
        const diffYear = (diffMonth / 12)
        const bb = Math.floor(diffYear)
        const moeka = (diffYear - Math.floor(diffYear)) * 12
        const dean = Math.floor(moeka)
        const aaa = Math.floor((moeka - dean) * 30.44)
        console.log(bb);
        console.log(dean);
        console.log(aaa);
        // const bdDay = bdDate.getDate()
        // const bdMonth = bdDate.getMonth()
        // const bdYear = bdDate.getYear()
        // console.log(bdDate);
        // console.log(bdDay);
        // console.log(bdMonth);
        // console.log(bdYear);
         
        // ==================================　validation ==============================
     
        if(dayValue == "" ){
            errorMessages[0].textContent = "This field is required"
            title[0].style.color = "hsl(0, 100%, 67%)"
            day.style.border = "2px solid hsl(0, 100%, 67%)"
        }  else if(!/^-?\d+$/.test(dayValue) || dayValue < 0 || dayValue > 31){
            errorMessages[0].textContent = "Must be a valid day"
            title[0].style.color = "hsl(0, 100%, 67%)"
            day.style.border = "2px solid hsl(0, 100%, 67%)"
        }
        
        if(monthValue == ""){
            title[1].style.color = "hsl(0, 100%, 67%)"
            errorMessages[1].textContent = "This field is required"
            month.style.border = "2px solid hsl(0, 100%, 67%)"
        }else if(!/^-?\d+$/.test(monthValue) || monthValue < 1 || monthValue > 12){
            errorMessages[1].textContent = "Must be a valid day"
            title[1].style.color = "hsl(0, 100%, 67%)"
            month.style.border = "2px solid hsl(0, 100%, 67%)"
        }
        if(yearValue == ""){
            title[2].style.color = "hsl(0, 100%, 67%)"
            errorMessages[2].textContent = "This field is required"
            year.style.border = "2px solid hsl(0, 100%, 67%)"
        } else if(!/^-?\d+$/.test(yearValue) || yearValue > getYear){
            errorMessages[2].textContent = "Must be in the past"
            title[2].style.color = "hsl(0, 100%, 67%)"
            year.style.border = "2px solid hsl(0, 100%, 67%)"
        }
        // =============================== END ========================================
    
       
    
        // displaying years
        const day_border = document.getElementById("borderYear")
        const month_border = document.getElementById("borderMonth")
        const year_border = document.getElementById("borderDay")
    
    
     
        if (errorMessages[0].innerHTML == "" && errorMessages[1].innerHTML == "" && errorMessages[2].innerHTML == ""){
            var differenceYear = getYear - yearValue;
            var differenceDate = getDate;
            var differenceMonth;
            if(monthValue > getMonth){
                differenceMonth=  getMonth + (12 - monthValue)
            } else{
                differenceMonth = getMonth - monthValue
            }


            if(dayValue < getDate){
                differenceDate=  getDate;
            } else{
                differenceDate = dayValue - getDate
            }
           
           
    
            day_border.innerHTML = differenceYear;
            month_border.innerHTML = differenceMonth;
            year_border.innerHTML = differenceDate;
        }
      
       
       
        
        day.value = ""
        month.value = ""
        year.value = ""
    
    
       
    // })
}

  

