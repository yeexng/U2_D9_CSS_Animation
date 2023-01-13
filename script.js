window.onload = function () {
    deleteTrackList()
    
} 

function deleteTrackList() {
    let lastTds = document.querySelectorAll(".tracklist tr td:last-of-type")
    console.log(lastTds)

    for (let td of lastTds){
        td.innerHTML = ` 
        <button type="button" class="btn btn-danger" onclick="this.closest('tr').remove()">x</button> 
        `
    }

}
