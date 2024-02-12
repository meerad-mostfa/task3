
async function getelement(){
    const response = await fetch("https://dummyjson.com/products");
    const products =await response.json();
    const pro=products.products; 
  let  data= " ";
    for(let i=0;i<pro.length;i++){
        data+=`<div class="do">
        <h2>${pro[i].title}</h2> <img src=${pro[i].thumbnail} /> <p>${pro[i].price}</p></div>`
    }
    document.querySelector("div").innerHTML=data;

}
getelement();