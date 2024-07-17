
import { AddTrackPanel } from "./AddTrackPanel/AddTrackPanel.js";
import { List } from "./List/List.js";

export function Tracklist(someTracks) {
    const container = document.createElement("div");
    container.classList.add("tracklist");

    container.append(AddTrackPanel(), List(someTracks));

    return container;
}