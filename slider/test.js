const dropZone = document.getElementById('drop-area');
const inputElement = document.getElementById('uploadFile1');
const img = document.querySelector('#drop-area img');
const img3 = document.querySelector('active');
const icon = document.querySelector('#drop-area i');
const p = document.querySelector('#drop-area p');
const div = document.querySelector('#drop-area > div');

// Handle file input change
inputElement.addEventListener('change', function (e) {
    handleFile(this.files[0]);
});

// Handle drag and drop
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragging');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragging');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragging');
    const file = e.dataTransfer.files[0];
    inputElement.files = e.dataTransfer.files; // Assign the file to the input element
    handleFile(file);
});

function handleFile(file) {
    if (file) {
        img.style.display = "block";
        p.style.display = 'none';
        icon.style.display = 'none';
        div.classList.add('fit-me');

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            img.src = reader.result;
            img.alt = file.name;
        };

    }
}