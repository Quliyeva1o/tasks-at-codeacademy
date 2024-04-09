const companyName = document.getElementById("company-name")
const contactName = document.getElementById("contact-name")
const title = document.getElementById("title")
const id = document.getElementById("id")
const btn = document.getElementById("btn")
const sortByNameBtn = document.getElementById("sort-by-name-btn")
const companyNameWarning = document.getElementById("company-name-warning")
const contactNameWarning = document.getElementById("contact-name-warning")
const titleWarning = document.getElementById("title-warning")
const idWarning = document.getElementById("id-warning")
const tbody = document.getElementById("tbody")
const updateContact = document.querySelectorAll("#update")



contactsArray = []
class contacts {
    constructor(companyName, contactName, title, id) {
        this.companyName = companyName
        this.contactName = contactName
        this.title = title
        this.id = id
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault
    if (companyName.value.trim() == "") {
        companyNameWarning.classList.replace('d-none', 'd-block')
    }
    if (contactName.value.trim() == "") {
        contactNameWarning.classList.replace('d-none', 'd-block')
    }
    if (title.value.trim() == "") {
        titleWarning.classList.replace('d-none', 'd-block')
    }
    if (id.value.trim() == "") {
        idWarning.classList.replace('d-none', 'd-block')
    }
    else {
        contactsArray.push(new contacts(companyName.value, contactName.value, title.value, id.value))
        render();
    }
})

companyName.addEventListener('keyup', () => {
    if (companyName.value.trim() != "") {
        companyNameWarning.classList.replace('d-block', 'd-none')
    }
})

contactName.addEventListener('keyup', () => {
    if (contactName.value.trim() != "") {
        contactNameWarning.classList.replace('d-block', 'd-none')
    }
})

title.addEventListener('keyup', () => {
    if (title.value.trim() != "") {
        titleWarning.classList.replace('d-block', 'd-none')
    }
})

id.addEventListener('keyup', () => {

    if (id.value.trim() != "") {
        idWarning.classList.replace('d-block', 'd-none')
    }
})


function render() {
    companyName.value = ""
    contactName.value = ""
    title.value = ""
    id.value = ""
    tbody.innerHTML = ""
    contactsArray.forEach(contact => {
        tbody.innerHTML += `
    <tr>
<td>${contact.id}</td>
<td>${contact.companyName}</td>
<td>${contact.contactName}</td>
<td>${contact.title}</td>
<td>
<button id="delete">delete</button>
<button id="update">update</button></td>
</tr>
    `
    });


    const deleteContacts = document.querySelectorAll("#delete")
    deleteContacts.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", function () {
            const idx = contactsArray.findIndex((x) => x.id == id)
            contactsArray.splice(idx, 1);
            render()
        })
    })
}


sortByNameBtn.addEventListener('click', function sortByName() {
    contactsArray.sort((x, y) => x.contactName.localeCompare(y.contactName));
    render();                                        
})





