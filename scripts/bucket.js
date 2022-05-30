// On clicking remove button the item should be removed from DOM as well as localstorage.
var data =JSON.parse(localStorage.getItem("coffee")) || [];
console.log(data);


var total = data.reduce(function (sum, elem, index, arr) {
    return sum + Number(elem.price);
  }, 0);

  console.log(total);

  document.getElementById("total_amount").innerText =`${total}`

  

//   function appendData(data){
    data.map(function(el,index){

        
        let box =document.createElement("div");
        

        let image = document.createElement("img");
        image.src=el.image;
        image.setAttribute("class","image")

        let p1 =document.createElement("h3")
        p1.innerText=el.title;

        let p2 =document.createElement("p")
        p2.innerText=el.description;

        let p3 =document.createElement("p")
        p3.innerText=el.price;

        var btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.setAttribute("id","remove_coffee")
        btn.addEventListener("click", function () {
          removeItem(el, index);
        });

        box.append(image,p1,p2,p3,btn);
        document.getElementById("bucket").append(box)
    });
// };

function removeItem(el, index) {
    console.log(el, index);
    data.splice(index, 1);
    console.log(data);
    localStorage.setItem("coffee", JSON.stringify(data));
    window.location.reload();
  }
