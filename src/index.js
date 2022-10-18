import { apiRings } from './js/apiRings';

import markup from './js/templates/markup.hbs';

const list = document.querySelector(`.list`);

const moreBtn = document.querySelector(`.more`);

// console.log(markup)
apiRings().then(data => {
  list.insertAdjacentHTML(`beforeend`, markup(data.docs));
});
