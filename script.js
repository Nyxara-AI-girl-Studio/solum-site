
function generateID() {
    const id = 'SLM-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    document.getElementById('solum-id').textContent = 'Your Solum ID: ' + id;
}
