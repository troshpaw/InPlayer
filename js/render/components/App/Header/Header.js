
export function Header() {
    const header = document.createElement("header");

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");

    const img = document.createElement("img");
    img.src = "img/logo/logo.svg";

    const logo = document.createElement("div");
    logo.innerText = "InPlayer";
    logo.classList.add("logo-name");

    headerContainer.append(img, logo);

    header.append(headerContainer);

    return header;
}