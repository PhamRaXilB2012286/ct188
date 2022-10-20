
// Bt1
let input = document.getElementsByClassName('header__nav-input')[0]
let searchBtn = document.getElementById('search-btn')
let form = document.forms['header__nav-form']
input.onkeypress = function (e) {
    if (e.keyCode === 32) {
        e.preventDefault()
        sendData(e.target.value)
    } else return;
}
searchBtn.addEventListener('click', e => {
    sendData(input.value)
})

function sendData(data) {
    if (data.length > 0) form.submit()
    // console.log(data)
    // else return;
}

// Bt2
let form_register = document.getElementById('main__form-login')

function frmLoginValidate(frm) {
    return frm.checkValidity()
}
function frmContactValidate2(frm) {
    return frm.checkValidity()
}

function frmLoginValidate2(frm) {

    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) === false) {
        alert('Email ís invalid')
        return false
    }

    if (frm.pw.value.length < 8) {
        alert('Password must be at least 8 characters')
        return false
    }
    if (frm.name.value.length < 4) {
        alert('Name must be at least 4 characters')

        return false
    }
    if (frm.content.value.length < 10) {
        alert('Textarea must be at least 10 characters')

        return false
    }

    alert('Đã gửi dữ liệu')
    return true
}
function frmContactValidate(frm) {

    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) === false) {
        alert('Email ís invalid')
        return false
    }

    if (frm.name.value.length < 4) {
        alert('Name must be at least 4 characters')

        return false
    }
    if (frm.content.value.length < 10) {
        alert('Textarea must be at least 10 characters')

        return false
    }

    alert('Đã gửi dữ liệu')
    return true
}

function frmRegisterValidate(frm) {

    let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) === false) {
        alert('Email ís invalid2')
        return false
    }

    if (frm.pw.value.length < 8 || frm.pw2.value.length < 8) {
        alert('Password must be at least 8 characters')
        return false
    }
    alert('Đã gửi dữ liệu')
    return true
}

// Ex3


function addCart(code) {
    if (typeof localStorage[code] === 'undefined') {
        window.localStorage.setItem(code, 0)
    }
    let number = parseInt(document.getElementById(code).value)
    if (number === 0) {
        alert('Value must be > 0')
        return;
    }
    let current = parseInt(window.localStorage.getItem(code))
    let quantity = current + number
    if (quantity <= 100) {
        window.localStorage.setItem(code, quantity)
    } else
        window.localStorage.setItem(code, 100)
}


//EX4
const itemList = {
    "sp001": {
        "name": "Sữa Chua Vị Kiwi",
        "price": 21000,
        "photo": "images/sanpham/kiwi.jpg"
    },
    "sp002": {
        "name": "Sữa Chua Vị Xoài",
        "price": 22000,
        "photo": "images/sanpham/mango.jpg"
    },
    "sp003": {
        "name": "Sữa Chua Vị Dưa lưới",
        "price": 23000,
        "photo": "images/sanpham/cantaloupe.jpg"
    },
    "sp004": {
        "name": "Sữa Chua Vị Mâm Xôi",
        "price": 24000,
        "photo": "images/sanpham/blackberry.jpg"
    },
    "sp005": {
        "name": "Sữa Chua Vị Dâu Tây",
        "price": 25000,
        "photo": "images/sanpham/strawberry.jpg"
    },
    "sp006": {
        "name": "Sữa Chua Vị Việt Quất",
        "price": 26000,
        "photo": "images/sanpham/blueberry.jpg"
    },
    "sp007": {
        "name": "Sữa Chua Vị Bưởi",
        "price": 27000,
        "photo": "images/sanpham/grapes.jpg"
    },
    "sp008": {
        "name": "Sữa Chua Vị Táo Xanh",
        "price": 28000,
        "photo": "images/sanpham/green-apple.jpg"
    },
    "sp009": {
        "name": "Sữa Chua Vị Dứa",
        "price": 29000,
        "photo": "images/sanpham/pineapple.jpg"
    }
};

function getDiscountRate() {
    var d = new Date();//lấy ngày hiện tại của máy tính
    var weekday = d.getDay();//lấy ngày trong tuần
    var totalMins = d.getHours() * 60 + d.getMinutes();
    if (weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || (totalMins >= 780 && totalMins <= 1020)))
        return 0.1;
    return 0;
}

