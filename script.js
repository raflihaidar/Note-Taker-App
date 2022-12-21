// Menyeleksi Element
const inputText = document.querySelector('#text');
const button = document.querySelector('#button');
const notes = document.querySelector('.notes');
const p = document.querySelector('#p');




// Bikin Event Listener
button.addEventListener('click', () => {
    if(!inputText.value == '') {
        const card = createCard(inputText.value);
        p.style.display= 'none';
        notes.innerHTML += card;
        inputText.value = '';
    } else {
        alert('Input cannot be empty');
    }
});

document.addEventListener('click', (btn) => {
        if(btn.target.classList.contains('btn-card')) {
            btn.target.parentElement.parentElement.style.display = 'none';
        }
});


// Bikin function
function createCard(value) {
    return `<div class="card w-95">
                <div class="card-body">
                    <h5 class="card-title">Notes</h5>
                    <p class="card-text">${value}</p>
                    <a class="btn btn-success btn-card">Close</a>
                </div>
            </div>`
}