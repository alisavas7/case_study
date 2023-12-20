const drop_zone = document.querySelector('[role=presentation]');
const image_zone = document.getElementById('image');
const logo_zone = document.getElementById('logo');
const p_c = ['text-r8-sm', 'text-r8-gray-11', 'truncate'];
const d_c = ['truncate', 'min-w-0'];
const prev_class = ['flex', 'items-center', 'mt-1', 'overflow-hidden'];

var zone = ((image_zone) ? image_zone: logo_zone);

drop_zone.addEventListener(
    'dragover',
    ( event ) => {
        event.preventDefault();
    }
);

drop_zone.addEventListener(
    'dragenter',
    () => {
        drop_zone.style.outline = 'dashed rgba(0,0,0,0.4) 1px';
    }
);

drop_zone.addEventListener(
    'dragleave',
    () => {
        drop_zone.style.outline = '';
    }
);

drop_zone.addEventListener(
    'drop',
    on_drop,
    false
);

async function on_drop( event ) {
    event.preventDefault();
    drop_zone.style.outline = '';
    var file;
    var items = (event.dataTransfer.items) ? event.dataTransfer.items : event.dataTransfer.files;
    var has_error = document.querySelector("[data-name=file-error]");

    if (items.length > 1) {
        if (has_error == null){
            drop_zone.after(raise_error("Only one file may be uploaded."));
        }
        return;
    }

    if (event.dataTransfer.items) { 
        file = [...event.dataTransfer.items][0].getAsFile();
    } else {
        file = [...event.dataTransfer.files][0];
    }

    if (has_error) {
        has_error.remove();
    }

    var preview = document.querySelector("[data-testid=simple-preview]");
    if (file.type.match(/\/(png)$/i)) {
        zone.textContent = file.name;

        if (preview) {
            preview.remove();
        }

        display_file();
    } else {
        drop_zone.after(raise_error("Only .png files are allowed."));
    }

    function raise_error(message) {
        /*---------------error svg-----------------*/
        const errorSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        errorSvg.setAttribute('width', '16');
        errorSvg.setAttribute('height', '16');
        errorSvg.setAttribute('fill', 'currentColor');
        errorSvg.setAttribute('viewBox', '0 0 256 256');
        
        const errorPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        errorPath.setAttribute(
            'd',
            'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z'
        );
        
        errorSvg.appendChild(errorPath);
        /*---------------error message-------------*/
        const error = document.createElement('div');
        const p_error = document.createElement('p');
        p_error.setAttribute('class', 'text-r8-sm');
        const err_class = ['mt-2', 'flex', 'items-center', 'text-r8-red-10', 'gap-1'];
        err_class.map(err => {error.classList.add(err)});
        error.setAttribute('data-name', 'file-error');
        p_error.textContent = message;
        error.append(errorSvg);
        error.append(p_error);

        return error;
    }

    function display_file() {
        const p = document.createElement('p');
        p.setAttribute('data-testid', 'p-info');
        p_c.map(p_ => {p.classList.add(p_)});
        p.textContent = zone.textContent;
        
        const div = document.createElement('div');
        d_c.map(d_ => {div.classList.add(d_)});
        div.append(p);
        
        const simple_preview = document.createElement('div');
        simple_preview.setAttribute('data-testid', 'simple-preview');
        prev_class.map(preview => {simple_preview.classList.add(preview)});
        simple_preview.append(div);

        /*------------trash svg---------------*/
        const trashSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const trashPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        trashSvg.setAttribute('width', '16');
        trashSvg.setAttribute('height', '16');
        trashSvg.setAttribute('fill', 'currentColor');
        trashSvg.setAttribute('viewBox', '0 0 256 256');
        
        trashPath.setAttribute(
            'd',
            'M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z'
        );

        trashSvg.appendChild(trashPath);
        
        /*------------trash button------------*/
        const button_div = document.createElement('div');
        button_div.setAttribute('data-testid', 'trash');
        const b_div_c = ['flex-shrink-0', 'ml-2'];
        b_div_c.map(b_div => {button_div.classList.add(b_div)});

        const button = document.createElement('button');
        button.setAttribute('data-testid', 'trash-button');
        const b_c = ['flex', 'items-center', 'justify-center'];
        b_c.map(b_ => {button.classList.add(b_)});
        button.setAttribute('type', 'button');
        
        button.appendChild(trashSvg);
        button_div.appendChild(button);
        simple_preview.append(button_div);
        /*------------------------------------*/

        var preview = document.querySelector("[data-testid='simple-preview']");
        var presentation = document.querySelector("[role=presentation]");
        if (preview == null) {
            presentation.append(simple_preview);
        } else {
            preview.remove();
            presentation.append(preview);
        }

        const tb = document.querySelector("[data-testid=trash]");
        tb.addEventListener(
            'click',
            ( evt ) => {
                evt.stopPropagation();
                simple_preview.remove();
                image.textContent = p.textContent = "";
                event.target.value = "";
            }
        );
    }

}