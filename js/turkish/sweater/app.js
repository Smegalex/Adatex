import { posts} from "./data.js";
const ref = document.querySelector(".products-list");
function sizesListInitial (sizesArray){
  let sizesList = ``;
  for(var i = 0; i<sizesArray.length; i++){
 const size = sizesArray[i];
 sizesList = sizesList + ` `+ `<li class="sizes-list-item color-inherit">${size}</li>`;
}
return sizesList;
  }

function showPost(post, number) {
  const { clothPhoto, price, materials, sizes} = post;
  const refs ={
    sizes_list: document.querySelector(".post_"+number).querySelector(".sizes-list"),
    postPhoto: document.querySelector(".post_"+number).querySelector(".post-img"),
    price: document.querySelector(".post_"+number).querySelector(".price"),
    materials: document.querySelector(".post_"+number).querySelector(".consist"),
  }
  const sizesList = sizesListInitial(sizes);
  refs.sizes_list.insertAdjacentHTML("beforeend", sizesList)
  refs.postPhoto.src = `../../../img/sweater/${clothPhoto}`;
  refs.price.textContent = `${price}`;
  refs.materials.textContent = `Состав: ${materials}`;
  
}

for(var i = 1; i<=posts.length; i++){
  ref.insertAdjacentHTML("beforeend", `
<li class="products-list-item post_${i} color-inherit" id="zoom_${i}"><div class="post-content"><a href="#zoom_${i}">
<img src="" alt="sweater-photo" class="post-img color-inherit " style="width: 160px; height: 160px;">
<h4 class="price-heading color-inherit">Цена: <span class="price"></span></h4>
<p class="consist color-inherit"></p>
<p class="sizes color-inherit"><span class="sizes-heading color-inherit"> Размеры:</span><ul class="sizes-list color-inherit"></ul></p></a></div>
</li>`);
}
for(var i = 0; i<posts.length; i++){
  showPost(posts[i],i+1);
}


/*function showProducts(root) {
  const { clothPhoto, price, materials} = post;
  const sizes = sizesCreator(post);
  const list = `
      <li class="products-list-item post_${i} color-inherit" style="width:100px; height:100px; background-color:red;">
      <img src="" alt="sweater-photo" class="post-img color-inherit " style="width: 160px; height: 160px;">
      <h4 class="price-heading color-inherit">Цена: <span class="price"></span></h4>
      <p class="consist color-inherit">Состав:</p>
      <p class="sizes color-inherit"><span class="sizes-heading color-inherit"> Размеры:</span><ul class="sizes-list color-inherit"></ul></p>
  </li>`
  root.insertAdjacentHTML("afterbegin", list);
}*/

/*
../../img/

  
  



function sizesCreator(post){
const list = post
for(var i; i<=post.sizes.length; i++){
  const stringSize = "<li class="sizes-list-item color-inherit">${e.sizes[i]}</li>"
  return           stringSize;    
}
return list;
}
 


function showProducts(root, post) {
  const sizes = sizesCreator(post);
  const list = post
    .map(
      (e, i) => `
      <li class="products-list-item post_${i+1} color-inherit">
      <img src="../../img/${e.clothPhoto}" alt="sweater-photo" class="post-img color-inherit " style="width: 160px; height: 160px;">
      <h4 class="price-heading color-inherit">Цена: <span class="price">${e.price}</span></h4>
      <p class="consist color-inherit">Состав: ${e.materials}</p>
      <p class="sizes color-inherit"><span class="sizes-heading color-inherit"> Размеры:</span><ul class="sizes-list color-inherit">${sizes}</ul></p>
  </li>`
    )
    .join("");
  root.insertAdjacentHTML("afterbegin", list);
}
let postsLength = posts.length;

for(var i; i <= postsLength; i++){
  post=posts[i];
  showProducts(ref, post);
}
*/