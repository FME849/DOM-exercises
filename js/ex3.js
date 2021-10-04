/**
 * Khối 1:
 *  Số tiền USD: num1
 * Khối 2:
 *  Gán giá trị cho biến num1
 *  Lập công thức quy đổi từ tiền USD sang tiền VND:
 *      num2 = num1 * 23500;
 * Khối 3:
 *  Số tiền VND: num2
 */

function forexCalc() {
    var num1 = document.getElementById("ex03-num1").value;
    var num2 = new Intl.NumberFormat('vn-VN', {style: 'currency', currency: 'VND'}).format(num1*23500);
    document.getElementById("ex03-num2").value = num2;
}
document.getElementById("forex-calc").onclick = forexCalc;