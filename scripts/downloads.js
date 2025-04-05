const data = [
    {
        download: "https://www.mediafire.com/file/8pw80r7qvxtw6gw/PacoteOffice.zip/file",
        image: "/images/icons/pacote_office.png",
        title: "Pacote Office 2016"
    },
    {
        download: "https://www.mediafire.com/file/ayqr1hzj4xxxavn/AdobeAfterEffects2019.zip/file",
        image: "/images/icons/AfterEffects.svg",
        title: "Adobe After Effects 2019"
    },
    {
        download: "https://www.mediafire.com/file/sz1p50t4hbs7xta/AdobePremierePro2025.zip/file",
        image: "/images/icons/premiere.svg",
        title: "Adobe Premiere PRO 2025"
    },
    {
        download: "https://www.mediafire.com/file/orh95vnq7mwlj2p/Photoshop+CS6.zip/file",
        image: "/images/icons/Photoshop.svg",
        title: "Photoshop CS6"
    },
    {
        download: "https://www.mediafire.com/file/d51kq2kfc4g5ecc/Trapcode.zip/file",
        image: "/images/icons/trapcode.png",
        title: "Trapcode"
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