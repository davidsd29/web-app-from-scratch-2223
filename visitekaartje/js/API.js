const info = {
    gitHub: document.getElementById('gitHub-url'),
    website: document.querySelectorAll('.website-url'),
    name: document.querySelectorAll('.name'),
};

async function GetData() {
    fetch('https://tribe-api-integration.netlify.app/.netlify/functions/members?first=200').then(res => {
	    return res.json() })
        .then(data => {

            data.data.members.forEach(member => {
                if (member.name == "Dave") {

                    info.name.forEach(name => {
                        name.textContent = member.name + " " + member.surname; 
                    });

                    info.website.forEach(url => {
                        url.textContent = member.webiste; 
                        url.setAttribute('href', `${member.webiste}`);
                    });

                    info.gitHub.textContent = member.gitHubHandle; 
                }
            });
        })
}

window.addEventListener('DOMContentLoaded', GetData);
