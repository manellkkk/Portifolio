const data = [
    {
        download: "/downloads/PacoteOffice.zip",
        image: "/images/icons/pacote_office.png",
        title: "Pacote Office 2016"
    },
    {
        download: "",
        image: "/images/icons/AfterEffects.svg",
        title: "Adobe After Effects 2019"
    },
];

const searchInput = document.querySelector('#searchInput')
const cardContent = document.querySelector('.downloadCard')

const displayData = (data) => {
    cardContent.innerHTML = "";
    data.forEach(e => {
        cardContent.innerHTML += `
            <a href="${e.download}">
                <div class="donwloadCardContent">
                    <img src="${e.image}" alt="">
                    <p>${e.title}</p>
                </div>
            </a>
        `
    });
}

searchInput.addEventListener("keyup", (e => {
    const search = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    displayData(search)
}))

window.addEventListener("load", () => displayData(data));