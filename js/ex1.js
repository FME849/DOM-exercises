/**
 * Khối 1:
 *  Tiền lương 1 ngày: num1
 *  Số ngày làm: num2
 * Khối 2:
 *  Gán giá trị cho biến: num1, num2
 *  Lập công thức tính tiền lương = tiền lương 1 ngày * số ngày làm
 *      num3 = num1 * num2;
 * Khối 3:
 *  Tiền lương: num3
 */

function calcSalary() {
    var num1 = document.getElementById("ex01-num1").value;
    var num2 = document.getElementById("ex01-num2").value;
    var num3 = new Intl.NumberFormat('vn-VN', {style: 'currency', currency: 'VND'}).format(num1 * num2);
    document.getElementById("salary").value = num3;
}

document.getElementById("salary-calc").onclick = calcSalary;