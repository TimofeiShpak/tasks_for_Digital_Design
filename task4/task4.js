function printTriangle() {
    let str = "";
    for (let row=5; row>0; row--) {
        for (let column=0; column<5; column++) {
            if ((row - 2) < column) {
                str += "# ";
            } else {
                str += " ";
            }
        }
        str += "\n"
    }
    console.log(str);
}
printTriangle();
