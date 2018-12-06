function login(user,password){
    //var url= 'https://howyoudoin/login?userName='+user+'&password='+password;
    if(user.length == 0){
        alert("Please Enter your Username");
    }
    else if(password.length == 0){
        alert("Please Enter you Password");
    }

    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 1000*3600;
    now.setTime(expireTime);
    document.cookie = "Username="+ user+";expires="+now.toGMTString()+";path=/;"

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

function Track(){
    //console.log(document.getElementById("usernameDashboard").value);
    //console.log(username);

    console.log(document.cookie);
    let cookie = document.cookie;
    let cook = cookie.split("Username=");
    console.log(cook);
    let co;
    if(cook[1].indexOf(";")> -1){
        co = cook[1].split(";");
        //console.log(cook[1]);
        console.log("here");
        cook[1] = co[0];
    }
    console.log(co);
    let name = document.getElementById("usernameDashboard").innerText;
    console.log(name);
    let nameNew = name.replace("USERNAME",cook[1]);
    console.log(nameNew);
    document.getElementById("usernameDashboard").innerText = nameNew;

    axios.get("https://desolate-waters-36626.herokuapp.com/moodTracker",{
        params: {
            userName : cook[1]
        }
    })
        .then(function (response) {
            //console.log(response.data.data);
            let emotionData = response.data.data;

            let H = document.getElementById("Happiness").innerText;
            H = H.replace("#", emotionData.happiness);
            document.getElementById("Happiness").innerText = H;

            let sur = document.getElementById("Surprise").innerText;
            sur = sur.replace("#", emotionData.surprise);
            document.getElementById("Surprise").innerText = sur;

            let sad = document.getElementById("Sadness").innerText;
            sad = sad.replace("#", emotionData.sadness);
            document.getElementById("Sadness").innerText = sad;

            let F = document.getElementById("Fear").innerText;
            F = F.replace("#", emotionData.fear);
            document.getElementById("Fear").innerText = F;

            let A = document.getElementById("Anger").innerText;
            A = A.replace("#", emotionData.anger);
            document.getElementById("Anger").innerText = A;

            let D = document.getElementById("Disgust").innerText;
            D = D.replace("#", emotionData.disgust);
            document.getElementById("Disgust").innerText = D;

        })
        .catch(function (error) {
            console.log(error);
        });



}

function processEmotion(emotion){
    console.log(document.cookie);
    let cookie = document.cookie;
    let cook = cookie.split("Username=");
    console.log(cook);
    let co;
    if(cook[1].indexOf(";")> -1){
        co = cook[1].split(";");
        //console.log(cook[1]);
        console.log("here");
        cook[1] = co[0];
    }

   let now = new Date();
   let time = now.getTime();
   let expireTime = time + 1000*60;
   now.setTime(expireTime);
   document.cookie = "Emotion="+ emotion+";expires="+now.toGMTString()+";path=/;";

    axios({
            method: 'post',
            url: "https://desolate-waters-36626.herokuapp.com/iFeel",
            params:{
                userName: cook[1],
                emotion: emotion
            }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    window.location.replace("./emotions.html");
}

function Loademotion(){
    console.log(document.cookie);
    let emo = document.cookie;
    let e = emo.split("; Emotion=");
    document.getElementById("emotionTitle").innerText = e[1];
    let divYoutube1 = document.createElement('IFRAME');
    let divYoutube2 = document.createElement('IFRAME');
    divYoutube1.width="560px";
    divYoutube1.height= "315px";
    divYoutube2.width="560px";
    divYoutube2.height= "315px";
    let src1;
    let src2;
    if(e[1] === "Happiness"){
        src1 = "https://www.youtube.com/embed/mxMZy_d0vvA";
        src2 = "https://www.youtube.com/embed/Fpr-G5kWeaE";
    }
    else if(e[1] === "Sadness"){
        src1 = "https://www.youtube.com/embed/GvwfGQeT3rc";
        src2 = "https://www.youtube.com/embed/videoseries?list=PLinS5uF49IBo8HLKBDAjQaeiN4TjHi75Q";
    }
    else if(e[1] === "Fear"){
        src1 = "https://www.youtube.com/embed/zWkS29eKwWc";
        src2 = "https://www.youtube.com/embed/55xAciyFbto";
    }
    else if(e[1] === "Anger"){
        src1 = "https://www.youtube.com/embed/d_5DU5opOFk";
        src2 = "https://www.youtube.com/embed/BsVq5R_F6RA";
    }
    else if(e[1] === "Disgust"){
        src1 = "https://www.youtube.com/embed/bWfTqhZWBv8";
        src2 = "https://www.youtube.com/embed/MLAa_alX3X4";
    }
    else if(e[1] === "Surprise"){
        src1 = "https://www.youtube.com/embed/nWMNAsiiK2E";
        src2 = "https://www.youtube.com/embed/DjSaXiULs5Q";
    }
    divYoutube1.src = src1;
    divYoutube2.src = src2;
    document.getElementById('1').appendChild(divYoutube1);
    document.getElementById('2').appendChild(divYoutube2);
}