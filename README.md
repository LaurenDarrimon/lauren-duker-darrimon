# lauren-duker-darrimon
Lauren Duker Darrimon - Web Developer &amp; Designer Portfolio Site

#### Jump to: 
* [Description](#description)
* [Link](#link)
* [Methods](#methods)
* [Author](#author)



## Description

This site showcases Lauren Duker Darrimon Web Developer, contact, resume, and a portfolio dynamically generated from starred GitHub code repositories. 

<br><br>

![Lauren Duker Darrimon Portfolio](./assets/images/weather-app-screenshot.jpg)

<br><br>


## Link

[Lauren Duker Darrimon Portfolio](https://laurendarrimon.github.io/lauren-duker-darrimon/)


## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JQuery](https://api.jquery.com/)
* [Bootstrap](https://getbootstrap.com/)
* [GitHub API](https://docs.github.com/en/rest/reference/repos)


## Methods 


### Github API

The portfolio section utilizes the data from Lauren's [Git Hub](https://docs.github.com/en/rest/reference/repos) to pull information, links, and images from her code repositories and live applications. Here's the fetch call to the starred repos API endpoint:

```
 let requestUrl = 'https://api.github.com/users/laurendarrimon/starred';

  fetch(requestUrl) 
    .then(function (response) { 
      return response.json();  
    })
    .then(function (data) {   
    displayItems(data); 
    });
```

### Dynamic Content 
The portfolio section is populated by the first three of the user's starred code repositories. As new applications are developed and deployed, all we have to do is star new repos on GitHub, and the portfolio will automatically update: 



### Clickable Visual of Deployed Sites
A digital portfolio is not very exciting without images of the deployed sites. However, hard-coding the image in would have limited the dynamic data population. As a solution, I included an iframe of the deployed site, with an anchor link that was resized via css to cover the iframe. 

```
.frame-link {
    position:absolute; 
    top:0; 
    left:0; 
    display:inline-block; 
    width:250px; 
    height:250px; 
    z-index:5;
}
```


## Author

### Lauren Duker Darrimon 

- [Link to Portfolio Site](https://laurendarrimon.github.io/lauren-duker-darrimon/)
- [Link to Github](https://github.com/LaurenDarrimon)
- [Link to LinkedIn](https://www.linkedin.com/in/lauren-lalita-duker-9537b1201/)
