function validateUsername(username, arr){
	if(username==null||username===""){
		arr.push("Tên người dùng không được để trống.");
	}
	else if(username.length<3){
		arr.push("Tên người dùng quá ngắn. Tối thiểu là 3 ký tự.");
	}
	else if(username.length>16){
		arr.push("Tên người dùng quá dài. Tối đa là 16 ký tự.");
	}
}

function validatePassword(pwd, arr){
	if(pwd==null||pwd===""){
		arr.push("Mật khẩu không được để trống.");
	}
	else if(pwd.length<5){
		arr.push("Mật khẩu phải có 5 ký tự trở lên. Của bạn có"+pwd.length+".");
	}
	else if(pwd.length>20){
		arr.push("Độ dài mật khẩu đã vượt quá giới hạn là 20. Mật khẩu của bạn có"+pwd.length+".");
	}
}

function validateFirstName(name, arr){
	if(name==""){
		
	}else{
		if(name.length<=3){
			arr.push("Tên phải bao gồm ít nhất 3 ký tự.");
		}
	}
}

function validateLastName(name, arr){
	if(name===""){
		
	}else{
		if(name.length<=3){
			arr.push("Họ phải bao gồm ít nhất 3 ký tự.");
		}
	}
}

function validateEmailAddress(email, erm){
	if(email===""){
		return;
	}else{
		//do email validation since some browsers do not understand HTML input type or the browser does not know how to validate an email address
	}
}

function validateBookId(id, arr){
	if(id==null||id==""){
		arr.push("Mã sách không được để trống.");
	}else{
		try{
			let num = parseInt(id);
			if(num<=0){
				arr.push("ID sách phải lớn hơn 0.");
			}
		}catch(e){
			arr.push("ID sách phải là số nguyên dương.");
		}
	}
}

function validateBookName(name, arr){
	if(name==null||name===""){
		arr.push("Không được để trống tên sách.");
	}
}

function validateCover(cover, arr){
	if(cover===null||cover===undefined){
		arr.push("Vui lòng chọn một bìa cho cuốn sách.");
	}else{
		let size = cover.size;
		const MAX_BOOK_COVER_FILE_SIZE = 4 * 1024 * 1024;
		if(size>MAX_BOOK_COVER_FILE_SIZE){
			arr.push("Hình ảnh bạn đã chọn vượt quá giới hạn kích thước là 4MB.");
		}
		
		let coverName = cover.name;
		let indexDot = coverName.lastIndexOf(".");
		if(indexDot<0){
			arr.push("Chọn một định dạng hình ảnh hợp lệ.");
		}
	}
}

function validateBookFile(bookFile, arr){
	if(bookFile===null||bookFile===undefined){
		arr.push("Vui lòng chọn tập tin sách.");
	}else{
		let size = bookFile.size;
		/*const MAX_BOOK_FILE_SIZE = 4 * 1024 * 1024;
		if(size>MAX_BOOK_FILE_SIZE){
			arr.push("The image you have selected exceeds the size limit which is 4MB.");
		}*/
		
		let bookFileName = bookFile.name;
		let indexDot = bookFileName.lastIndexOf(".");
		if(indexDot<0){
			arr.push("Chọn một tệp hợp lệ cho cuốn sách.");
		}
	}
}

function validateDescription(description, arr){
	if(description==null||description===""){
		arr.push("Mô tả không được để trống.");
	}
	else if(description.length<20){
		arr.push("Mô tả sách phải có 20 ký tự trở lên. số lượng hiện tại là "+description.length+".");
	}
}

function validateBookPrice(price, arr){
	if(price==null||price===""){
		arr.push("Giá sách không được để trống.");
	}
	else{
		try{
			let bp = new Number(price);
			if(bp<0){
				arr.push("Giá sách không được là số âm.");
			}
			else if(bp>10000){
				arr.push("Giá sách quá cao. Giá tối đa được đặt thành 10.000.");
			}
		}catch(err){
			arr.push("Sử dụng số để xác định giá sách.");
		}
	}
}

function validatePublisherName(publisher, arr){
	if(publisher==null||publisher===""){
		arr.push("Không được để trống tên nhà xuất bản.");
	}
}

