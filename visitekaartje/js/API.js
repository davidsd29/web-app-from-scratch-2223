const info = {
    gitHub: document.getElementById('gitHub-url'),
    website: document.querySelectorAll('.website-url'),
    name: document.querySelectorAll('.name'),
};

async function GetData() {
    const response = await fetch('https://whois.fdnd.nl/api/v1/member?id=cldep8cyd3w3x0av0mrzat8k3');
    const data = await response.json();

    info.name.forEach(name => {
        name.textContent = data.member.name + " " + data.member.surname; 
    });

    info.website.forEach(url => {
        url.textContent = data.member.webiste; 
        url.setAttribute('href', `${data.member.webiste}`);
    });

    info.gitHub.textContent = data.member.gitHubHandle;
}

window.addEventListener('DOMContentLoaded', GetData);
;