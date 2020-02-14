let data = [...initialArr];

const searchFont = document.querySelector(".searchFont");
searchFont.addEventListener("input", e => searchFontByName(e, data, ".articles-res"));

const typeSmth = document.querySelector(".toolbar-text");
typeSmth.addEventListener("input", e => typeFontsText(e, data, ".articles-res"));

data.forEach(el => createArticleTemplate(el, ".articles-res"));

function createArticleTemplate(item, parentClass) {
  //classStyle, nameStyle, authorStyle, text
  
  const article = document.createElement("article");
  article.className = `card ${item.classStyle}`;
  
  const titleWrapper = document.createElement("div");
  titleWrapper.className = "title-wrapper";
  
  const h2 = document.createElement("h2");
  h2.className = "name";
  h2.textContent = item.nameStyle;
  
  const i = document.createElement("i");
  i.className = "fa fa-plus-circle";
  
  const h3 = document.createElement("h3");
  h3.className = "author";
  h3.textContent = item.authorStyle;
  
  const p = document.createElement("p");
  p.className = "text";
  p.textContent = item.text;
  
  titleWrapper.appendChild(h2);
  titleWrapper.appendChild(i);
  article.appendChild(titleWrapper);
  article.appendChild(h3);
  article.appendChild(p);
  
  const parent = document.querySelector(parentClass);
  parent.appendChild(article);
}

function searchFontByName(event, data, parentClass) {
  const { target: { value }} = event;
  const filteredArr = data.filter(e => e.nameStyle.toLowerCase().indexOf(value) >= 0);
  
  removeAllChildren(parentClass);
  filteredArr.forEach(el => createArticleTemplate(el, parentClass));
}

function typeFontsText(event, data, parentClass) {
  const { target: { value }} = event;
  const newArray = data.map(el => Object.assign({}, el, {["text"]: value}));
  
  removeAllChildren(parentClass);
  newArray.forEach(el => createArticleTemplate(el, parentClass));
}

function removeAllChildren(className) {
  const node = document.querySelector(className);
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
