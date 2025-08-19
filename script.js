let grid = document.querySelector(".container");
let change = document.querySelector(".change");
grid_side = 850;

function build(current_size) {

    let cell_width, cell_height;
    cell_height = cell_width = grid_side / current_size;
    let box = document.createElement("div");
    box.style["width"] = cell_width + 'px';
    box.style['height'] = cell_height + 'px';
    box.style['border'] = '1px solid black';
    box.style['box-sizing'] = 'border-box';
    grid.addEventListener("mouseover", function (e) { if (e.target.className == 'container') return; e.target.style['background-color'] = 'black'; });
    for (let i = 0; i < current_size * current_size; i++) {
        let new_box = box.cloneNode(true);
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
    let value = prompt('please enter grid side size');
    empty_grid();
    build(value);
}

change.addEventListener("click", take_size);
build(16);






