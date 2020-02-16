let data = [...initialArr];

const searchFontEl = document.querySelector(".searchFont");
searchFontEl.addEventListener("input", e => searchFontByName(e, data, ".articles-res"));

const typeSmthEl = document.querySelector(".toolbar-text");
typeSmthEl.addEventListener("input", e => typeFontsText(e, data, ".articles-res"));

const fontSizeSelectorEl = document.querySelector("#selectFontSize");
fontSizeSelectorEl.addEventListener("change", e => selectFontSize(e, data, ".articles-res"));

const radiobgColorBtns = document.querySelectorAll(".toolbar-changeBg input[name='bgColor']");
radiobgColorBtns.forEach(e => e.addEventListener("change", event => changeBg(event)));

data.forEach(el => createArticleTemplate(el, ".articles-res"));

function createArticleTemplate(item, parentClass, textFontSize = `${fontSizeSelectorEl.value}px`) {
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
  p.style.fontSize = textFontSize;
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
  
  if(!value) {
    data.forEach(el => createArticleTemplate(el, parentClass));
  } else {
    newArray.forEach(el => createArticleTemplate(el, parentClass));
  }
}

function selectFontSize(event, data, parentClass) {
  const { target: { value }} = event;
  
  removeAllChildren(parentClass);
  data.forEach(el => createArticleTemplate(el, parentClass, `${value}px`));
}

function changeBg(event) {
  const { target: { value }} = event;
  
  if(value === 'white') {
    document.documentElement.style.setProperty('--bg-color', '#fff');
    document.documentElement.style.setProperty('--text-color', '#222');
    document.documentElement.style.setProperty('--second-text-color', 'rgba(34, 34, 34, .5)');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#222');
    document.documentElement.style.setProperty('--text-color', '#fff');
    document.documentElement.style.setProperty('--second-text-color', 'rgba(255,255,255, .5)');
  }
}

function removeAllChildren(className) {
  const node = document.querySelector(className);
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
