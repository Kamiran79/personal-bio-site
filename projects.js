console.log("test to check conected");

const projects = [
    {
        title: "Personal Bio Site", 
        screenshot: "https://via.placeholder.com/350x150", 
        description: "This is the current site you see!", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/Kamiran79/personal-bio-site", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/Kamiran79/personal-bio-site"
    },
    {
        title: "Cool Project", 
        screenshot: "https://via.placeholder.com/350x150", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },    
    {
        title: "Product Cards", 
        screenshot: "https://via.placeholder.com/350x150", 
        description: "Class project product cards and learn more about the flex in css", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/Kamiran79/product-cards", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/Kamiran79/product-cards"
    },
    {
        title: "Pet Adoption", 
        screenshot: "https://via.placeholder.com/350x150", 
        description: "Class project for show pets collection cards", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/Kamiran79/pet-adoption", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/Kamiran79/pet-adoption"
    },        
];

const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
}

/*
const createProjectCards = (projectsCollection) => {
    let domStr ='';
    //const myCat = getEleme
    for (let i = 0; i < projectsCollection.length; i++) {        
        domStr += '<div class="projectsP" id="showMe">';        
        domStr += `<h2>${projectsCollection[i].title}</h2>`;          
        domStr += `<img src="${projectsCollection[i].screenshot}" alt="">`;
        domStr += `<h3>${projectsCollection[i].description}</h3>`;
        domStr += `<p>${projectsCollection[i].technologiesUsed}</p>`;
        if (projectsCollection[i].available) {
            domStr += `<h3 class="ava">AVAILABLE</h3>`;                                                
            //myFunction(projectsCollection, i);
        } else {
            //myFunction(projectsCollection, i);
            domStr += `<h3 class="ava" style="color:red;">NOT AVAILABLE</h3>`;
        };
        domStr += `<h4><a href="${projectsCollection[i].url}">${projectsCollection[i].url}</a></h4>`;
        domStr += `<h4><a href="${projectsCollection[i].githubUrl}">${projectsCollection[i].githubUrl}</a></h4>`;        
        //domStr += `<h4>${projectsCollection[i].githubUrl}</h4>`;                            
        domStr += '</div>';        
        if (projectsCollection[i].available) {
        }

    }
    console.log(domStr);
    printToDom('#projectsPage', domStr);          
}
*/

let checkAll = false;

/* This for print only available cards, also I can use the else to brint 
   not available project cards */ 
   
const createProjectCards = (projectsCollection) => {
    let domStr ='';
    for (let i = 0; i < projectsCollection.length; i++) {        
        if (checkAll === false) {
            if (projectsCollection[i].available){
                domStr += '<div class="projectsP" id="showMe">';        
                domStr += `<h2>${projectsCollection[i].title}</h2>`;          
                domStr += `<img src="${projectsCollection[i].screenshot}" alt="">`;
                domStr += `<h3>${projectsCollection[i].description}</h3>`;
                domStr += `<p>${projectsCollection[i].technologiesUsed}</p>`;
                if (projectsCollection[i].available) {
                    domStr += `<h4 class="ava">AVAILABLE</h4>`;                                                
                } else {
                    //domStr += `<h3 class="ava" style="color:red;">NOT AVAILABLE</h3>`;
                };
                domStr += `<h5><a href="${projectsCollection[i].url}">${projectsCollection[i].url}</a></h5>`;
                domStr += `<h5><a href="${projectsCollection[i].githubUrl}">${projectsCollection[i].githubUrl}</a></h5>`;        
                //domStr += `<h4>${projectsCollection[i].githubUrl}</h4>`;                            
                domStr += '</div>';                
            }

        } else {
            domStr += '<div class="projectsP" id="showMe">';        
            domStr += `<h2>${projectsCollection[i].title}</h2>`;          
            domStr += `<img src="${projectsCollection[i].screenshot}" alt="">`;
            domStr += `<h3>${projectsCollection[i].description}</h3>`;
            domStr += `<p>${projectsCollection[i].technologiesUsed}</p>`;
            if (projectsCollection[i].available) {
                domStr += `<h4 class="ava">AVAILABLE</h4>`;                                                                
            } else {                
                domStr += `<h4 class="ava" style="color:red;">NOT AVAILABLE</h4>`;
            };
            domStr += `<h5><a href="${projectsCollection[i].url}">${projectsCollection[i].url}</a></h5>`;
            domStr += `<h5><a href="${projectsCollection[i].githubUrl}">${projectsCollection[i].githubUrl}</a></h5>`;        
            //domStr += `<h4>${projectsCollection[i].githubUrl}</h4>`;                            
            domStr += '</div>';            
        }

    }
    console.log(domStr);
    printToDom('#projectsPage', domStr);          
}

// this two buttons working, but was the property of the css effects only one
// So I changed the function to call the print again with conditions.
function myAll(){
    checkAll = true;
    createProjectCards(projects);
    //var x= document.getElementById("showMe");
    //x.style.display = "block";                        
}

function myAvaOnly(){
    checkAll = false;
    createProjectCards(projects);    
    //var x= document.getElementById("showMe");
    //x.style.display = "none";                        
}


const init = () => {
    createProjectCards(projects);
    //myTestFun(pets);
}
  
init();

