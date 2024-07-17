
import { ButtonsEditDelete } from "../../../../../Common/ButtonsEditDelete.js";

export function PlaylistInfo(somePlaylistInfo) {
    const {coverImgUrl, title, tracksCount} = somePlaylistInfo;

    const container = document.createElement("div");
    container.classList.add("playlist-info");

    const img = document.createElement("img");
    img.classList.add("playlist-cover-image");
    img.src = coverImgUrl;

    const wrapper = document.createElement("div");
    
    const titleElement = document.createElement("h2");
    titleElement.classList.add("title");
    titleElement.innerText = title;

    const tracksCountElement = document.createElement("div");
    tracksCountElement.classList.add("track-count");
    tracksCountElement.innerText = tracksCount + " tracks";

    wrapper.append(titleElement, tracksCountElement);

    // Функция ButtonsEditDelete
    /*
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
    

    container.append(img, wrapper, buttonsContainer);
    */
    
    container.append(img, wrapper, ButtonsEditDelete());

    return container;
}