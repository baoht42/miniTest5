//bai 1
function tinhToanBai1() {
    let array1 = [];
    let inputArray1 = prompt("Nhập vào độ dài của mảng: ");

    for (let i = 0; i < inputArray1; i++) {
        let inputN = prompt(`Nhập phần tử thứ ${i + 1}: `);
        array1.push(inputN);
    }

    let n = prompt("Nhập giá trị cần xóa: ");

    // Tìm chỉ số của phần tử cần xóa
    let index = array1.indexOf(n);

    // Kiểm tra xem phần tử có tồn tại trong mảng không
    if (index !== -1) {
        // Xóa phần tử tại chỉ số đã tìm thấy
        array1.splice(index, 1);
        console.log(`Phần tử ${n} đã được xóa khỏi mảng.`);
        console.log(`Mang sau update: ${array1}`);
    } else {
        console.log(`Không tìm thấy phần tử ${n} trong mảng.`);
        console.log(`${array1}`);
    }

    return array1;
}

//bai2
function tinhToanBai2() {
    let toan = +prompt("Nhap diem Toan: ");
    let anh = +prompt("Nhap diem Anh van: ");
    let van = +prompt("Nhap diem Van: ");
    let avgDiem = (toan + anh + van) / 3;
    if (0 <= avgDiem < 5) {
        return "Trung Binh";
    } else if (avgDiem < 8) {
        return "Dat";
    } else {
        return "Tot";
    }
}


//bai 3
class Customer {
    constructor(name, age, point) {
        this.name = name;
        this.age = age;
        this.point = point;

    }

    calDiscount() {
        if (this.point > 100) {
            console.log("Discount 5%");
        } else {
            console.log("NO Discount");
        }
    }
}

let cus1 = new Customer("Toan", 25, 120);
let cus2 = new Customer("Bao", 30, 100);
let result31 = cus1.calDiscount();
let result32 = cus2.calDiscount();

function bai3() {

    document.write(result31);

    document.write(result32);

}

//bai4
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calV() {
        return (this.width + this.height) * 2;
    }

    calArea() {
        return this.width * this.height;
    }

    drawCanvas(myCanvas) {
        console.log(myCanvas)
        if (myCanvas) {
            let ctx = myCanvas.getContext('2d');
            ctx.fillStyle = "#fa4b2a";
            ctx.fillRect(0, 0, this.width, this.height);
        }
    }
}



function bai4() {
    let rec1 = new Rectangle(100, 200);
    let rec2 = new Rectangle(140, 410);
    let myCanvas = document.getElementById("canvasBai4");
    document.write(`Chu vi rec1 là ${rec1.calV()} <br>`);
    document.write(`Chu vi rec1 là ${rec1.calArea()}`);
    rec1.drawCanvas(myCanvas);
    document.write(`Chu vi rec1 là ${rec2.calV()}`);
    document.write(`Chu vi rec1 là ${rec2.calArea()}`);
    rec2.drawCanvas(myCanvas);
}


