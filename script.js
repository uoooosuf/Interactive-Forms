var checkBox =
    document.getElementById('petCheckBox');
var selectionDiv =
    document.getElementById('petSelection');
checkBox.addEventListener('change', function (event) {
    if (checkBox.checked == true) {
        selectionDiv.style.display = 'Block';
    } else {
        selectionDiv.style.display = 'None';
    }
});    
