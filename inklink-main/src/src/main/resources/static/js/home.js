$(homeInit);

function homeInit(){
	getHomeContent();
}

function getHomeContent(){
	let url = "/api/home";
	
	postIt(url, {}, processHomeContent);
}

function processHomeContent(response){
	if(response.status=="Success"){
		let holders = response.data;
		
		let divsStr = "";
		let imgCoverNames = [];
		let imgIds = [];
		
		for(let i=0; i<holders.length; i++){
			let holder = holders[i];
			
			let books = holder.books;
			
			let str = `<div class="row">
				<div class="col-12">
					<h3> ${holder.value=="" || holder.value==null ? "" : " &gt; <small>"+holder.value+"</small>"}</h3>
				</div>`;
			
			for(let j=0; j<books.length; j++){
				let imageUrl = window.location.origin + "/images/" + books[j].coverFileName;
				let innerStr = `
<div class="ik-book-holder container" onclick="doViewBook(${books[i].id})" id="vabDiv${i}">
	<div class="col">
		<img alt="${books[i].name}" id="vabImg${i}" class="ik-small-image-holder" src="${imageUrl}" title="${books[i].name}">
		<h6 class="mt-2 text-start ms-3">${books[i].name}</h6>
		<p class="text-start ms-3">${books[i].price}đ</p>	
		<button class="btn btn-primary" type="button" onclick="addToCart(${books[i].id})" id="vabBtn${i}">Thêm vào giỏ hàng</button>
	</div>
</div>`;
				
				str+=innerStr;
				
				imgCoverNames.push(books[j].coverFileName);
				imgIds.push("hmImg"+i+"_"+j);
			}
			
			str+="</div>";
			
			divsStr+=str;
		}
		
		$("#contentDiv").html(divsStr);
		
		for(let i=0; i< holders.length; i++){
			for(let j=0; j< holders[i].books.length; j++){
				$("#hmDiv"+i+"_"+j).on("click", function(e){
					e.stopPropagation();
				});
				$("#hmBtn"+i+"_"+j).on("click", function(e){
					e.stopPropagation();
				});
			}
		}
		
		getBookCovers(imgCoverNames, imgIds);
		
	}else{
		showMessage(":(");
		//showMessage(response.errorMessages);
	}
}
