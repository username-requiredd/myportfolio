const details =  document.getElementById("details")
const data = localStorage.getItem("project") || []
const parsedData = JSON.parse(data)
console.log(parsedData)
const img1 = parsedData.img[0].cover
const img2 = parsedData.img[0].list
const img3 = parsedData.img[0].details
const projectDetails = parsedData.dsc
const projectUrl = parsedData.url
const projectCategory = parsedData.category
const ProjectDate = parsedData.date
console.log(img1,img2,img3,parsedData)
details.innerHTML =`
<div class="col-lg-8">
<div class="portfolio-details-slider swiper">
  <div class="swiper-wrapper align-items-center">

    <div class="swiper-slide">
      <img src="${img1}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="${img3}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="${img2}" alt="">
    </div>

  </div>
  <div class="swiper-pagination"></div>
</div>
</div>

<div class="col-lg-4">
<div class="portfolio-info">
  <h3>Project information</h3>
  <ul>
    <li><strong>Category</strong>: ${projectCategory}</li>
    <li><strong>Project date</strong>: ${ProjectDate}</li>
    <li><strong>Project URL</strong>: <a href="${projectUrl}">${projectUrl}</a></li>
  </ul>
</div>
<div class="portfolio-description">
  <p>
  ${projectDetails}
  </p>
</div>
</div>

`