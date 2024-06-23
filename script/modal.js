const wrapper = document.querySelector(".wrapper"),
orderBtn = document.querySelector(".place-order");

function displayModal() {
    console.log("clicked");

    const wrapper = document.querySelector(".wrapp"),
    cardUI = document.querySelector(".article"),
    orderBtn = document.querySelector(".place-order");

    cardUI.classList.add("d-none")

    const box = document.createElement("div"),
    modalWrapper = document.createElement("div"),
    modalheader = document.createElement("h1"),
    modalText = document.createElement("div"),
    modalBtn = document.createElement("div");


    wrapper.appendChild(box)
    box.appendChild(modalWrapper)
    modalWrapper.appendChild(modalheader)
    modalWrapper.appendChild(modalText)
    modalWrapper.appendChild(modalBtn)



    modalheader.innerHTML = `Modal title 1 <span class = "cancel flex jc-c align-c p-abs"> X </span>`
    modalText.innerHTML = `<p class="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.</p>`
    modalBtn.innerHTML = `<button class="modal__btn">Button &rarr;</button>`

    box.className = "box"
    modalWrapper.className = "modal"
    modalheader.className = "modal__title p-rel"
    // modalText.className = ""
    // modalBtn.className = "" 
    
    

    cancelButton = document.querySelector(".cancel")

    function clearModal() {
       
        cardUI.classList.remove("d-none") 

        box.remove()

        console.log("clicked");

    }

    cancelButton.addEventListener("click",clearModal)

   

}

orderBtn.addEventListener("click", displayModal)