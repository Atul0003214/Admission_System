function validateForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var utype = document.getElementById("utype").value;
    var fid = document.getElementById("fid").value;
    var email = document.getElementById("email").value;
    var psw = document.getElementById("psw").value;


    if ((fname.length < 2) || (fname.length > 20)) {
        alert("Length of First Name should be between 2 and 20 characters");
        return false;
    }

    if ((lname.length < 2) || (lname.length > 20)) {
        alert("Length of last name should be between 2 and 20 characters");
        return false;
    }
    if ((utype == "student") && (fid.length >= 1)) {
        alert("Faculty Id should be blank for Student.")
        return false;
    }
    if ((utype == "faculty") && (fid.length == 0)) {
        alert("Faculty Id should not be blank for Faculty.")
        return false;
    }

    if (!(email.includes("@") && (email.charAt(email.length - 4) == ".") || (email.charAt(email.length - 3) == "."))) {
        alert("please enter valid email address")
        return false
    }

    if ((psw.length < 2) || (psw.length > 20)) {

        alert("The password length must be between 2 and 20 and include at least one capitial character, one small character, one number and one special character from @_!#");
        return false;
    } else {
        var special_car = "@_!#"
        var capital_car = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var small_car = "abcdefghijklmnopqrstuvwxyz"
        var num_car = "0123456789"
        var special_flag = false
        var capital_flag = false
        var small_flag = false
        var num_flag = false
        for (let i in psw) {
            if (special_car.includes(psw[i])) { special_flag = true }
            else if (capital_car.includes(psw[i])) { capital_flag = true }
            else if (small_car.includes(psw[i])) { small_flag = true }
            else if (num_car.includes(psw[i])) { num_flag = true }
        }
        if (special_flag && capital_flag && small_flag && num_flag) {
            return true
        } else {
            alert("The password length must be between 2 and 20 and include at least one capitial character, one small character, one number and one special character from @_!#")
            return false
        }

    }
}


