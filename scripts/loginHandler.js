function login(user,password){
    //var url= 'https://howyoudoin/login?userName='+user+'&password='+password;
    if(user.length == 0){
        alert("Please Enter your Username");
    }
    else if(password.length == 0){
        alert("Please Enter you Password");
    }

    axios.get('https://howyoudoin/login?userName='+user+'&password='+password)
        .then(function (response) {
            console.log(response);
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

    axios.get('https://howyoudoin/login?userName='+user+'&password='+password)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            alert("Error! Please check your Username or Password.");
        });
}
