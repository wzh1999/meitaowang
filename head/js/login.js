//登陆按钮和注册的按钮样式样式
function changeBtn() {
    var btns = document.getElementsByName("btnLogin");
    for (var i = 0; i < btns.length; i++) {
        btns[i].onmouseover = function () {
            this.src = "images/login_over.jpg"
        }
        btns[i].onmouseout = function () {
            this.src = "images/login.jpg";
        }
    }
}

function a() {
    var btnse = document.getElementsByName("btnregister");
    for (var i = 0; i < btnse.length; i++) {
        btnse[i].onmouseover = function () {
            this.src = "images/reg_over.jpg";
        }
        btnse[i].onmouseout = function () {
            this.src = "images/register.jpg";
        }
    }


}
//手机登陆和注册选项卡显示和隐藏
function setTab(id) {
    if (id == 1) {
        document.getElementById("emailreg").style.display = "block";
        document.getElementById("phonereg").style.display = "none";
        document.getElementById("one1").className = "current";
        document.getElementById("one2").className = "";
    }
    if (id == 2) {
        document.getElementById("emailreg").style.display = "none";
        document.getElementById("phonereg").style.display = "block";
        document.getElementById("one1").className = "";
        document.getElementById("one2").className = "current";
    }
}
function setTab2(id) {
    if (id == 1) {
        document.getElementById("EmailUser").style.display = "block";
        document.getElementById("TelUser").style.display = "none";
        document.getElementById("two1").className = "current";
        document.getElementById("two2").className = "";

    }
    if (id == 2) {
        document.getElementById("EmailUser").style.display = "none";
        document.getElementById("TelUser").style.display = "block";
        document.getElementById("two1").className = "";
        document.getElementById("two2").className = "current";

    }
}

//一级和二级连框
var citys = new Array();
citys["北京"] = ["海淀", "门头", "房山", "大兴", "顺义"];
citys["上海"] = ["黄浦", "卢湾", "徐汇", "长宁", "虹口", "宝山"];
citys["天津"] = ["和平", "东丽", "河东", "河西", "塘沽", "大港", "静海"];
citys["黑龙江"] = ["哈尔滨", "齐齐哈尔", "牡丹江", "佳木斯", "大庆", "绥化"];
citys["湖北"] = ["武汉", "宜昌", "荆州", "襄樊", "黄石", "荆门", "十堰", "孝感"];
function initDep() {
    var obj = document.getElementById("city");
    for (var index in citys) {
        var option = document.createElement("option");
        option.text = index;
        option.value = index;
        obj.options.add(option);
    }
}
function fill() {
    var empobj = document.getElementById("emp");
    empobj.options.length = 0;
    var currentDep = document.getElementById("city").value;
    for (var index in citys[currentDep]) {
        var option = document.createElement("option");
        option.value = citys[currentDep][index];
        option.text = citys[currentDep][index];
        empobj.options.add(option);
    }
}

//文本框的输入格式验证
function $(id) {
    return document.getElementById(id)
}
function checkEmil() {
    var user = $("txtEmail").value;//拿到文本框的值;
    var mail = $("mail");//拿到提示的值
    if (user == "") {
        mail.innerHTML = "必须输入";
        mail.style.color = "red";
        return false;
    }
    if (user.indexOf("@") == -1 && user.indexOf(".") == -1) {
        mail.innerHTML = "邮箱格式有误请输入，正确的邮箱";
        mail.style.color = "red";
        return false;//如果条件成立则跳出if判断
    }
    mail.innerHTML = "输入正确";
    mail.style.color = "black"
    return true;
}
function checkUser() {
    var textUser = $("userName").value;
    var name = $("name");
    if (textUser == "") {
        name.innerHTML = "必须输入";
        name.style.color = "red";
        return false;
    }
    if (textUser.length < 4 || textUser.length > 16) {
        name.innerHTML = "长度不在4到6之间";
        name.style.color = "red";
        return false;
    }
    for (var i = 0; i < textUser.length; i++) {
        if (isNaN(textUser) == false) {
            name.innerHTML = "你输入数字包含了数字";
            name.style.color = "red";
            return false;
        }
    }
    name.innerHTML = "输入正确";
    name.style.color = "black";
    return true;
}
function checkpwd() {
    var pwd = $("pwd1").value;
    var pass = $("pass");
    if (pwd == "") {
        pass.innerHTML = "必须输入";
        pass.style.color = "red";
    }
    for (var i = 0; i < pwd1.length; i++) {
        if (pwd.length < 4 || pwd.length > 16) {
            pass.innerHTML = "长度不在6到32之间";
            pass.style.color = "red";
            return false;
        }
    }
   pass.innerHTML = "输入完成";
   pass.style.color = "black";
    return true;
}
function checkpwds() {
    var pwd1 = $("pwd2").value;
    var pass1 = $("pass1");
    var pwd = $("pwd1").value;
  
        if (pwd1!= pwd) {
            pass1.innerHTML = "两次输入密码不一致";
            pass1.style.color = "red";
            return false;

        }
        pass1.style.color = "black";
    pass1.innerHTML = "两次密码一致";
    return true;
}
function check() {
    if (checkEmil() && checkUser() && checkpwd() && checkpwds()) {
        return true;
    }
    return false;
}