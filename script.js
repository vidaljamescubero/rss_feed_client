const input = document.querySelector(".input");

function afterLoadScript() {

    const card = document.querySelectorAll('.card');
    const readMoreButton = document.querySelectorAll('.readMoreButton');
    const cardBodyText = document.querySelectorAll('.card-body-text');
    const cardBody = document.querySelectorAll('.card-body');
    const cardBodyHide = document.querySelectorAll('.body-hide');
    const container = document.querySelector('.container')
    const input = document.querySelector('.input')

    function add(accumulator, a) {
        return accumulator + a;
    }

    const getResizeObserver = (ele, onResize) => {
        let obs;

        const observerInterface = {
            stop: () => { obs.unobserve(ele); obs.disconnect() },
        };

        obs = new ResizeObserver(entries => {
            for (const entry of entries) {
                onResize && onResize(entry.contentRect);
            }
        });

        obs.observe(ele);

        return observerInterface;
    };

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
                readMoreButton[num].innerHTML = `hide`
            } else {
                cardBody[num].style.cssText = ``;
                cardBody[num].classList.add("hidden");
                readMoreButton[num].innerHTML = `read more`
            }

        })
    }

    function resizeCards() {

        function fourCards() {

            let x1List = []
            let x2List = []
            let x3List = []
            let x4List = []
            for (let i = 0; i < card.length; i++) {
                let xNum = i % 4;
                let yNum;
                let xPosition = xNum * 240
                let cardHeight = card[i].offsetHeight;
                let yPosition

                if (4 > i) {
                    yNum = 0
                } else if (8 > i) {
                    yNum = 1
                } else if (12 > i) {
                    yNum = 2
                } else if (16 > i) {
                    yNum = 3
                } else {
                    yNum = 4
                }

                if (xNum === 0) {
                    yPosition = (yNum * 10) + x1List.reduce(add, 0)

                    x1List.push(cardHeight)
                } else if (xNum === 1) {
                    yPosition = (yNum * 10) + x2List.reduce(add, 0)
                    x2List.push(cardHeight)
                } else if (xNum === 2) {
                    yPosition = (yNum * 10) + x3List.reduce(add, 0)
                    x3List.push(cardHeight)
                } else {
                    yPosition = (yNum * 10) + x4List.reduce(add, 0)
                    x4List.push(cardHeight)
                }

                card[i].style.cssText = `width: 225px;  transform: translate(${xPosition}px, ${yPosition}px);)`;

                if (cardBodyText[i].offsetHeight < 60) {
                    let height = cardBodyText[i].offsetHeight;
        
                    cardBody[i].style.cssText = `height: ${height}px; margin-bottom: 10px`;
                    readMoreButton[i].style.cssText = `display: none`;
                    cardBodyHide[i].style.cssText = `display: none`;
                }
            }

            let largestHeight = Math.max(x1List.reduce(add, 0), x2List.reduce(add, 0), x3List.reduce(add, 0), x4List.reduce(add, 0)) 
            let inputHeight = largestHeight + 50;

            input.style.cssText = `height:${inputHeight}px`
        }

        function threeCards() { 
            let x1List = []
            let x2List = []
            let x3List = []

            for (let i = 0; i < card.length; i++) {
                let yNum;
                let cardHeight = card[i].offsetHeight;

                if (3 > i) {
                    yNum = 0
                } else if (6 > i) {
                    yNum = 1
                } else if (9 > i) {
                    yNum = 2
                } else if (12 > i) {
                    yNum = 3
                } else if (15 > i) {
                    yNum = 4
                } else if (18 > i) {
                    yNum = 5
                } else {
                    yNum = 6
                }

                let cardwidth = container.offsetWidth / 3 - 20;
                let xNum = i % 3;
                let xPosition = cardwidth * xNum + (xNum * 10)

                if (xNum === 0) {
                    yPosition = (yNum * 10) + x1List.reduce(add, 0)

                    x1List.push(cardHeight)
                } else if (xNum === 1) {
                    yPosition = (yNum * 10) + x2List.reduce(add, 0)
                    x2List.push(cardHeight)
                } else {
                    yPosition = (yNum * 10) + x3List.reduce(add, 0)
                    x3List.push(cardHeight)
                }

                card[i].style.cssText = `width: ${cardwidth}px;  transform: translate(${xPosition}px, ${yPosition}px);)`;

                if (cardBodyText[i].offsetHeight < 60) {
                    let height = cardBodyText[i].offsetHeight;
        
                    cardBody[i].style.cssText = `height: ${height}px; margin-bottom: 10px`;
                    readMoreButton[i].style.cssText = `display: none`;
                    cardBodyHide[i].style.cssText = `display: none`;
                }

            }

            let largestHeight = Math.max(x1List.reduce(add, 0), x2List.reduce(add, 0), x3List.reduce(add, 0)) 
            let inputHeight = largestHeight + 70;

            input.style.cssText = `height:${inputHeight}px`

           
        }

        function twoCards() {
            let x1List = []
            let x2List = []
            for (let i = 0; i < card.length; i++) {
                let yNum;
                let cardHeight = card[i].offsetHeight;

                if (2 > i) {
                    yNum = 0
                } else if (4 > i) {
                    yNum = 1
                } else if (6 > i) {
                    yNum = 2
                } else if (8 > i) {
                    yNum = 3
                } else if (10 > i) {
                    yNum = 4
                } else if (12 > i) {
                    yNum = 5
                } else if (14 > i) {
                    yNum = 6
                } else if (16 > i) {
                    yNum = 7
                } else if (18 > i) {
                    yNum = 8
                } else {
                    yNum = 9
                }

                let cardwidth = container.offsetWidth/ 2 - 20;
                let xNum = i % 2;
                let xPosition = cardwidth * xNum + (xNum * 10)

                if (xNum === 0) {
                    yPosition = (yNum * 10) + x1List.reduce(add, 0)
                    x1List.push(cardHeight)
                } else {
                    yPosition = (yNum * 10) + x2List.reduce(add, 0)
                    x2List.push(cardHeight)
                }

                card[i].style.cssText = `width: ${cardwidth}px;  transform: translate(${xPosition}px, ${yPosition}px);)`;

                if (cardBodyText[i].offsetHeight < 60) {
                    let height = cardBodyText[i].offsetHeight;
        
                    cardBody[i].style.cssText = `height: ${height}px; margin-bottom: 10px`;
                    readMoreButton[i].style.cssText = `display: none`;
                    cardBodyHide[i].style.cssText = `display: none`;
                }
            }

            let largestHeight = Math.max(x1List.reduce(add, 0), x2List.reduce(add, 0)) 
            let inputHeight = largestHeight + 100;

            input.style.cssText = `height:${inputHeight}px`

        }

        function oneCard() {
            let x1List = []

            for (let i = 0; i < card.length; i++) {
                let yNum = i;
                let cardHeight = card[i].offsetHeight;
                let cardwidth = container.offsetWidth ;
                yPosition = (yNum * 10) + x1List.reduce(add, 0)
                x1List.push(cardHeight)

                card[i].style.cssText = `width: 95%;  transform: translate(0px, ${yPosition}px);)`;

                if (cardBodyText[i].offsetHeight < 60) {
                    let height = cardBodyText[i].offsetHeight;
        
                    cardBody[i].style.cssText = `height: ${height}px; margin-bottom: 10px`;
                    readMoreButton[i].style.cssText = `display: none`;
                    cardBodyHide[i].style.cssText = `display: none`;
                }
            }

            let largestHeight = x1List.reduce(add, 0) 
            let inputHeight = largestHeight + 200;

            input.style.cssText = `height:${inputHeight}px`
        }

        let widthUse = container.offsetWidth

        if (widthUse <= 500) {
            setTimeout(() => {
                oneCard()
            }, 200)
            
        } else if (widthUse > 500 && widthUse <= 768) {
            setTimeout(() => {
                twoCards()
            }, 200)
        } else if (widthUse > 769 && widthUse <= 965) {
            setTimeout(() => {
                threeCards()
            }, 200)
        } else {
            setTimeout(() => {
                fourCards()
            }, 200)
        }

    }




    for (i = 0; i < cardBody.length; i++) {
        readMoreTransition([i])
    }

    setTimeout(() => {
        resizeCards()
    }, 1000);

    for (i = 0; i < readMoreButton.length; i++) {
        readMoreButton[i].addEventListener('click', () => {
            setTimeout(() => {
                resizeCards()
            }, 100);
        })
    }

    getResizeObserver(container, resizeCards)
}

