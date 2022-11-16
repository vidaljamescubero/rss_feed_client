const input = document.querySelector(".input")
const parser = new DOMParser()
const url = 'http://localhost:4000/skysports';
let obj

let titleList = []
let linkList = []
let descriptionList = []
let pubDateList = []
let imageList = []
let pic


function arraySure(array) {
    if (array !== 19) {
        let secondValue = array.length - 20

        array.splice(0, secondValue)
    }
}

fetch(url)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {

        for (let i = 0; i < data.querySelectorAll("title").length; i++) {
            titleList.push(`${data.querySelectorAll("title")[i].textContent}`)
        }

        for (let i = 0; i < data.querySelectorAll("link").length; i++) {
            linkList.push(data.querySelectorAll("link")[i].textContent)
        }

        for (let i = 0; i < data.querySelectorAll("description").length; i++) {
            descriptionList.push(data.querySelectorAll("description")[i].textContent)
        }

        for (let i = 0; i < data.querySelectorAll("pubDate").length; i++) {

            const msInHour = 1000 * 60 * 60;
            let datePublish = new Date(data.querySelectorAll("pubDate")[i].textContent);
            let dateToday = new Date();

            let mathDiff = Math.round(
                Math.abs(dateToday.getTime() - datePublish.getTime()) / msInHour,
            );

            pubDateList.push(mathDiff)
        }

        for (let i = 0; i < data.querySelectorAll("enclosure").length; i++) {
            imageList.push(data.querySelectorAll("enclosure")[i].attributes.url.textContent)
        }

        pic = data.querySelector('url').textContent;

        arraySure(titleList)
        arraySure(linkList)
        arraySure(descriptionList)
        arraySure(pubDateList)
        arraySure(imageList)


        for (i = 0; i <= 19; i++) {
            input.innerHTML += `
            <div class="card" >
        <div class="card-header">
            <div class="card-header-text">
                SkySports | News
            </div>
            <a href="${linkList[i]}" class="rssLink">
                <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><defs><path id="rss-multicolor_svg__a" d="M5.043 21.524a2.58 2.58 0 01-2.581-2.577 2.58 2.58 0 012.58-2.578 2.578 2.578 0 110 5.155zm6.167 0c-.049-4.795-3.946-8.688-8.748-8.736V8.97c6.92.048 12.522 5.642 12.571 12.554H11.21zm6.477 0a15.167 15.167 0 00-4.478-10.755A15.202 15.202 0 002.462 6.295V2.476c10.512.037 19.024 8.547 19.048 19.048h-3.823z"></path></defs><use xlink:href="#rss-multicolor_svg__a" fill="#FFAD1D"></use></svg>
            </a>

            <div class="card-hours">
            ${pubDateList[i]} hours ago
            </div>

            <div class="thumbnail-image">
            <img  src="${pic}" alt="">
            </div>
        
        </div>

        <div class="card-title">
        ${titleList[i]}
        </div>

        <div class="card-body hidden">
            <div class="card-body-text">
                ${descriptionList[i]}
            </div>
            <div class="body-hide"></div>
            <div class="readMoreButton">read more</div>
        </div>

        <div class="card-img">
            <img src="${imageList[i]}" alt="">
        </div>
    </div>
            
            `
        }


        const readMoreButton = document.querySelectorAll('.readMoreButton');
        const cardBodyText = document.querySelectorAll('.card-body-text');
        const cardBody = document.querySelectorAll('.card-body');
        const cardBodyHide = document.querySelectorAll('.body-hide')

        function readMoreTransition(num) {
            if (cardBodyText[num].offsetHeight < 60) {
                let height = cardBodyText[num].offsetHeight;

                cardBody[num].style.cssText = `height: ${height}px; margin-bottom: 10px`;
                readMoreButton[num].style.cssText = `display: none`;
                cardBodyHide[num].style.cssText = `display: none`;
            }

            readMoreButton[num].addEventListener('click', () => {

                if (cardBody[num].classList.contains("hidden")) {
                    let height = cardBodyText[num].offsetHeight + 35

                    cardBody[num].style.cssText = `height: ${height}px`;
                    cardBody[num].classList.remove("hidden");
                } else {
                    cardBody[num].style.cssText = ``;
                    cardBody[num].classList.add("hidden");
                }

            })


        }

        for (i = 0; i < cardBody.length; i++) {
            readMoreTransition([i])

        }


    })





