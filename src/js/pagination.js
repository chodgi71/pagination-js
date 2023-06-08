// Выбор необходимого элемента
const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 1;

// Генерация пагинации
createPagination(totalPages, page);

function createPagination(totalPages, currentPage) {
  let liTag = "";
  let active;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;

  if (currentPage > 1) {
    liTag += `<li class="pagination-item">
    <button class="prev-button arrow-button" onclick="navigateToPage(${
      currentPage - 1
    })" type="button">
      <svg class="arrow-left-icon">
        <use href="./images/sprite-catalog.svg#icon-arrow"></use>
      </svg>
    </button>
  </li>`;
  }

  if (currentPage > 2) {
    liTag += `<li class="first numb" onclick="navigateToPage(1)"><span>1</span></li>`;
    if (currentPage > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  if (currentPage == totalPages) {
    beforePage = beforePage - 2;
  } else if (currentPage == totalPages - 1) {
    beforePage = beforePage - 1;
  }

  if (currentPage == 1) {
    afterPage = afterPage + 2;
  } else if (currentPage == 2) {
    afterPage = afterPage + 1;
  }

  for (let plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      continue;
    }
    if (plength == 0) {
      plength = plength + 1;
    }
    if (currentPage == plength) {
      active = "active";
    } else {
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="navigateToPage(${plength})"><span>${plength}</span></li>`;
  }

  if (currentPage < totalPages - 1) {
    if (currentPage < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="navigateToPage(${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (currentPage < totalPages) {
    liTag += `<li class="btn next" onclick="navigateToPage(${
      currentPage + 1
    })"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }

  element.innerHTML = liTag;
}

// Функция для перехода на указанную страницу
function navigateToPage(targetPage) {
  page = targetPage;
  createPagination(totalPages, page);
  // Здесь вы можете добавить логику для обновления контента на странице в соответствии с выбранной страницей
}
