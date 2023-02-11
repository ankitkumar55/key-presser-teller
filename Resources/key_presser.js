
const result = document.querySelector('.pressed')
window.addEventListener('keydown', (e)=> {
        result.innerHTML = e.key;
});