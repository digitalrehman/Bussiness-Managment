
let TextArea = document.getElementById("TextArea");

let Render = (DataRender) => {
  
  TextArea.innerHTML = "";
  localStorage.setItem("datastore", JSON.stringify(DataRender))
  DataRender.map((elements, index) => {
    TextArea.innerHTML += `
       
        <div class="screen">
        <p>${elements}</p>
       
          <div class="btn">

          <button id="edit" onclick="Edit(${index})">EDIT</button>
          
          <button id="delete" onclick="Delete(${index})">DELETE</button>
          </div>
        </div>
    
    `;
  });
};


function Edit(id) {
  let getTask = addItem[id];
  let editing = prompt("Please Update..", getTask);
  addItem.splice(id, 1, editing);
  Render(addItem);
}
function Delete(id) {
  addItem.splice(id, 1);
  Render(addItem);
}
document.addEventListener("DOMContentLoaded", () => {
  let StoreData = localStorage.getItem("datastore");
  if (StoreData) {
    addItem = JSON.parse(StoreData);
    Render(addItem);
  }
});


let addItem = [];

let AddTask = document.getElementById("add");
AddTask.addEventListener("submit", (e) => {
  e.preventDefault();
  let ans = e.target.input.value;
  if (!ans) {
    alert("Type your Task")
  }else{
    addItem.push(ans);
    Render(addItem);
  }
 

  document.getElementById("input").value = "";
});
