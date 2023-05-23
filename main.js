const day = document.getElementById("dayInput")
const form = document.getElementById("input-bd");
const value = day.value

form.addEventListener("submit", (e) =>{
    console.log("aaa");
    e.preventDefault();
    console.log(dayInput.value);
})