let parent = document.querySelector('.model-parent');
let button = document.querySelector('.btn');
let X = document.querySelector('.x');
let section = document.querySelector('section');


button.addEventListener('click', appear);



function appear() {
    parent.style.display = 'block';
    section.style.filter = "blur(10px)"

}

X.addEventListener('click', function () {
    parent.style.display = 'none'
    section.style.filter = "blur(0)"

})

parent.addEventListener('click', disappearParent);


function disappearParent(e) {
    if (e.target.className === "model-parent") {
        parent.style.display = 'none';
        section.style.filter = 'blur(0)'
    }
}