function validatePublicationYear(puby, arr){
	if(puby==null||puby===""){
		arr.push("Năm xuất bản không được để trống.");
	}
	else{
		try{
			let year = parseInt(new Number(puby));

			let currentYear = (new Date).getFullYear();

			if(year<1600){
				arr.push("Năm xuất bản dưới giới hạn 1600.");
			}
			else if(year>currentYear){
				arr.push("Năm xuất bản bạn đã nhập lớn hơn năm hiện tại: "+currentYear+".");
			}
		}catch(err){
			arr.push("Sử dụng số tự nhiên đến năm xuất bản.");
		}
	}
}

function validateEditionNumber(edition, arr){
	if(edition==null||edition===""){
		arr.push("Số ấn bản không được để trống.");
	}
	else{
		try{
			let ed = parseInt(new Number(edition));

			if(ed<=0){
				arr.push("Số ấn bản không được là 0 hoặc số âm.");
			}
			else if(ed>1000){
				arr.push("Số ấn bản quá cao. Giá tối đa được đặt thành 1000.");
			}
		}catch(err){
			arr.push("Sử dụng số tự nhiên để đánh số.");
		}
	}
}

function validatePublicationCountry(country, arr){
	if(country==null||country===""){
		arr.push("Quốc gia xuất bản không được để trống.");
	}
}

function validateIsbn(isbn, arr){
	if(isbn==null||isbn===""){
		arr.push("ISBN không được để trống.");
	}
}

function validateLanguage(language, arr){
	if(language==null||language===""){
		arr.push("Ngôn ngữ của cuốn sách không được để trống.");
	}
}

function validateAuthors(authors, arr){
	if(authors.length==0){
		arr.push("You need to have one or more authors for the book.");
	}else{
		for(let i=0;i<authors.length;i++){
			if(authors[i].length<3){
				arr.push("Tác giả "+(i+1)+" lỗi: Tên tác giả phải có 3 ký tự trở lên.");
			}
		}
	}
}

function validateCategories(categories, arr){
	if(categories.length==0){
		arr.push("Chỉ định ít nhất một danh mục mà cuốn sách này thuộc về.")
	}else{
		for(let i=0;i<categories.length;i++){
			if(categories[i].length<3){
				arr.push("Loại "+(i+1)+" lỗi: Tên danh mục phải có 3 ký tự trở lên.");
			}
		}
	}
}

function validateBookWidth(wid, arr){
	if(wid==null||wid===""){
		arr.push("Không được để trống chiều rộng sách.");
	}
	else{
		try{
			let width = new Number(wid);
			if(width<=0){
				arr.push("Chiều rộng sách không được là 0 hoặc số âm.");
			}
			else if(width>1000){
				arr.push("Chiều rộng sách quá lớn. Chiều rộng tối đa được đặt thành 1.000mm.");
			}
		}catch(err){
			arr.push("Sử dụng số để xác định chiều rộng cuốn sách.");
		}
	}
}

function validateBookHeight(hei, arr){
	if(hei==null||hei===""){
		arr.push("Chiều cao sách không được để trống.");
	}
	else{
		try{
			let height = new Number(hei);
			if(height<=0){
				arr.push("Chiều cao sách không được là 0 hoặc số âm.");
			}
			else if(height>1000){
				arr.push("Chiều cao cuốn sách quá lớn. Chiều cao tối đa được đặt thành 1.000mm.");
			}
		}catch(err){
			arr.push("Sử dụng số để xác định chiều cao cuốn sách.");
		}
	}
}

function validateNumberOfPages(nop, arr){
	if(nop==null||nop===""){
		arr.push("Không được để trống số trang.");
	}
	else{
		try{
			let numberOfPages = parseInt(new Number(nop));

			if(numberOfPages<=0){
				arr.push("Số trang không được là 0 hoặc số âm.");
			}
			else if(numberOfPages>100000){
				arr.push("Số trang quá cao. Giá tối đa được đặt thành 100.000.");
			}
		}catch(err){
			arr.push("Sử dụng các số tự nhiên để xác định giá sách.");
		}
	}
}

function validatePasswordsEqual(pwd, conf, erm){
	if(pwd!==conf){
		erm.push("Hai mật khẩu bạn đã nhập không khớp. Chắc họ giống nhau.");
	}
}

function validatePhoneNumber(phone, erm){
	if(phone==null || phone == ""){
		return;
	}
}

function validatePhoneNumberMust(phone, erm){
	if(phone==null || phone==""){
		erm.push("Bạn phải nhập một số điện thoại.");
	}
	//Include rege for validating phone number.
}

function validate(b, arr){
	if(b==null||b===""){
		arr.push("không thể để trống.");
	}
}
