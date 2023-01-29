let Url = "http://www.themealdb.com/api/json/v1/1/random.php"
let tBody = document.getElementById("tBodyIngredients");
let generate = document.getElementById("generate")

generate.addEventListener("click", fetchData)

function fetchData(){

    fetch(Url)
    .then(response => response.json())
    .then(data => mostrarDatos(data))
    .catch(err => console.log('error', err));
}

function mostrarDatos(data){
    
    let card = document.getElementById("infoFood");
    let arr = [];

    data.meals.forEach(item => {
                
        card.innerHTML =`
        <img src="${item.strMealThumb}"class="rounded mx-auto d-block" alt="not found"/>
        <div class="card mt-2">
            <div class="card-body">
                <h5 class="card-title">${item.strMeal}</h5>
                    <p class="card-text">${item.strInstructions}</p>
            </div>
                <div class="card-footer">
                    <a href="${item.strYoutube}" target="_blank"> <small class="text-muted"> More info </small> </a>
                 </div>
        </div>    
        `
        arr.push(
        item.strIngredient1,item.strIngredient2,item.strIngredient3,
        item.strIngredient4,item.strIngredient5,item.strIngredient6,
        item.strIngredient7,item.strIngredient8,item.strIngredient9,
        item.strIngredient10,item.strIngredient11,item.strIngredient12,
        item.strIngredient13,item.strIngredient14,item.strIngredient15,
        item.strIngredient16,item.strIngredient17,item.strIngredient18,
        item.strIngredient19,item.strIngredient20)

        resetTable()

        for(let i=0;i<clean(arr).length;i++){

            let tr = document.createElement("tr");
            let td = document.createElement("td");
            let text = document.createTextNode(arr[i]);

            td.appendChild(text)
            tr.appendChild(td)
            tBody.appendChild(tr)
        }
    });
}

function resetTable(){
    while (tBody.hasChildNodes()) {
        tBody.removeChild(tBody.firstChild);
    }
}

//nuevo arreglo sin espacios en blanco.
function clean(array){
    let newArr = [];

    for(let i=0;i<array.length;i++){
        if(array[i] != ""){
            newArr[i] = array[i]
        }
    }
    return newArr;
}


