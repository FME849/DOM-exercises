/**
 * Khối 1:
 *  Chiều dài: length
 *  Chiều rộng: width
 * Khối 2:
 *  Gán giá trị cho biến length, width
 *  Lập công thức tính diện tích:
 *      area = length * width;
 *  Lập công thức tính chu vi:
 *      perimeter = (length + width)*2;
 * Khối 3:
 *  Diện tích: area
 *  Chu vi: perimeter
 */
function rectCalc() {
    var length = Number(document.getElementById("length").value);
    var width = Number(document.getElementById("width").value);
    var area = length * width;
    var perimeter = (length + width) * 2;
    document.getElementById("area").value = area;
    document.getElementById("perimeter").value = perimeter;
}
document.getElementById("rect-calc").onclick = rectCalc;