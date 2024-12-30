let deleteMode = false
let editMode = false
const deleteUserBtn = document.querySelector(".delete-user-button")
const editUserBtn = document.querySelector(".edit-user-button")
const users = document.querySelectorAll(".user")

deleteUserBtn.addEventListener("click", ()=>{
    console.log(deleteMode)
    deleteMode = !deleteMode
    if(deleteMode){
        users.forEach(user => {
            console.log(user);
            const delBtn = document.createElement("button")
            delBtn.classList.add("add-user-button", "delete-user-button")
            delBtn.textContent = "Delete"
            delBtn.addEventListener("click", ()=>{
                const id = user.getAttribute("data-id")
                fetch(`/delete-user/${id}`, {
                    method: "DELETE",
                }).then(()=>{
                    console.log("user deleted");
                    window.location.reload()
                }).catch((err)=>{
                    console.log(err);
                })
            })
            user.appendChild(delBtn)
        })
    }else{
        users.forEach(user => {
            const delBtn = document.querySelector(".user .delete-user-button")
            console.log(delBtn);
            user.removeChild(delBtn)
        })
    }
})

editUserBtn.addEventListener("click", ()=>{
    console.log("edit user button clicked")
    editMode = !editMode
    if(editMode){
    users.forEach(user => {
        const editBtn = document.createElement("a")
        editBtn.classList.add("add-user-button", "edit-user-button")
        editBtn.textContent = "Edit"
        editBtn.href = `/edit-user/${user.getAttribute("data-id")}`
        user.appendChild(editBtn)
    })
    }else{
        users.forEach(user => {
            const editBtn = document.querySelector(".user .edit-user-button")
            user.removeChild(editBtn)
        })
    }
})

