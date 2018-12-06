
function login(user,password){
    //var url= 'https://howyoudoin/login?userName='+user+'&password='+password;
    if(user.length == 0){
        alert("Please Enter your Username");
    }
    else if(password.length == 0){
        alert("Please Enter you Password");
    }

    axios.get('https://desolate-waters-36626.herokuapp.com/login', {
        params: {
            userName : user,
            userPassword : password
        }
    })
        .then(function (response) {
            console.log(response);
            window.location.replace('./html/Dashboard.html');
        })
        .catch(function (error) {
            console.log(error);
            alert("Error! Please check your Username or Password.");
        });
}

function register(email,user,password){
    //var url= 'https://howyoudoin/login?userName='+user+'&password='+password;
    if(email.length == 0){
        alert("Please Enter your Email Address")
    }
    if(user.length == 0){
        alert("Please Enter your Username");
    }
    else if(password.length == 0){
        alert("Please Enter you Password");
    }

    axios.get('https://desolate-waters-36626.herokuapp.com/register', {
        params: {
            userName : user,
            userPassword : password,
            emailId : email
        }
    })
        .then(function (response) {
            window.location.replace('../index.html');
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            alert("Error! Please check if already registered or try new username");
        });
}

function processEmotion(emotion){
    alert("Here");
}