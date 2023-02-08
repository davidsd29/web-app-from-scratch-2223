
window.addEventListener('DOMContentLoaded', () => {

    const info = {
        gitHub: document.getElementById('gitHub-url'),
        website: document.querySelectorAll('.website-url'),
        name: document.getElementById('name'),
    };

    //Netlify = server, request on server, makes it posible to change url at will and get the data
    fetch('https://tribe-api-integration.netlify.app/.netlify/functions/members?first=200').then(res => {
	    return res.json() })
        .then(data => {

            //Loop through all the members and check if name is equal to given string
            data.data.members.forEach(member => {
                if (member.name == "Dave") {
                    //console.log(member.id)
                    info.website.forEach(url => {
                        url.textContent = member.webiste; 
                        url.setAttribute('href', `${member.webiste}`);
                    });
                    
                    info.name.textContent = member.name + " " + member.surname; 
                    info.gitHub.setAttribute('href', `${member.gitHubHandle}`);; 
                }
            });
        })
});