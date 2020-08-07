// Write your code here!

let ul = document.createElement('ul')

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

main.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.setAttribute("id", "victory");
newHeader.innerHTML = ''
