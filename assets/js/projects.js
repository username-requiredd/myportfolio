const projects = document.getElementById("portfolios")
console.log(projects)

const portfolios = [
    {
    id:1,
    name:"Dolceshop",
    url:"https://dolcestore.netlify.app/",
    category:"front-end",
    date:"Febuary 2024",

    img:[{
        cover:"assets/img/portfolio/dolceshop-home.jpg",
        detail:"assets/img/portfolio/dolceshop-details.jpg",
        list:"assets/img/portfolio/dolceshop-list.jpg"
    }],
    dsc:"Dolceshop is an ecommerce website that aims to showcase my proficiency in building dynamic and responsive web applications using ReactJS. It involves creating a fully functional ecommerce website frontend with mock product data fetched from a dummy JSON API. This project will demonstrate my ability to design user interfaces, manage state efficiently, handle routing, and implement features commonly found in ecommerce platforms.",
},
{
    id:2,
    name:"Metablog",
    url:"https://kaleidoscopic-lollipop-bcdcc4.app/",
    category:"front-end",
    date:"January 2024",

    img:[{
        cover:"assets/img/portfolio/metablog-home.jpg",
        detail:"assets/img/portfolio/metablog-details.jpg",
        list:"assets/img/portfolio/metablog-author.jpg"
    }],

    dsc:"MetaBlog, a ReactJS Blog Website, is a showcase of my adeptness in crafting engaging and dynamic blog platforms using ReactJS. This project involves the creation of MetaBlog, a comprehensive blogging website designed to demonstrate my proficiency in frontend web development. MetaBlog will feature a range of functionalities typical of modern blogging platforms, highlighting my ability to design intuitive user interfaces, manage state efficiently, handle routing seamlessly, and implement features essential for a vibrant blogging community."
},
{
    id:3,
    name:"Movieshub",
    url:"https://movieshob.netlify.app/",
    category:"front-end",
    date:"April 2024",


    img:[{
        cover:"assets/img/portfolio/movieshub-home.jpg",
        detail:"assets/img/portfolio/movieshub-details.jpg",
        list:"assets/img/portfolio/movieshub-list.jpg"
    }],

    dsc:"Moves Hub, a React Movie Trailer Website, is my showcase of expertise in crafting immersive and dynamic movie-centric platforms using React. The project focuses on the development of Moves Hub, an interactive website dedicated to providing users with access to movie trailers, information, and related content. By building Moves Hub, I'll demonstrate proficiency in frontend web development, designing engaging user interfaces, managing state efficiently, handling routing seamlessly, and integrating external APIs to deliver rich movie experiences."
}

]


portfolios.forEach(({ img,id }) => {
    console.log(img[0],id);
    const pc = img[0].cover
    console.log(pc)
    projects.innerHTML += `
        <div class="col-lg-4 col-md-6 portfolio-item filter-app" id=${id}>
            <div class="portfolio-wrap" id=${id}>
                <img src="${pc}" class="img-fluid" alt="" id=${id}>
                <div class="portfolio-links">
                    <a href="${img[0]}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Click to enlarge"><i class="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
            </div>
        </div>
    `;
});

projects.addEventListener("click", (e) => {
    if (e.target.classList.contains("portfolio-wrap")) {
        const ID = parseInt(e.target.id);
        const search = portfolios.find(({ id }) => id === ID);
        localStorage.setItem("project", JSON.stringify(search));
        console.log(search);
    }
});
