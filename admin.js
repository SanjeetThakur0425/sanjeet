function showform() {
    document.querySelector('.add-property-form').classList.add('showadd-property-form');
}
function closeform() {
    document.querySelector('.add-property-form').classList.remove('showadd-property-form');
}

var c= document.querySelector('span');
c.addEventListener('click',closeform);

// dont understand this code 

document.getElementById('image').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const preview = document.getElementById('imagePreview');
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            preview.src = event.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none';
    }
});