const jobs = {
    "Google" : [
        "Engineer" ,//0th element 
        " @ Upstatement",
        "May 2024 - Present",//1st element
        "Write modern, performant, maintainable code for a diverse array of client ",//3rd element
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
    ],
    "Microsoft" : [
        " Software Engineer" ,
        "@ Scout",
        "January - December 2023",
        "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
        "Helped solidify a brand direction for blistabloc that spans both packaging and web",
        "Interfaced with clients on a weekly basis, providing technological expertise"
    ],
    "Facebook":[
        " UI Engineer Co-op " ,
        "@ Apple",
        "July - October 2023",
        "Developed and shipped highly interactive web applications for Apple Music using Ember.js  ",
        "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
        "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps"
    ],
     "Netflix":[
        "Studio Developer" ,
        " @ Scout",
        "January - June 2023",
        "Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern",
        "Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript",
        " "
     ],
     "linkedin":[
        " Software Engineer Co-op" ,
        " @ Starry",
        "July - December 2022",
        "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
        "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station",
        "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps"
     ],
    "Meta":[
        " Creative Technologist Co-op " ,
        "@ MullenLowe ",
        "July - December 2021",
        "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
        "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
        "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more"
    ]
}

function updateJob(id){
       document.getElementById("role").innerHTML=jobs[id][0];
       
       document.getElementById("timeline").innerHTML=jobs[id][2];
       document.getElementById("description-one").innerHTML=jobs[id][3];
       document.getElementById("description-two").innerHTML=jobs[id][4];
       document.getElementById("description-three").innerHTML=jobs[id][5];
       document.getElementById("company-name").innerHTML=jobs[id][1]; 
}

var toggle=false;
function showManu(){
    if(!toggle){
        document.getElementById("nav-links-link").style.transform = "none";
    }else{
        document.getElementById("nav-links-link").style.transform = "translate(-150%)";
    }
    toggle=!toggle;
}


