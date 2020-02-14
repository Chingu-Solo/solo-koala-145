const searchFont = document.querySelector(".searchFont");
searchFont.addEventListener("input", searchFontByName);

initialArr.forEach(el => createArticleTemplate(el, ".articles-res"));

function createArticleTemplate(item, className) {
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
  
  const parent = document.querySelector(className);
  parent.appendChild(article);
}

function searchFontByName(event) {
  const { target: { value }} = event;
  const filteredArr = initialArr.filter(e => e.nameStyle.toLowerCase().indexOf(value) >= 0);
  
  removeAllChildren('.articles-res');
  filteredArr.forEach(el => createArticleTemplate(el, ".articles-res"));
}

function removeAllChildren(className) {
  const node = document.querySelector(className);
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