function showCart() {
    let TotalPreTax = 0
    let tbody = document.querySelector('tbody')
    for (const key in localStorage) {
        if (Object.hasOwnProperty.call(localStorage, key)) {
            const item = itemList[key];
            let photo = item.photo
            let name = item.name
            let price = item.price
            let orderNumber = localStorage.getItem(key)

            let tr = document.createElement('tr')
            tr.innerHTML = `<td class="text-center"><img src="${photo}" alt="${name}"></td>
            <td>${name}</td>
            <td class="text-right">${orderNumber}</td>
            <td class="text-right">${formatCurrency(price)}đ</td>
            <td class="text-right">${formatCurrency(price * orderNumber)}đ</td>
            <td class="text-center"><a href="#" data-code=${key}  onclick ="removeCart(this.dataset.code)"><span class="btn-danger"><i class="fa-solid fa-trash"></i></span></a></td>`
            // let td1 = document.createElement('td')
            // let img = document.createElement('img')
            // img.src = photo
            // img.width = '100px'
            // td1.className = 'text-center'
            // td1.appendChild(img)
            // tr.appendChild(td1)

            TotalPreTax += (price * orderNumber)
            tbody.appendChild(tr)

        }
    }
    let discountRate = getDiscountRate()
    let discount = TotalPreTax * discountRate
    let tax = 0.1 * (TotalPreTax - discount)
    let totalPrice = TotalPreTax - discount + tax

    function formatCurrency(num) {
        return Intl.NumberFormat().format(num)
    }

    let tr1 = document.createElement('tr')
    tr1.innerHTML = `<td class="text-right" colspan="6">Tổng thành tiền (A) = ${formatCurrency(TotalPreTax)}đ</td>`
    let tr2 = document.createElement('tr')
    tr2.innerHTML = `<td class="text-right" colspan="6">Chiết khấu (B) = ${discountRate} x ${formatCurrency(TotalPreTax)} = ${formatCurrency(discount)}đ</td>`
    let tr3 = document.createElement('tr')
    tr3.innerHTML = `<td class="text-right" colspan="6">Thiếu (C) = 10% x (${formatCurrency(TotalPreTax)} - ${formatCurrency(discount)}) = ${formatCurrency(tax)}đ</td>`
    let tr4 = document.createElement('tr')
    tr4.innerHTML = `<td class="text-right" colspan="6">Tổng đơn hàng = ${formatCurrency(TotalPreTax)} - ${formatCurrency(discount)} + ${formatCurrency(tax)} = ${formatCurrency(totalPrice)}đ</td>`
    let tr5 = document.createElement('tr')
    tr5.innerHTML = `<td class="text-center" colspan="6"><button>Xác nhận đơn hàng</button></td>`
    // tbody.innerHTML = `<tr>
    //             <td class="text-right" colspan="6">Tổng thành tiền (A) = ${TotalPreTax}đ</td>
    //         </tr>
    //         <tr>
    //             <td class="text-right" colspan="6">Chiết khấu (B) = 0.1 x ${TotalPreTax} = ${discount}đ</td>
    //         </tr>
    //         <tr>
    //             <td class="text-right" colspan="6">Thiếu (C) = 10% x (${TotalPreTax} - ${discount}) = ${tax}đ</td>
    //         </tr>
    //         <tr>
    //             <td class="text-right" colspan="6">Tổng đơn hàng = ${TotalPreTax} - ${discount} + ${tax} = ${totalPrice}đ</td>
    //         </tr>
    //         <tr>
    //             <td class="text-center" colspan="6"><button>Xác nhận đơn hàng</button></td>
    //         </tr>`
    // tbody.append(div)
    tbody.append(tr1, tr2, tr3, tr4, tr5)


}
showCart()

function removeCart(key) {
    if (typeof localStorage[key] !== "undefined") {
        localStorage.removeItem(key)
        // location.reload()
        document.getElementsByTagName('tbody')[0].innerHTML = ''
        showCart()
    }
}

window.onstorage(() => {
    showCart()
})


