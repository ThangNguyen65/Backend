$(initSearch);

function initSearch(){
	$("#seSearch").on("keyup", function(e){
		if(e.keyCode==13||e.key=="Enter"){
			getSearch();
		}
	});
}

function getSearch(){
	let val = $("#seSearch").val().trim();
	
	let erm = [];
	validateSearch(val, erm);
	
	if(erm.length>0){
		showErrors(erm);
	}else{
		
		let url = "/api/search?value="+val;
		getIt(url, processSearch);
	}
}

function processSearch(response){

	if(response.status=="Success"){
		
		let holders = response.data;
		
		if(holders.length==0){
			showErrors("Không có sản phẩm phù hợp với từ khóa tìm kiếm của bạn.");
			return;	
		}
			
		let str = "";
		
		let imgCoverNames = [];
		let imgIds = [];
		
		for(let i=0;i< holders.length; i++){
			let holder = holders[i];
			
			let divStr = `<div>
					<div>
						<h4 style="text-decoration: underline;"></h4>
					</div>`;
			
			let books = holder.books;
			for(let j=0;j<books.length;j++){
				
				let descr = books[j].description;
				if(descr.length>50){
					descr = descr.slice(0, 50)+"...";
				}
				let imageUrl = window.location.origin + "/images/" + books[j].coverFileName;
				let innerStr = `
				<div class="ik-search-content-div" onclick="doViewBook(${books[j].id})">
						<div class="row">
							<div class="col-lg-1">
								<img alt="Cover Image" title="${books[j].name}" src="${imageUrl}" width="65" height="90" id="seImg${i}_${j}">
							</div>
							<div class="col-lg-11">
								<div class="row">
									<div class="col-lg-12">
										<label class="form-label"><strong>Tên truyện:</strong> </label>
										<label id="seName${i}_${j}">${books[j].name}</label>
									</div>
									<div class="col-lg-4">
										<label class="form-label"><strong>ISBN:</strong> </label>
										<label id="seIsbn${i}_${j}">${books[j].isbn}</label>
									</div>
									<div class="col-lg-4">
										<label class="form-label"><strong>Giá tiền: </strong></label>
										<label id="sePrice${i}_${j}">${books[j].price}đ</label>
									</div>
									<div class="col-lg-4">
										<label class="form-label"><strong>Số trang:</strong></label>
										<label id="seNumberOfPages${i}_${j}">${books[j].numberOfPages}</label>
									</div>
									<div class="col-lg-12">
										<label class="form-label"><strong>Mô tả:</strong></label>
										<label id="seDescription${i}_${j}">${descr}</label>
									</div>
								</div>
							</div>
						</div>
					</div>`;
				
				divStr+=innerStr;
				
				imgCoverNames.push(books[j].coverFileName);
				imgIds.push("seImg"+i+"_"+j);
			}
			
			divStr+="</div>";
			str+=divStr;
		}
		
		$("#searchResultsDiv").html(str);
		
		showSearch();
		
		getBookCovers(imgCoverNames, imgIds);
	}else{
		showErrors(response.errorMessages);
	}
}

function showSearch(){
	$("#searchDiv").show();
	$("#contentDiv").hide();
}

function resetSearch(){
	$("#seSearch").val("");
	$("#searchDiv").hide();
	$("#searchResultsDiv").html("");
	$("#contentDiv").show();
}

function validateSearch(val, arr){
	if(val==null||val===""){
		arr.push("Bạn chưa nhập bất kỳ cụm từ tìm kiếm nào.");
		return;
	}
	if(val.length<3){
		arr.push("Cụm từ tìm kiếm của bạn quá ngắn. Ký tự tối thiểu là 3.");
		return;
	}
	val = val.toLowerCase();
	let notAllowed = ["the"];
	for(let i=0;i< notAllowed.length; i++){
		if(val===notAllowed[i]){
			arr.push("Cụm từ tìm kiếm bạn đã nhập quá rộng. Thu hẹp phạm vi tìm kiếm.");
		}
	}
}