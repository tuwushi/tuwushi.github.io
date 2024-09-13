
console.log("Enjoy exploring the website!");

document.querySelectorAll('.hobby-item').forEach(item => {
    item.addEventListener('click', () => {
        alert("You clicked on a hobby!");
    });
});