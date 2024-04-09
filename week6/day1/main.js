const companyName = document.getElementById("company-name")
const contactName = document.getElementById("contact-name")
const title = document.getElementById("title")
const id = document.getElementById("id")
const btn = document.getElementById("btn")
const companyNameWarning = document.getElementById("company-name-warning")
const contactNameWarning = document.getElementById("contact-name-warning")
const titleWarning = document.getElementById("title-warning")
const idWarning = document.getElementById("id-warning")
const tbody = document.getElementById("tbody")
const updateContact = document.getElementById("update")

contactsArray = []
class contacts {
    constructor(companyName, contactName, title, id) {
        this.companyName = companyName
        this.contactName = contactName
        this.title = title
        this.id = id
    }
}


btn.addEventListener('click', () => {
    if (companyName.value == "") {
        companyNameWarning.classList.replace('d-none', 'd-block')
    }
    if (contactName.value == "") {
        contactNameWarning.classList.replace('d-none', 'd-block')
    }
    if (title.value == "") {
        titleWarning.classList.replace('d-none', 'd-block')
    }
    if (id.value == "") {
        idWarning.classList.replace('d-none', 'd-block')
    }
    else {
        contactsArray.push(new contacts(companyName.value, contactName.value, title.value, id.value))
        //    console.log(contactsArray);

        tbody.innerHTML += `
<tr>
<td>${id.value}</td>
<td>${companyName.value}</td>
<td>${contactName.value}</td>
<td>${title.value}</td>
<td>
<button id="delete">delete</button>
<button id="update">update</button></td>
</tr>


`}

    companyName.value = ""
    contactName.value = ""
    title.value = ""
    id.value = ""
    const deleteBtns = document.querySelectorAll("#delete")
    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            deleteBtn.closest('tr').remove()
        })
    });

})

companyName.addEventListener('keyup', () => {
    if (companyName.value != "") {
        companyNameWarning.classList.replace('d-block', 'd-none')
    }
})
contactName.addEventListener('keyup', () => {
    if (contactName.value != "") {
        contactNameWarning.classList.replace('d-block', 'd-none')
    }
})
title.addEventListener('keyup', () => {
    if (title.value != "") {
        titleWarning.classList.replace('d-block', 'd-none')
    }
})
id.addEventListener('keyup', () => {
    if (id.value != "") {
        idWarning.classList.replace('d-block', 'd-none')
    }
})