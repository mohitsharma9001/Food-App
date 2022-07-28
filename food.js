// import navbar from "./component/navbar.js";
// let input_box = document.getElementById("input-box");

// input_box.innerHTML = navbar()

let container = document.getElementById("container");
let timerId;
function debounce(func,delay)
{
    if(timerId) clearTimeout(timerId);
    timerId= setTimeout(function()
    {
        func();
    },delay)
}



async function getFood(){
    try {
        let searchValue = document.getElementById("search-food").value;
      
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchValue}`);
        let data = await res.json()
        let allFoodItems = data.meals;
        console.log(allFoodItems)
        displayData(allFoodItems)
    
    } catch (error) {
        console.log(error);
    }
}

function displayData(allFoodItems){
    container.innerHTML = ""
    allFoodItems.forEach(data => {
       let  box = document.createElement("div");
        let name = document.createElement("h3");
        name.textContent = data.strMeal

        let img = document.createElement("img");
        img.src = data.strMealThumb

        box.append(img,name);
        container.append(box)
    })
}