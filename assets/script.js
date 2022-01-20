//point to the div where we will append all of the 
let portfolioSection = $("#portfolio-list-section");

//use fat arrow syntax to declare function that will get information about my repos from Github
const getRepos = () => {

  // API endpoint URL of starred Github repos at my user name 
  let requestUrl = 'https://api.github.com/users/laurendarrimon/starred';

  fetch(requestUrl) //call to get repo information 
    .then(function (response) { 
      return response.json();  
    })
    .then(function (data) {   
        console.log (data); //explore response data
    displayItems(data); //pass response data to display function
    });
}

const displayItems = data => {


    for (let i=0; i<3; i++){ 

        //loop through response data and grab the bits we need
        let siteName = data[i].name;
        let siteDescription = data[i].description;
        let repoLink = data[i].html_url; 
        let siteLink = `https://laurendarrimon.github.io/${data[i].name}`;

    
        let portfolioItem = $('<div>'); //create the div that will hold the info for each item 

        let portfolioItemHTML = //fill the div with html elements from response data 
            `
            <div class="portfolio-items">
                <a href="${siteLink}" target="_blank">
                    <h3> ${siteName}</h3>
                </a>
                <a href="${repoLink}" target="_blank">
                    <h3>Code</h3>
                 </a>
                <p> ${siteDescription} </p>
                <div class="click-frame">
                    <iframe 
                        src="https://laurendarrimon.github.io/${siteName}"
                        width="250px"
                        height="250px"
                        scrolling="no"
                        frameBorder="0" >
                    </iframe>
                    <a 
                        class="frame-link" 
                        target="_blank"
                        href="https://laurendarrimon.github.io/${siteName}">
                    </a>
                </div>
            </div>

            `
        //append HTML to portolfio item
        portfolioItem.append(portfolioItemHTML);

        portfolioItem.addClass("col-md-5 col-lg-4");


        //append portfolio item to portfolio section div 
        portfolioSection.append(portfolioItem);

        
    }
}

getRepos();

