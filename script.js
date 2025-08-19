let grid = document.querySelector(".container");
grid_side = 850;

function build(current_size) {

    let cell_width, cell_height;
    cell_height = cell_width = grid_side / current_size;
    let box = document.createElement("div");
    box.style["width"] = cell_width + 'px';
    box.style['height'] = cell_height + 'px';
    box.style['border'] = '1px solid black';
    box.style['box-sizing'] = 'border-box';
    // box.style['background-color'] = 'black'
    // box.style['flex'] = '0';

    for (let i = 0; i < current_size * current_size; i++) {
        let new_box = box.cloneNode(true);
        grid.appendChild(new_box)
    }
}

build(16);



