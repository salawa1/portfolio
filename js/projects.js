function showSection(sectionId) {
    document.getElementById("cs-projects").style.display = "none";
    document.getElementById("accounting-projects").style.display = "none";

    document.getElementById(sectionId).style.display = "flex";
}