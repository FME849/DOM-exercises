/**
 * Khối 1:
 *  Số có 2 ký số: num
 * Khối 2:
 *  Gán giá trị cho biến num
 *  Lập công thức lấy hàng chục:
 *      tens = Math.floor(num/10);
 *  Lập công thức lấy hàng đơn vị:
 *      unit = num%10;
 *  Lập công thức tính tổng:
 *      sumNum = tens + unit;
 * Khối 3:
 *  Tổng: sumNum
 */
function sumCalc() {
    var num = document.getElementById("ex05-num").value;
    var tens = Math.floor(num/10);
    var unit = num%10;
    var sumNum = tens + unit;
    document.getElementById("sumNum").value = sumNum;
}
document.getElementById("sum-calc").onclick = sumCalc;