fetch('http://localhost/rss_feed/fetch.php')
    .then((res) => res.json())
    .then(data => {

        for (let i = 0; i < data.length; i++) {
            const msInHour = 1000 * 60 * 60;
            let datePublish = new Date(data[i].date);
            let dateToday = new Date();

            let mathDiff = Math.round(
                Math.abs(dateToday.getTime() - datePublish.getTime()) / msInHour,
            );
            input.innerHTML +=
                `
                    <div class="card" >
                        <div class="card-header">
                            <div class="card-header-text">
                                SkySports | News
                            </div>
                            <a href="" class="rssLink">
                                <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><defs><path id="rss-multicolor_svg__a" d="M5.043 21.524a2.58 2.58 0 01-2.581-2.577 2.58 2.58 0 012.58-2.578 2.578 2.578 0 110 5.155zm6.167 0c-.049-4.795-3.946-8.688-8.748-8.736V8.97c6.92.048 12.522 5.642 12.571 12.554H11.21zm6.477 0a15.167 15.167 0 00-4.478-10.755A15.202 15.202 0 002.462 6.295V2.476c10.512.037 19.024 8.547 19.048 19.048h-3.823z"></path></defs><use xlink:href="#rss-multicolor_svg__a" fill="#FFAD1D"></use></svg>
                            </a>

                        <div class="card-hours">
                            ${mathDiff} hours ago
                        </div>

                        <div class="thumbnail-image">
                        <img  src="${data[i].thumbnail}" alt="">
                        </div>

                        </div>

                        <div class="card-title">
                            ${data[i].title}
                        </div>

                        <div class="card-body hidden">
                            <div class="card-body-text">
                                ${data[i].description}
                            </div>
                                
                            <div class="body-hide">

                            </div>
                                
                            <div class="readMoreButton">read more</div>
                        </div>

                        <div class="card-img">
                            <img src="${data[i].image}" alt="">
                        </div>
                    </div>
                `
        }
        afterLoadScript()
    })

