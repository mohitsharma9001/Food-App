import navbar from "./component/navbar.js";
let input_box = document.getElementById("input-box");

input_box.innerHTML = navbar()

getFood()
async function getFood(){
    try {
        // let searchValue = document.getElementById("search-food").value;
      
        var result = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        var data = await result.json();
        let allFoodCategories = data.categories;
        console.log(allFoodCategories)
        displayData(allFoodCategories)
    
    } catch (error) {
        console.log(error);
    }
}

function displayData(allFoodCategories){
    container.innerHTML = ""
    allFoodCategories.forEach(data => {
       let  box = document.createElement("div");
        let name = document.createElement("h3");
        name.textContent = data.strCategory

        let img = document.createElement("img");
        img.src = data.strCategoryThumb

        box.append(img,name);
        container.append(box)
    })
}