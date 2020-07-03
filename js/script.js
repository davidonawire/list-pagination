/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const listItems = document.querySelectorAll('.student-item'); // Select all student li elements
const itemsPerPage = 10;
console.log(listItems);

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

showPage(listItems, 6);
/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
