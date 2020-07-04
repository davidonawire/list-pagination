/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const listItems = document.querySelectorAll('.student-item'); // Select all student li elements
const itemsPerPage = 10;

// Disploy a subset of the full list, based on the page value passed
function showPage(list, page) {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage;

  // Display the items that are within our range,
  // hide those that are not.
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    if ((i >= startIndex) && (i < endIndex)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  }
}

function appendPageLinks() {
  const pageCount = Math.ceil(listItems.length / itemsPerPage);
  const pageDiv = document.querySelector('.page');

  function createPaginationLI(pageNumber) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = '#';
    a.textContent = pageNumber;
    li.appendChild(a);
    return li;
  }

  function setActiveClass(pageNumber) {
    const previousActive = paginationUL.querySelector('.active');
    const newActiveIndex = pageNumber - 1;
    const newActive = paginationUL.getElementsByTagName('a')[newActiveIndex];
    if (previousActive) {
      previousActive.className = '';
    }
    newActive.className = 'active';
  }

  // Start building our pagination HTML structure
  const paginationDiv = document.createElement('div');
  const paginationUL = document.createElement('ul');
  paginationDiv.className = 'pagination';
  paginationDiv.appendChild(paginationUL);
  pageDiv.appendChild(paginationDiv);

  // Add the pagination items and set the first page to active
  for (let i = 1; i <= pageCount; i++) {
    let li = createPaginationLI(i);
    paginationUL.appendChild(li);
  };
  setActiveClass(1);

  paginationDiv.addEventListener('click', (e) => {
    if (e.target.nodeName = 'a') {
      const clickedPageNumber = e.target.textContent;
      setActiveClass(clickedPageNumber);
      showPage(listItems, clickedPageNumber);
    }
  });

};

showPage(listItems, 1);
appendPageLinks();
