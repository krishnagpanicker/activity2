function addListItem(text) {
    let newdiv = document.createElement('div');
    newdiv.classList.add("list-task");
    let inp = document.createElement('input');
    inp.type = "checkbox";
    inp.classList.add("task-check");
    let p = document.createElement('p');
    p.classList.add("task-text");
    p.textContent = text;
    newdiv.appendChild(inp);
    newdiv.appendChild(p);
    let parent = document.getElementsByClassName("right");
    parent[0].appendChild(newdiv);
}

let textarea = document.getElementById("text");
const submit = document.getElementById("submit-button");
textarea.onclick = () => {
    textarea.value = "";
};
submit.onclick = () => {
    let text = textarea.value;
    textarea.value = "Enter your task here";
    addListItem(text);
};