document.addEventListener("DOMContentLoaded" , ()=>{
    function validateForm(){
        const form = document.getElementById("resumeForm") as HTMLFormElement;
        if(!form.checkValidity){
            alert("please fill all requierd field corectliy.")
            return false;
        }
        return true;
    }

    function generateResume(){
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const addres = (document.getElementById("addres") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const picture = (document.getElementById("picture") as HTMLInputElement).files?.[0];

        (document.getElementById("display-name") as HTMLElement).innerText = name;
        (document.getElementById("display-email") as HTMLElement).innerText = email;
        (document.getElementById("display-phone") as HTMLElement).innerText = phone;
        (document.getElementById("display-address") as HTMLElement).innerText = addres;
        (document.getElementById("display-skills") as HTMLElement).innerText = skills;
        (document.getElementById("display-education") as HTMLElement).innerText = education;
        (document.getElementById("display-experience") as HTMLElement).innerText = experience;

        if(picture){
            const reader = new FileReader();
            reader.onload = function (e){
            (document.getElementById("displaypic") as HTMLImageElement).src = e.target?.result as string;
            }
            reader.readAsDataURL(picture);
        };
    };

    
    document.getElementById("resumeform")?.addEventListener("submit",function(event){
        event.preventDefault();
        if(validateForm()){
            generateResume();
        }
});

    document.getElementById("name")?.addEventListener("input" ,generateResume);
    document.getElementById("picture")?.addEventListener("input" ,generateResume);
    document.getElementById("email")?.addEventListener("input" ,generateResume);
    document.getElementById("phone")?.addEventListener("input" ,generateResume);
    document.getElementById("addres")?.addEventListener("input" ,generateResume);
    document.getElementById("skills")?.addEventListener("input" ,generateResume);
    document.getElementById("education")?.addEventListener("input" ,generateResume);
    document.getElementById("experience")?.addEventListener("input" ,generateResume);

    const workExprience = document.getElementById("workExperience");
    const workSkills = document.getElementById("workSkills");
    const workEducation = document.getElementById("workEducation");

    workExprience?.addEventListener("input", (event)=>{
        const updateExperience = (event?.target as HTMLElement).innerText;
        console.log(updateExperience);
        
    })

    workSkills?.addEventListener("input", (event)=>{
        const updateSkills = (event?.target as HTMLElement).innerText;
        console.log(updateSkills);
        
    })

    workEducation?.addEventListener("input", (event)=>{
        const updateEducation = (event?.target as HTMLElement).innerText;
        console.log(updateEducation);
        
    })

})
const sarableLink = document.getElementById("sharable-link") as HTMLAnchorElement;
sarableLink?.addEventListener("click",()=>{

})

const downloadPdf = document.getElementById("downloadpdf") as HTMLButtonElement;
downloadPdf?.addEventListener("click",()=>{
    window.print()
})

function saveData() {
    // Collect form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

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