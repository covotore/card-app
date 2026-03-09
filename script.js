const tarot = [

    { name: "愚者", file: "fool.png", up: "新しい始まり", rev: "無計画" },
    { name: "魔術師", file: "magician.png", up: "創造力", rev: "空回り" },
    { name: "女教皇", file: "priestess.png", up: "直感", rev: "秘密" },
    { name: "女帝", file: "empress.png", up: "豊かさ", rev: "依存" },
    { name: "皇帝", file: "emperor.png", up: "支配", rev: "頑固" },
    { name: "教皇", file: "hierophant.png", up: "導き", rev: "形式主義" },
    { name: "恋人", file: "lovers.png", up: "愛", rev: "迷い" },
    { name: "戦車", file: "chariot.png", up: "勝利", rev: "暴走" },
    { name: "力", file: "strength.png", up: "忍耐", rev: "自信喪失" },
    { name: "隠者", file: "hermit.png", up: "探求", rev: "孤独" },
    { name: "運命の輪", file: "wheel.png", up: "転機", rev: "停滞" },
    { name: "正義", file: "justice.png", up: "公平", rev: "不正" },
    { name: "吊るされた男", file: "hangedman.png", up: "試練", rev: "犠牲" },
    { name: "死神", file: "death.png", up: "再生", rev: "変化拒否" },
    { name: "節制", file: "temperance.png", up: "調和", rev: "不安定" },
    { name: "悪魔", file: "devil.png", up: "欲望", rev: "解放" },
    { name: "塔", file: "tower.png", up: "崩壊", rev: "警告" },
    { name: "星", file: "star.png", up: "希望", rev: "失望" },
    { name: "月", file: "moon.png", up: "幻想", rev: "真実" },
    { name: "太陽", file: "sun.png", up: "成功", rev: "停滞" },
    { name: "審判", file: "judgement.png", up: "覚醒", rev: "後悔" },
    { name: "世界", file: "world.png", up: "完成", rev: "未完成" }

]

let isDrawing = false;

function drawCard() {

    if (isDrawing) return;
    isDrawing = true;

    let titleEl = document.getElementById("title");
    let meaningEl = document.getElementById("meaning");
    let cardEl = document.getElementById("card");

    let delay = 0;
    if (cardEl.classList.contains("flip")) {
        cardEl.classList.remove("flip");
        titleEl.innerText = "";
        meaningEl.innerHTML = "";
        delay = 800;
    }

    let i = Math.floor(Math.random() * tarot.length);
    let reverse = Math.random() < 0.5;
    let card = tarot[i];
    let img = document.getElementById("cardFront");

    setTimeout(() => {

        img.src = "./images/" + card.file;
        img.style.transform = reverse ? "rotateY(180deg) rotateZ(180deg)" : "rotateY(180deg)";
        cardEl.classList.add("flip");

        setTimeout(() => {
            let pos = reverse ? "逆位置" : "正位置";
            titleEl.innerText = card.name + "（" + pos + "）";
            meaningEl.innerHTML = reverse ? ("逆位置：" + card.rev) : ("正位置：" + card.up);
            isDrawing = false;
        }, 800);

    }, delay + 100);

}
