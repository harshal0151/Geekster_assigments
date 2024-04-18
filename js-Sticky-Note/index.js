const btn = document.querySelector("button");
const note = document.querySelector("textarea");
const color = document.querySelector("#bg");
const rightDiv = document.querySelector(".right");







btn.addEventListener('click', addNote);


function  addNote() {
    const text = note.value;
    if(text.trim().length === 0) return;
    
    const stickyNote = document.createElement("div");
    const textSpan = document.createElement("span");
      textSpan.innerText = text;
      textSpan.addEventListener("blur" , makeEditableFalse);

    stickyNote.append(textSpan) ;
    stickyNote.classList.add("note");

    const edit = document.createElement("span");
    edit.innerText = "";
    edit.addEventListener("click" , editStickyNote);
    stickyNote.append(edit);

    const cross = document.createElement("span");
    cross.innerHTML= '&times';
    cross.classList.add("close");
    cross.addEventListener("click", removeStickyNote);
    stickyNote.append(cross);

    stickyNote.style.backgroundColor = color.value;
    rightDiv.append(stickyNote);
    note.value = "";

}

function removeStickyNote(evt) {
    evt.target.parentElement.remove();
  }
  
  function editStickyNote(evt) {
    evt.target.parentElement.children[0].contentEditable = true;
  }
  
  function makeEditableFalse(evt) {
    evt.target.contentEditable = false;
  }
  


