const articlesRes = document.querySelector(".articles-res");

initialArr.forEach(el => {
  createArticleTemplate(el, articlesRes);
});

function createArticleTemplate(item, htmlEl) {
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
  
  htmlEl.appendChild(article);
}
