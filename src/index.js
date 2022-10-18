import { apiRings } from './js/apiRings';

import markup from './js/templates/markup.hbs';

const list = document.querySelector(`.list`);
const moreBtn = document.querySelector(`.more`);

  moreBtn.setAttribute(`hidden`, true);
 
let page = 1;
 
apiRings().then(data => {
    list.insertAdjacentHTML(`beforeend`, markup(data.docs))
    moreBtn.removeAttribute(`hidden`)
})

moreBtn.addEventListener(`click`, onload);

function onload() {
    page += 1;
    apiRings(page).then(data => {    // important to send page!!!!!
        list.insertAdjacentHTML(`beforeend`, markup(data.docs))
        if (data.page === data.pages) {
                moreBtn.setAttribute(`hidden`, true)
            };
    });
}