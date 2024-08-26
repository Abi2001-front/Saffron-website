document.getElementById('infoform').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    // Validate that all fields are filled
    if (name && email && mobile && message) {
        alert('Thank you for your message, ' + name + '. Have a nice day!');
        document.getElementById('infoform').reset();
    } else {
        alert('Please fill in all fields.');
    }
});


var mainbar= document.querySelector('.fontclass1');


function openbar(){
mainbar .style.left="0";
}
function closebar(){
    mainbar.style.left="-70%";
}

