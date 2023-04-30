
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


// Get all the buttons
const buttons = document.querySelectorAll('.my-button');

// Add a click event listener to all the buttons
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove the "active" class from all buttons
    buttons.forEach(function(b) {
      b.classList.remove('active');
    });
    // Add the "active" class to the clicked button
    this.classList.add('active');
  });
});


document.getElementById("Accenture").addEventListener("click", function() {
    let experience_texts_title = document.querySelector(".experience_texts_title");
    let experience_texts_company_title = document.querySelector(".experience_texts_company_title");
    let experience_texts_duration =document.querySelector(".experience_texts_duration");
    let Accenture_list = document.getElementById("experience_texts_description_list");
    let Accenture_list_items = [
        "Successfully analyzed user requirements and developed client-satisfying applications, exemplified by my work on projects.",
        "Worked on Azure environment and service-now.", 
        "Familiar with AWS.",
        "Experience in Application Quality and Analysis and Quality Management."];

    experience_texts_title.innerHTML = "Cloud Support Associate ";

    experience_texts_company_title.innerHTML ="@ Accenture";

    experience_texts_duration.innerHTML = "March 2023 - Present";

    if(Accenture_list.innerHTML === ""){
        for (var i = 0; i < Accenture_list_items.length; i++) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(Accenture_list_items[i]));
            Accenture_list.appendChild(li);
        }
    }else{
        let bullets = Accenture_list.querySelectorAll("li");
        for (let i = 0; i < bullets.length; i++) {
            // Change the text of the current bullet point element
            bullets[i].innerHTML =Accenture_list_items[i];
            
          }
    }
});

document.getElementById("Byjus").addEventListener("click", function() {
    let experience_texts_title = document.querySelector(".experience_texts_title");
    let experience_texts_company_title = document.querySelector(".experience_texts_company_title");
    let experience_texts_duration =document.querySelector(".experience_texts_duration");
    let Byjus_list = document.getElementById("experience_texts_description_list");
    let Byjus_items = [
        "Familiarity with relevant software, such as Excel or enterprise resource planning (ERP) software.",
        "Experience with logistics and supply chain management.", 
        "Experience with data analysis and process improvement.",
        "To analyzes data, research, and/or processes. Duties may include handling sales data and reports, compensation and incentive plans, sales processes, and customer and marketing data.",
    ];

    experience_texts_title.innerHTML = "Operations Executive ";

    experience_texts_company_title.innerHTML ="@ BYJU'S";

    experience_texts_duration.innerHTML = "October 2021 - April 2022";

    if(Byjus_list.innerHTML === ""){
        for (var i = 0; i < Byjus_items.length; i++) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(Byjus_items[i]));
            Byjus_list.appendChild(li);
        }
    }else{
        let bullets = Byjus_list.querySelectorAll("li");
        for (let i = 0; i < bullets.length; i++) {
            // Change the text of the current bullet point element
            bullets[i].innerHTML = Byjus_items[i];
          }
    }
});


document.getElementById("H_N_Techno").addEventListener("click", function() {
    let experience_texts_title = document.querySelector(".experience_texts_title");
    let experience_texts_company_title = document.querySelector(".experience_texts_company_title");
    let experience_texts_duration =document.querySelector(".experience_texts_duration");
    let H_N_Techno_list = document.getElementById("experience_texts_description_list");
    let H_N_Techno_items = [
        "I have experience using Java to develop and maintain software applications. I have also participated in user requirements meetings to understand client needs and translate them into proposed application designs",
        "Collaborated with cross-functional teams to identify and prioritize development tasks, Also Communicated with clients and other team members about project status and issues thatarose.",
        "Conducted code reviews to ensure code quality and adherence to best practices and Developed prototypes of new technologies and features for potential incorporation into future products.",
        "Debugged and fixed issues to improve software reliability and Wrote and maintained technical documentation", ];

    experience_texts_title.innerHTML = "Web Developer ";

    experience_texts_company_title.innerHTML ="@ H N Techno";

    experience_texts_duration.innerHTML = "Jun 2018 - August 2019";

    if(H_N_Techno_list.innerHTML === ""){
        for (var i = 0; i < H_N_Techno_items.length; i++) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(H_N_Techno_items[i]));
            H_N_Techno_list.appendChild(li);
        }
    }else{
        let bullets = H_N_Techno_list.querySelectorAll("li");
        for (let i = 0; i < bullets.length; i++) {
            // Change the text of the current bullet point element
            bullets[i].innerHTML = H_N_Techno_items[i];
          }
    }
});
