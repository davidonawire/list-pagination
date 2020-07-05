/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const listItems = document.querySelectorAll('.student-item'); // Select all student li elements
const itemsPerPage = 10;

// Disploy a subset of a list, based on the page value passed
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

function doSearch(searchInput, list) {
  // clear previous pagination to make room for updated search pagination
  const pagination = document.querySelector('div.pagination');
  pagination.parentNode.removeChild(pagination);

  list.forEach((entry) => {
    // first, reset things from previous searches
    entry.classList.remove('match');
    entry.style.display = 'none';
    // find our new matches
    if ( (searchInput.value.length !== 0)
    && (entry.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) ) {
      entry.classList.add('match');
      entry.style.display = '';
    };
  });

  // if search input is empty, take us back to non-search-filtered state
  if (searchInput.value.length === 0) {
    showPage(listItems, 1);
    appendPageLinks(listItems);
    return;
  }

  const matchItems = document.querySelectorAll('.match');

  // if we have no matches, display the "No Matches" state

  const page = 1;
  showPage(matchItems, page);
  appendPageLinks(matchItems);
}

function appendSearch() {
  const header = document.querySelector('.page-header');

  const searchDiv = document.createElement('div');
  searchDiv.className = "student-search";

  const searchInput = document.createElement('input');
  searchInput.placeholder = "Search for students...";

  const searchSubmit = document.createElement('button');
  searchSubmit.textContent = "Search";

  searchDiv.appendChild(searchInput);
  searchDiv.appendChild(searchSubmit);
  header.appendChild(searchDiv);

  searchSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    doSearch(searchInput, listItems);
  });

  searchInput.addEventListener('keyup', (event) => {
    doSearch(searchInput, listItems);
  });
}

function appendPageLinks(list) {
  const pageCount = Math.ceil(list.length / itemsPerPage);
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
      showPage(list, clickedPageNumber);
    }
  });

};

// Load page with starting state
showPage(listItems, 1);
appendSearch();
appendPageLinks(listItems);
