validate = () => {
    $(document).ready(function () {
        $.getJSON("../Json/LoginData.json", (data) => {
            let username = document.getElementById('uname').value;
            let password = document.getElementById('password').value;
            $.each(data, (key, value) => {
                console.log(key.value);
                if (value.username == username) {
                    if (value.password == password) {
                        document.getElementById('passworderror').innerHTML = "success";
                        window.location = './dashboard.html'
                    }
                    else {
                        document.getElementById('passworderror').innerHTML = "invalid username and password";
                        return false;
                    }
                }
                else {
                    document.getElementById('usererror').innerHTML = "";
                    return false
                }
            })
        })
    })
}