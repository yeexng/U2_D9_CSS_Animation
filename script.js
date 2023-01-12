function deleteTrackList() {
    let tr = document.querySelectorAll("tr");
    let td = document.createElement("td")
    let btn = document.createElement("input");
    btn.type = "button";
    btn.className = "btn btn-danger";
    btn.innerHTML = "Delete";
    // btn.onclick = 
    tr.appendChild(td);
    td.appendChild(btn);
}