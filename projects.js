console.log("test to check conected");

const projects = [
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
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/Kamiran79/product-cards", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/Kamiran79/product-cards"
    },
    {
        title: "Pet Adoption", 
        screenshot: "https://via.placeholder.com/350x150", 
        description: "Class Project for show pets collection cards", // A good project description includes 'the what', 'the why', and 'the how'.
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


const createProjectCards = (projectsCollection) => {
    let domStr ='';
    //const myCat = getEleme
    for (let i = 0; i < projectsCollection.length; i++) {
        domStr += '<div class="projectsP">';        
        domStr += `<h2>${projectsCollection[i].title}</h2>`;          
        domStr += `<img src="${projectsCollection[i].screenshot}" alt="">`;
        domStr += `<h3>${projectsCollection[i].description}</h3>`;
        domStr += `<p>${projectsCollection[i].technologiesUsed}</p>`;
        if (projectsCollection[i].available) {
            domStr += `<h3 class="ava">AVAILABLE</h3>`;
        } else {
            domStr += `<h3 class="ava" style="color:red;">NOT AVAILABLE</h3>`;
        };
        domStr += `<h4><a href="${projectsCollection[i].url}">${projectsCollection[i].url}</a></h4>`;
        domStr += `<h4><a href="${projectsCollection[i].githubUrl}">${projectsCollection[i].githubUrl}</a></h4>`;        
        //domStr += `<h4>${projectsCollection[i].githubUrl}</h4>`;                            
        domStr += '</div>';
    }
    console.log(domStr);
    printToDom('#projectsPage', domStr);          
}


const init = () => {
    createProjectCards(projects);
    //myTestFun(pets);
}
  
init();

