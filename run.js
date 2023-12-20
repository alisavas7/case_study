const run = document.querySelector("[data-testid=input-form]");

function on_run (event) {
    event.preventDefault();
    
    var err = false;
    const prompt_error = document.querySelector("[error-name=prompt-error]");
    if (prompt_input.value == "-- Enter a prompt --") {
        err = true;
        if (prompt_error == null) {
            document.querySelector("[data-name=prompt]").after(raise_error("Prompt field is required.", "prompt-error"));
        }
    } else {
        err = false;
        if (prompt_error) {
            prompt_error.remove();
        }
    }

    const image_input = document.querySelector("[data-testid=simple-preview]");
    const image_error = document.querySelector("[error-name=image-error]");
    const file_error = document.querySelector("[data-name=file-error]");
    if (image_input == null) {
        err = true;
        if (file_error) {
            file_error.remove();
        }
        if (image_error == null) {
            document.querySelector("[data-name=image]").after(raise_error("Image field is required.", "image-error"));
        }
    } else {
        err = false;
        if (image_error) {
            image_error.remove();
        }
    }

    const hex_error = document.querySelector("[error-name=hex-error]");
    if (hex_code.value == "-- Enter a hex code --") {
        err = true;
        if (hex_error == null) {
            document.querySelector("[data-name=color]").after(raise_error("Hexcode field is required.", "hex-error"));
        } 
    } else {
        err = false;
        if (hex_error) {
            hex_error.remove();
        }   
    }

    const img = document.querySelector("[data-testid=value-image-image]");
    if (!err) {
        sessionStorage.setItem('image_source', img.src);
        console.log(img.src);
        window.location.replace("https://alisavas7.github.io/task_two/");
    }
}

async function predict(image_source, prompt_source){
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
}

function raise_error (message, type) {
    
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
    error.setAttribute('error-name', type);
    p_error.textContent = message;
    error.append(errorSvg);
    error.append(p_error);

    return error;
}

run.addEventListener(
    'submit',
    on_run,
    false
);
