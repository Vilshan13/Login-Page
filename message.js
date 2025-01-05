document.getElementById('loginButton').addEventListener('click', function() {
            var username = document.getElementById('username').value;

            if (username) {
                document.getElementById('userNameDisplay').textContent = username;
            }
        }