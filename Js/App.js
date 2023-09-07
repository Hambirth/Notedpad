const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")




addBtn.addEventListener(
    "click",
    function () {
        addNote()
    }
)

const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <i class="fas fa-save"></i>
    <i class="fas fa-trash"></i>
    
</div>
<textarea> </textarea>
` ;





    main.appendChild(note);
}