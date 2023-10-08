const fileInput = document.getElementById('fileInput');
const customButton = document.getElementById('customButton');

fileInput.addEventListener('change', function () {
    const files = this.files;
    if (files.length > 0) {
        customButton.textContent = files[0].name;
    } else {
        customButton.textContent = 'Upload content';
    }
});
