const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 1;

element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page) {
  let liTag = "";
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  if (page > 1) {
    liTag += `<li class="prev-button arrow-button" onclick="createPagination(totalPages, ${
      page - 1
    })">
    <span><svg class="arrow-left-icon">
      <use href="./images/sprite-catalog.svg#icon-arrow" ></use>
    </svg></span>
  </li>`;
  }
  if (page > 2) {
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="pagination-dots"><span>...</span></li>`;
    }
  }

  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  if (page == 1) {
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      continue;
    }
    if (plength == 0) {
      plength = plength + 1;
    }
    if (page == plength) {
      active = "is-active";
    } else {
      active = "";
    }
    liTag += `<li class="pagination-button ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="pagination-dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="next-button arrow-button" onclick="createPagination(totalPages, ${
      page + 1
    })">
    <span><svg class="arrow-right-icon">
      <use href="./images/sprite-catalog.svg#icon-arrow" ></use>
    </svg></span>
  </li>`;
  }
  element.innerHTML = liTag;
  return liTag;
}
