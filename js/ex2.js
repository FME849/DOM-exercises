/**
 * Khối 1:
 *  Số thứ 1: num1
 *  Số thứ 2: num2
 *  Số thứ 3: num3
 *  Số thứ 4: num4
 *  Số thứ 5: num5
 * Khối 2:
 *  Gán giá trị cho biến num1, num2, num3, num4, num5
 *  Lập công thức tính tổng 5 số:
 *      sumNum = num1 + num2 + num3 + num4 + num5;
 *  Lập công thức tính trung bình:
 *      averNum = sumNum/5;
 * Khối 3:
 *  Giá trị trung bình: averNum
 */

function averCalc() {
    var num1 = Number(document.getElementById("ex02-num1").value);
    var num2 = Number(document.getElementById("ex02-num2").value);
    var num3 = Number(document.getElementById("ex02-num3").value);
    var num4 = Number(document.getElementById("ex02-num4").value);
    var num5 = Number(document.getElementById("ex02-num5").value);
    var averNum = (num1 + num2 + num3 + num4 + num5)/5;
    document.getElementById("average").value = averNum;
}
document.getElementById("average-calc").onclick = averCalc;