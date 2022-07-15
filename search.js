const search = () => {
    const searchBox = document.getElementById("searchBox").value;
    const google = "https://www.google.com/search?q=";
    let searchV = ''
    const searchValue = searchBox.split(' ').forEach(element => {
        searchV += element+'+'
    });
    location.href =google+searchV;
}