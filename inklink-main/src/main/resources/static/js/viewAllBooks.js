let currentPage = 1; // Trang hiện tại
const pageSize = 4; // Số sản phẩm hiển thị trên mỗi trang

$(getOriginalBooks);

function getOriginalBooks() {
  getViewAllBooks(currentPage);
}

function getViewAllBooks(page) {
  try {
    page = parseInt(page);
    let formData = new FormData();
    formData.append("page", page);

    let url = "/api/viewAllBooks";

    postForm(url, formData, processViewBooks);
  } catch(e) {
  
  }
}

function processViewBooks(response) {
  if (response.status == "Success") {
    let books = response.data;

    let contentDiv = $("#contentDiv");
    let str = "";

    let imgCoverNames = [];
    let imgIds = [];

    for (let i = 0; i < books.length; i++) {
      let imageUrl = window.location.origin + "/images/" + books[i].coverFileName;

      let divStr = `
<div class="ik-book-holder container" onclick="doViewBook(${books[i].id})" id="vabDiv${i}">
        <div class="col">
          <img alt="${books[i].name}" id="vabImg${i}" class="ik-small-image-holder" src="${imageUrl}" title="${books[i].name}">
        
          <h6 class="mt-2 text-start ms-3">${books[i].name}</h6>
        
          <p class="text-start ms-3">${books[i].price.toFixed(3)}đ</p>
          <button class="btn btn-primary" type="button" onclick="addToCart(${books[i].id})" id="vabBtn${i}">Thêm vào giỏ hàng</button>
        </div>
</div>`;

      imgCoverNames.push(books[i].coverFileName);
      imgIds.push("vabImg" + i);

      str += divStr;
    }

    contentDiv.html(str);

    for (let i = 0; i < books.length; i++) {
      $("#vabDiv" + i).on("click", function(e) {
        e.stopPropagation();
      });
      $("#vabBtn" + i).on("click", function(e) {
        e.stopPropagation();
      });
    }

    // Load images afterwards
    getBookCovers(imgCoverNames, imgIds);

    // Tính toán số trang dựa trên tổng số sản phẩm và kích thước trang
    let totalPages = Math.ceil(books.length / pageSize);

    // Tạo các nút hoặc liên kết cho phân trang
    let paginationContainer = $(".pagination-container");
    let paginationStr = "";

    if (totalPages > 1) {
      paginationStr += `<nav aria-label="Page navigation">
        <ul class="pagination">`;

      // Nút trang trước
      if (currentPage > 1) {
        paginationStr += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Trang trước</a></li>`;
      }

      // Các nút trang
      for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
          paginationStr += `<li class="page-item active"><a class="page-link" href="#" onclick="changePage(${i})">${i}</a></li>`;
        } else {
          paginationStr += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${i})">${i}</a></li>`;
        }
      }

      // Nút trang sau
      if (currentPage < totalPages) {
        paginationStr += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Trang sau</a></li>`;
      }

      paginationStr += `</ul>
      </nav>`;
    }

    paginationContainer.html(paginationStr);
  } else {
  
  }
}

// Hàm thay đổi trang
function changePage(page) {
  currentPage = page;
  getViewAllBooks(currentPage);
}
