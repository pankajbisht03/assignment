let div = document.querySelector(".imgs")
    // let body = document.querySelector("body");
    // body.append(div)
    let arr = []
    async function getMeals(){
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`);
        let data = await res.json();
        // arr.push(data)
        let meals = data.meals
        // let price = meals.price(Math.random(1*20))
        displayMeals(meals)
        arr.push(meals)
        console.log(meals)
    }
    getMeals()

    function displayMeals(data){
        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class","imgDiv")
        data.forEach(function(mealImg){
            let img = document.createElement("img");
            img.setAttribute("class","photos")
        img.src = mealImg.strMealThumb

        let name = document.createElement("h2");
        name.textContent = mealImg.strMeal

        let price = document.createElement("p");
        price.textContent = `Price ${Math.floor(Math.random()*500 + 100)}`

        let btn = document.createElement("button");
        btn.setAttribute("class","btn")
        btn.textContent = "Add To Cart"
        
        btn.addEventListener("click",function(){
            addToCart()
        })


        imgDiv.append(img,name,btn,price)
        div.append(imgDiv)
            
        })
       
    }


    function addToCart(){
        let cartMeals = localStorage.setItem("meal",JSON.stringify(meals))
    }