// 这里是第一个手机框的验证已经ok
    function lose1(){
        if(phone.value.length>11){
        aa1.style.visibility="visible";
        // phone.style.className="shouji";
        aa1.innerHTML="用户手机号格式错误";
        }else if(phone.value.length<11){
        aa1.style.visibility="visible";
        aa1.innerHTML="用户手机号格式错误";
        }else{
            aa1.innerHTML="用户号码输入正确";
        }
        for(var i=0;i<phone.value.length;i++){
            if(phone.value[0]!=1){
                aa1.innerHTML="用户手机号码首位为1";
            }else if(phone.value[1]!=3&&phone.value[1]!=4&&phone.value[1]!=5&&phone.value[1]!=7&&phone.value[1]!=8){
                aa1.innerHTML="用户第二位输入不合法";
            }
        }
    }
    // 这里是密码验证框；未完善；
    // var newArr1=[];
    // var arr1=[0,...9];
    // for(i=1;i<=1;i++){

    // }
    function lose2(){
         var bjo=/^[\w_]{6,18}$/;
         var str = document.getElementById("upwd").value;
         if(str.length>18){
             aa2.style.visibility="visible";
             aa2.innerHTML="包含数字、字母、下划线的6-18位";
         }else if(str.length<6){
             aa2.style.visibility="visible";
             aa2.innerHTML="包含数字、字母、下划线的6-18位";
         }else if(!bjo.test(str)){
            aa2.innerHTML="输入密码需包含数字，字母，下划线的6-18位";
         }else{
              aa2.innerHTML="输入成功";
          }
        // 判断密码中是否含有字母下划线和数字；
         
        //  if(!bjo.test(str)){
        //      aa2.innerHTML="输入密码需包含数字，字母，下划线的6-18位";
        //  }else{
        //      aa2.innerHTML="输入成功"
        //  }
    }
    // 这是确认密码框；这个简单;已经ok；
    // function lose3(){
    //     if(upwd1.value!=upwd.value){
    //         aa3.style.visibility="visible";
    //         aa3.innerHTML="请确认密码是否正确";
    //     }else{
    //         aa3.innerHTML="输入成功";
    //     }
    // }
     //验证验证码是否正确；ok;
    //  var newArr=[];
    //  var arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    //  for(i=1;i<=4;i++){
    //      var index=Math.floor(Math.random()*arr.length);
    //      newArr.push(arr[index]);
    //      arr.splice(index,1);
    //  }
    //  pre1.innerHTML=newArr.join("");
    // function lose4(){
    //     if(upwd2.value!=pre1.innerHTML){
    //         aa4.style.visibility="visible";
    //     aa4.innerHTML="用验证码错误";
    //     }else{
    //         aa4.innerHTML="验证码输入正确";
    //     }
    // }
    // 这里是ajax异步操作；ok
    function show(){
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var result=xhr.responseText;
                alert("注册成功！");
            }
        }
        xhr.open("post","/router/register",true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        var formdata="phone="+phone.value+"&upwd="+upwd.value;
        xhr.send(formdata);
    }