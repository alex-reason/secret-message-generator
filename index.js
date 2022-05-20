const {hash} = window.location;

const message = atob(hash.replace('#', ''));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('#message-header').innerText = message;
}


document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    //to convert to Base 64: btoa(); to convert back: atob();
    const encrypted = btoa(input.value);
    
    document.querySelector('#encrypted-message').innerText = `encrypted message: ${encrypted}`;

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select(); 

});
