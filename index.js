const presentation = document.querySelector("[role=presentation]");
const image = document.getElementById('image');
const prompt_input = document.getElementById("prompt");
const hex_code = document.getElementById("color");
const reset = document.querySelector("[data-command=reset]");

const div_class = ['truncate', 'min-w-0'];
const p_class = ['text-r8-sm', 'text-r8-gray-11', 'truncate'];
const preview_class = ['flex', 'items-center', 'mt-1', 'overflow-hidden'];
const preview_div = ['flex-shrink-0', 'ml-2'];

function on_click () {
    document.getElementById('image').click();
    presentation.addEventListener('change', display_file, false);
    

    function display_file ( event ) {
        event.stopImmediatePropagation();
        var presentation = event.srcElement;
        
        if (!presentation.files) {
            document.querySelector("[data-name=image]").after(raise_error("This field is required."));
            return;
        }

        /*------------image src---------------*/
        var file_name = presentation.files[0].name;
        var file = presentation.files[0];
        var has_error = document.querySelector("[data-name=file-error]");
        var preview = document.querySelector("[data-testid=simple-preview]");

        if (!(file_name.match(/\.(png)$/i))) {

            image.textContent = "";

            if (document.querySelector("[error-name=image-error]")) {
                document.querySelector("[error-name=image-error]").remove();
            }

            if (has_error == null) {
                document.querySelector("[data-name=image]").after(raise_error("Only .png files are allowed."));
            }
            
            return;
        } else {

            if (preview != null) {
                preview.remove();
            }

            if (has_error != null) {
                has_error.remove();
            }

        }

        image.textContent = file_name;
        const p = document.createElement('p'); 
        p.setAttribute('data-testid', 'p-info');
        p_class.map(p_ => {p.classList.add(p_)});
        p.textContent = image.textContent;

        const div = document.createElement('div');
        div_class.map(cls => {div.classList.add(cls)});
        div.append(p);

        const simple_preview = document.createElement('div');
        simple_preview.setAttribute('data-testid', 'simple-preview');
        preview_class.map(preview => {simple_preview.classList.add(preview)});
        simple_preview.append(div);

        if (document.querySelector("[data-testid=value-image-input]") != null){
            document.querySelector("[data-testid=value-image-input]").remove();
        }
        document.querySelector('[data-testid=image-file-input]').append(image_src(file));
        /*------------------------------------*/

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

        if (document.querySelector("[error-name=image-error]")) {
            document.querySelector("[error-name=image-error]").remove();
        }

        const tb = document.querySelector("[data-testid=trash]");
        const img = document.querySelector("[data-testid=value-image-input]");
        // trash button click
        tb.addEventListener(
            'click',
            ( evt ) => {
                evt.stopPropagation();
                simple_preview.remove();
                image.textContent = p.textContent = "";
                event.target.value = "";
                img.remove();
            }
        );

        // reset button click
        reset.addEventListener(
            'click',
            () => {
                image.textContent = p.textContent = "";
                event.target.value = "";
                if (simple_preview) {
                    simple_preview.remove();
                }
                if (img) {
                    img.remove();
                }
            },
            false
        );

    }

    function raise_error (message) {
    
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

    function image_src (file) {
        const img_div = document.createElement('div');
        img_div.setAttribute('data-testid', 'value-image-input');
        const img_a = document.createElement('a');
        const url = URL.createObjectURL(file);

        img_a.setAttribute('data-testid', 'value-image-url-image');
        img_a.setAttribute('href', url);
        img_a.setAttribute('rel', 'noreferrer');
        img_a.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('data-testid', 'value-image-image');
        img.setAttribute('src', url);
        img.setAttribute('alt', 'image');
        img.setAttribute('class', 'max-w-full');
        img_a.append(img);
        img_div.append(img_a);
        return img_div;
    }

};

function on_reset () {
    // reset img preview
    const img = document.querySelector("[data-testid=value-image-input]");
    if (img) {
        img.remove();
    }
    // reset prompt
    const prompt_error = document.querySelector("[error-name=prompt-error]");
    prompt_input.textContent = "-- Enter a prompt --";
    if (prompt_error) {
        prompt_error.remove();
    }
    // reset image upload
    const type_error = document.querySelector("[data-name=file-error]");
    const image_error = document.querySelector("[error-name=image-error]");
    if (type_error) {
        type_error.remove();
    }
    if (image_error) {
        image_error.remove();
    }
    // reset hex code
    const hex_error = document.querySelector("[error-name=hex-error]");
    if (hex_error) {
        hex_error.remove();
    }
}

presentation.addEventListener(
    'click',
    on_click,
    false
);

prompt_input.addEventListener(
    'change',
    (prompt_event) => {
        prompt_input.textContent = prompt_event.target.value;
        const prompt_error = document.querySelector("[error-name=prompt-error]");
        if (prompt_error) {
            prompt_error.remove();
        };
        reset.addEventListener(
            'click',
            () => {prompt_input.textContent = prompt_event.target.value ="-- Enter a prompt --";},
            false
        )
    },
    false
);

hex_code.addEventListener(
    'change',
    (hex_event) => {
        hex_code.textContent = hex_event.target.value;
        const hex_error = document.querySelector("[error-name=hex-error]");
        if (hex_error) {
            hex_error.remove();
        };
        reset.addEventListener(
            'click',
            () => {
                hex_code.textContent = hex_event.target.value ="-- Enter a hex code --";
            },
            false
        )
    },
    false
);

reset.addEventListener(
    'click',
    on_reset,
    false
);