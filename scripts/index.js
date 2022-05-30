// Add the coffee to local storage with key "coffee"

var data =JSON.parse(localStorage.getItem("coffee")) || [];
const url =`https://masai-mock-api.herokuapp.com/coffee/menu`;

const items =document.getElementById("menu");

fetch(url)
.then(function (res){
    return res.json();
})

.then(function (res) {
    appendData(res.menu.data)
    console.log(res.menu.data)
})

.catch(function(err){
    console.log(err);
});

var length =data.length;
console.log(length);

document.getElementById("coffee_count").innerText= `${length}`

function appendData(data){
    data.forEach(function(el,index){

        let box =document.createElement("div");
        box.setAttribute("id","box");

        let image = document.createElement("img");
        image.src=el.image;
        image.setAttribute("class","image")

        let p1 =document.createElement("h3")
        p1.innerText=el.title;

        let p2 =document.createElement("p")
        p2.innerText=el.description;

        let p3 =document.createElement("p")
        p3.innerText=el.price;

        let btn =document.createElement("button");
        btn.innerText ="ADD TO BUCKET"
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener("click",function (){
            addtoBucket(el);
        })

        box.append(image,p1,p2,p3,btn);
        items.append(box)
    })
};

function addtoBucket(el){
    console.log(el);
    data.push(el);
    localStorage.setItem("coffee",JSON.stringify(data));
    window.location.reload();
}

