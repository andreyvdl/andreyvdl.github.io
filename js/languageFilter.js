function filterProjects() {
    let filter = document.getElementById("languages");
    if (filter === null)
        return;

    let list = document.getElementsByTagName("project-node");
    if (list === null)
        return;

    if (filter.value === "undef") {
        clearFilter();
    } else {
        Array.from(list).forEach(n => {
            let languages = n.getAttribute("language").split(",");

            n.style.display = (languages.includes(filter.value) ? "block" : "none");
        });
    }
}

function clearFilter() {
    let filter = document.getElementById("languages");
    if (filter === null)
        return;
    filter.value = "undef";

    let list = document.getElementsByTagName("project-node");
    if (list === null)
        return;

    Array.from(list).forEach(n => {
        n.style.display = "block";
    });
}