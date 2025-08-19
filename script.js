let grid = document.querySelector(".container");
let change = document.querySelector(".change");
grid_side = 850;

grid.ondragstart = () => { return false };
grid.ondrop = () => { return false };


function build(current_size) {

    let cell_width, cell_height;
    cell_height = cell_width = grid_side / current_size - 0.0000001;
    let box = document.createElement("div");
    box.style["width"] = cell_width + 'px';
    box.style['height'] = cell_height + 'px';
    box.style['border'] = '1px solid black';
    box.style['box-sizing'] = 'border-box';
    box.style['opacity'] = 0.5;
    grid.addEventListener("mousemove", function (e) {
        if (e.target.className == 'container' || e.buttons != 1) return;
        let colors = ['red', 'green', 'blue', 'black'];
        let rnd = Math.floor(Math.random() * 3);
        // console.log(rnd);
        e.target.style['background-color'] = colors[3];
        let crnt = e.target.style['opacity'];
        e.target.style['opacity'] = (crnt * 100 + 20) / 100;
    });
    for (let i = 0; i < current_size * current_size; i++) {
        let new_box = box.cloneNode();
        grid.appendChild(new_box)
    }
}

function empty_grid() {

    let list = document.querySelectorAll('.container div');
    for (let i = 0; i < list.length; i++) {
        list[i].remove();
    }
}

function take_size() {
    let value = prompt('please enter grid side size (one number at most 100 )');

    if (value == null || value == '') return;
    empty_grid();
    build(value);
}

change.addEventListener("click", take_size);
build(40);






