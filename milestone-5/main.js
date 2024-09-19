document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    function validateForm() {
        var form = document.getElementById("resumeForm");
        if (!form.checkValidity) {
            alert("please fill all requierd field corectliy.");
            return false;
        }
        return true;
    }
    function generateResume() {
        var _a;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var addres = document.getElementById("addres").value;
        var skills = document.getElementById("skills").value;
        var education = document.getElementById("education").value;
        var experience = document.getElementById("experience").value;
        var picture = (_a = document.getElementById("picture").files) === null || _a === void 0 ? void 0 : _a[0];
        document.getElementById("display-name").innerText = name;
        document.getElementById("display-email").innerText = email;
        document.getElementById("display-phone").innerText = phone;
        document.getElementById("display-address").innerText = addres;
        document.getElementById("display-skills").innerText = skills;
        document.getElementById("display-education").innerText = education;
        document.getElementById("display-experience").innerText = experience;
        if (picture) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                document.getElementById("displaypic").src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            reader.readAsDataURL(picture);
        }
        ;
    }
    ;
    (_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        if (validateForm()) {
            generateResume();
        }
    });
    (_b = document.getElementById("name")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", generateResume);
    (_c = document.getElementById("picture")) === null || _c === void 0 ? void 0 : _c.addEventListener("input", generateResume);
    (_d = document.getElementById("email")) === null || _d === void 0 ? void 0 : _d.addEventListener("input", generateResume);
    (_e = document.getElementById("phone")) === null || _e === void 0 ? void 0 : _e.addEventListener("input", generateResume);
    (_f = document.getElementById("addres")) === null || _f === void 0 ? void 0 : _f.addEventListener("input", generateResume);
    (_g = document.getElementById("skills")) === null || _g === void 0 ? void 0 : _g.addEventListener("input", generateResume);
    (_h = document.getElementById("education")) === null || _h === void 0 ? void 0 : _h.addEventListener("input", generateResume);
    (_j = document.getElementById("experience")) === null || _j === void 0 ? void 0 : _j.addEventListener("input", generateResume);
    var workExprience = document.getElementById("workExperience");
    var workSkills = document.getElementById("workSkills");
    var workEducation = document.getElementById("workEducation");
    workExprience === null || workExprience === void 0 ? void 0 : workExprience.addEventListener("input", function (event) {
        var updateExperience = (event === null || event === void 0 ? void 0 : event.target).innerText;
        console.log(updateExperience);
    });
    workSkills === null || workSkills === void 0 ? void 0 : workSkills.addEventListener("input", function (event) {
        var updateSkills = (event === null || event === void 0 ? void 0 : event.target).innerText;
        console.log(updateSkills);
    });
    workEducation === null || workEducation === void 0 ? void 0 : workEducation.addEventListener("input", function (event) {
        var updateEducation = (event === null || event === void 0 ? void 0 : event.target).innerText;
        console.log(updateEducation);
    });
});
var sarableLink = document.getElementById("sharable-link");
sarableLink === null || sarableLink === void 0 ? void 0 : sarableLink.addEventListener("click", function () {
});
var downloadPdf = document.getElementById("downloadpdf");
downloadPdf === null || downloadPdf === void 0 ? void 0 : downloadPdf.addEventListener("click", function () {
    window.print();
});
function saveData() {
    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    // Save data to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    localStorage.setItem('skills', skills);
    localStorage.setItem('education', education);
    localStorage.setItem('experience', experience);
    // Redirect to display page
    window.location.href = 'index2.html';
}
