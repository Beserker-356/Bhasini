const button = document.getElementById("submit")
const input_lang = document.getElementById("slct-inp")
const output_lang = document.getElementById("slct-out")
const inp_area = document.getElementById("input-area")


button.addEventListener("click", () => {
    console.log("hello");
    console.log(input_lang.value);
    console.log(output_lang.value);
    console.log(inp_area.value);
})


