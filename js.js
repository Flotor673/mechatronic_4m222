document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const message = document.getElementById('message').value;
    const photo = document.getElementById('photo').files[0];

    if (!photo) {
        alert('Пожалуйста, загрузите фото.');
        return;
    }

    const formData = new FormData();
    formData.append('message', message);
    formData.append('photo', photo);

    fetch('/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById('postForm').reset();
    })
    .catch(error => console.error('Ошибка:', error));
});