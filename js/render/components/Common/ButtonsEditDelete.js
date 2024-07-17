
export function ButtonsEditDelete () {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const editBtn = document.createElement("button");
    const editButtonImage = document.createElement("img");
    editButtonImage.classList.add("button-icon");
    editButtonImage.src = "img/icons/edit.svg";

    editBtn.append(editButtonImage);

    const deleteBtn = document.createElement("button");
    const deleteButtonImage = document.createElement("img");
    deleteButtonImage.classList.add("button-icon");
    deleteButtonImage.src = "img/icons/basket.svg";
    
    deleteBtn.append(deleteButtonImage);

    buttonsContainer.append(editBtn, deleteBtn);

    return buttonsContainer;
}