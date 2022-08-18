const formInputs = document.querySelectorAll(".form__input input");
const updateInputEmptyClass = (input)=>{
    if (input.value.length > 0) input.classList.remove("empty");
    else input.classList.add("empty");
};
formInputs.forEach((input)=>{
    updateInputEmptyClass(input);
    input.addEventListener("change", (e)=>{
        updateInputEmptyClass(input);
    });
});
const mobileMenu = document.querySelector(".mobile__header__nav");
const menuButton = document.querySelectorAll(".burger__button");
const body = document.querySelector("body");
console.log({
    mobileMenu,
    menuButton,
    body
});
menuButton.forEach((nav)=>{
    nav.addEventListener("click", ()=>{
        if (mobileMenu.classList.contains("disabled")) {
            mobileMenu.classList.remove("disabled");
            body.classList.add("menuOpened");
        } else {
            mobileMenu.classList.add("disabled");
            body.classList.remove("menuOpened");
        }
    });
});
function createSlider(selector) {
    /**
     *
     */ const rootEl = document.querySelector(selector);
    if (!rootEl) throw new Error(`Slider root not found by ${selector}`);
    const slides = rootEl.querySelectorAll(".group__card");
    const pagination = rootEl.querySelectorAll(".pagination .dot");
    const pageIndicator = rootEl.querySelector(".pagination .panel");
    const slidesContainer = slides[0].parentElement;
    console.log(`Slider initialized`, {
        selector,
        rootEl,
        slides,
        pagination,
        pageIndicator
    });
    pagination.forEach((element, index)=>{
        element.addEventListener("click", ()=>{
            console.log({
                element,
                index
            });
            slidesContainer.style.transform = `translateX(-${slides[0].clientWidth * index + 10 * index}px)`;
            pageIndicator.style.transform = `translateX(${pagination[0].clientWidth * index + 8 * index}px)`;
        });
    });
}
const sliderSelectors = [
    ".recruitment__block",
    ".candidate__block",
    ".conclusion__block" // ....
];
sliderSelectors.forEach(createSlider) // const slides = document.querySelectorAll('.group__card')
 // const pagination = document.querySelectorAll('.pagination .dot')
 // const pageIndicator = document.querySelector<HTMLElement>('.pagination .panel')
 // const slidesContainer = slides[0].parentElement
 //
 // console.log({slides, pagination})
 //
 // pagination.forEach((element, index)=> {
 //     element.addEventListener('click', () => {
 //         console.log({element, index})
 //         slidesContainer.style.transform = `translateX(-${slides[0].clientWidth * index + (20*index)}px)`
 //         pageIndicator.style.transform = `translateX(${pagination[0].clientWidth * index + (8*index)}px)`
 //     })
 // })
;

//# sourceMappingURL=index.377278e2.js.map
