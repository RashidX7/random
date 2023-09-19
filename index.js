let blocks = document.querySelectorAll('.block')
let buttons = document.querySelectorAll('button')
let colors = [
  "#5199FF",
  "#4A69FF",
  "#2300B0",
  "#7EB3FF",
  "#1EC9E8",
  "#48CFAF",
  "#00DFC8",
  "#4BB462",
  "#8CBA51",
  "#FF756B",
  "#F59BAF",
  "#FF005C",
  "#E47CCD",
  "#F375CF",
  "#940CFE",
  "#E6E7E8",
  "#F0F6F4",
  "#BBC9DD",
  "#2F3538",
  "gold",
  "pink",
  "black",
  "green",
  "deeppink",
  "brown",
  "#0351C1",
  "#01142F",
  "#01142F",
  "#4A69FF",
  "#51EAFF",
  "#D7FFFE",
  "#1EC9E8",
  "#45D09E",
  "#00848C",
  "#2398AB",
  "#116315",
  "#1E3C00",
  "#35D073",
  "#A7E541",
  "#748700",
  "#FFE55E",
  "#F7F272",
  "#D2AA1B",
  "#EAE114",
  "#FFE0BC",
  "#FFA96B",
  "#FF905A",
  "#FF6B00",
  "#FE634E",
  "#F39629",
  "#FF9CA1",
  "#E85668",
  "#FF2970",
  "#DEC0C1",
  "#B40A1B",
];
buttons.forEach((item, id)=> {
    item.addEventListener('click',(event)=> {
        setRandomColor(event, id)
    })
})

function setRandomColor (event , id) {
    let ln = colors.length
    let randomNum = Math.floor(Math.random() * ln) // 0 - ln
    blocks[id].style.backgroundColor = colors[randomNum]
}