// FAQ stuff
document.addEventListener(`DOMContentLoaded`, function () {
    const faqContainer = document.querySelector(`.faq-content`);

    faqContainer.addEventListener(`click`,function (e) {
        const groupHeader = e.target.closest(`.faq-group-header`);

        if(!groupHeader) return; 

        const group = groupHeader.parentElement,
         groupBody = group.querySelector(`.faq-group-body`),
         icon = groupHeader.querySelector(`i`);

        // toggle - icon
        icon.classList.toggle(`fa-plus`);
        icon.classList.toggle(`fa-minus`);
        
        // toggle - body
        groupBody.classList.toggle(`open`);

        // change open class and icons 
        const otherGroups = faqContainer.querySelectorAll(`.faq-group`);

        otherGroups.forEach(function (otherGroup) {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector(`.faq-group-body`),
                 otherIcon = otherGroup.querySelector(`.faq-group-header i`);

                otherGroupBody.classList.remove(`open`);
                otherIcon.classList.remove(`fa-minus`);
                otherIcon.classList.add(`fa-plus`);
            }
        });
    });
});



