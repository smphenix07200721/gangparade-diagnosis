let scores = {
    "ヤママチミキ":0,
    "ユメノユア":0,
    "キャン・GP・マイカ":0,
    "ココ・パーティン・ココ":0,
    "ユイ・ガ・ドクソン":0,
    "月ノウサギ":0,
    "キラ・メイ":0,
    "キャ・ノン":0,
    "チャンベイビー":0,
    "ナルハワールド":0,
    "アイナスター":0,
};


const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const question2Screen = document.getElementById("question2Screen");
const question3Screen = document.getElementById("question3Screen");
const question4Screen = document.getElementById("question4Screen");
const question5Screen = document.getElementById("question5Screen");
const resultScreen = document.getElementById("resultScreen");
const resultImage = document.getElementById("resultImage");
const restartButton = document.getElementById("restartButton");
const resultName = document.getElementById("resultName");
const resultText = document.getElementById("resultText");

const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
const answerE = document.getElementById("answerE");
const answerF = document.getElementById("answerF");
const answerG = document.getElementById("answerG");
const answerH = document.getElementById("answerH");
const answerI = document.getElementById("answerI");
const answerJ = document.getElementById("answerJ");
const answerK = document.getElementById("answerK");
const answerL = document.getElementById("answerL");

startButton.addEventListener("click", function(){
    startScreen.style.display = "none";
    questionScreen.style.display = "block";
});
answerA.addEventListener("click", function(){
    scores["ココ・パーティン・ココ"]++;
    scores["チャンベイビー"]++;
    scores["月ノウサギ"]++;
    scores["ユイ・ガ・ドクソン"]++;
    scores["アイナスター"]++;
    scores["キャン・GP・マイカ"]++;
    questionScreen.style.display = "none";
    question2Screen.style.display = "block";
});


answerB.addEventListener("click", function(){
    scores["ユメノユア"]++;
    scores["キャ・ノン"]++;
    scores["キラ・メイ"]++;
    scores["ヤママチミキ"]++;
    questionScreen.style.display = "none";
    question2Screen.style.display = "block";
});

answerC.addEventListener("click", function(){
    scores["ユイ・ガ・ドクソン"]++;
    scores["月ノウサギ"]++;
    scores["チャンベイビー"]++;
    question2Screen.style.display = "none";
    question3Screen.style.display = "block";

});

answerD.addEventListener("click", function(){
    scores["ユメノユア"]++;
    scores["ココ・パーティン・ココ"]++;
    scores["ヤママチミキ"]++;
    scores["キャ・ノン"]++;
    question2Screen.style.display = "none";
    question3Screen.style.display = "block";
});

answerE.addEventListener("click", function(){
    scores["ココ・パーティン・ココ"]++;
    scores["月ノウサギ"]++;
    scores["チャンベイビー"]++;
    scores["ナルハワールド"]++;
    question3Screen.style.display = "none";
    question4Screen.style.display = "block";

});


answerF.addEventListener("click", function(){
    scores["キャ・ノン"]++;
    scores["キラ・メイ"]++;
    scores["ヤママチミキ"]++;
    scores["ユメノユア"]++;
    scores["アイナスター"]++;
    question3Screen.style.display = "none";
    question4Screen.style.display = "block";
});

answerG.addEventListener("click", function(){
    scores["ユイ・ガ・ドクソン"]++;
    scores["キャン・GP・マイカ"]++;
    question3Screen.style.display = "none";
    question4Screen.style.display = "block";
});

answerH.addEventListener("click", function(){
    scores["ココ・パーティン・ココ"]++;
    scores["チャンベイビー"]++;
    scores["アイナスター"]++;
    scores["月ノウサギ"]++;
    scores["ユメノユア"]++;
    question4Screen.style.display = "none";
    question5Screen.style.display = "block";
});

answerI.addEventListener("click", function(){
    scores["キャ・ノン"]++;
    scores["キラ・メイ"]++;
    scores["ナルハワールド"]++;
    scores["ヤママチミキ"]++;
    question4Screen.style.display = "none";
    question5Screen.style.display = "block";
})

answerJ.addEventListener("click",function(){
    scores["ユイ・ガ・ドクソン"]++;
    scores["キャン・GP・マイカ"]++;
    question4Screen.style.display = "none";
    question5Screen.style.display = "block";
})


answerK.addEventListener("click", function(){
    scores["キャン・GP・マイカ"]++;
    scores["ユイ・ガ・ドクソン"]++;
    scores["チャンベイビー"]++;
    scores["ココ・パーティン・ココ"]++;
    scores["月ノウサギ"]++;
    showResult();
});

answerL.addEventListener("click", function(){
    scores["キャ・ノン"]++;
    scores["ユメノユア"]++;
    scores["ナルハワールド"]++;
    scores["キラ・メイ"]++;
    scores["アイナスター"]++;
    scores["ヤママチミキ"]++;
    showResult();
});

function showResult(){

    question5Screen.style.display = "none";
    resultScreen.style.display = "block";

    let maxMember = "";
    let maxPoint = -1;
    
    for(let member in scores){
        if(scores[member] >maxPoint){
            maxPoint = scores[member];
            maxMember =member;
        }
    }

    restartButton.addEventListener("click", function(){

        //点数をリセット
        for(let member in scores){
            scores[member] = 0;
        }
        
        resultName.textContent = "";
        resultText.textContent = "";
        resultImage.src = "";

        resultScreen.style.display ="none";
        startScreen.style.display ="block";
    });
    //
        resultName.textContent =maxMember;

        if(maxMember === "チャンベイビー"){

            resultImage.src = "images/chang.jpg";

            resultText.textContent =
            "どんな時も笑顔あふれるあなたには、笑顔やパフォーマンスでファンの人を幸せな気持ちにさせる彼女がぴったりです‼彼女の魅力はなんといっても笑顔です。その笑顔にファンはたくさんメロメロになっています。さらに彼女は「HAPPY BABY CLUB」というブランドを立ち上げたくさんのお洋服やぬいぐるみなど、より自分の魅力を発信しています‼";
        }

        else if(maxMember === "キャ・ノン"){

            resultImage.src = "images/canon.jpg";

            resultText.textContent =
            "自分の世界も大事にしながら、冷静な判断ができるあなたには彼女がおすすめです‼彼女はしっかり者でメンバーの中でも司会進行をしたりするほどです。そしてライブパフォーマンス中に見せる鬼かっこいい表情や笑顔に虜ならない人はいないです‼";
        }

        else if(maxMember === "ユイ・ガ・ドクソン"){
            resultImage.src = "images/ユイガドクソン.jpg";

            resultText.textContent ="好奇心旺盛なあなたはギャンパレ一鬼才な彼女がぴったりです。"

        }

        else if(maxMember === "ヤママチミキ"){
            resultImage.src = "images/ヤマ.jpg";

            resultText.textContent ="パフォーマンスが大好きなあなたは彼女を推すのをお勧めします。彼女の歌声はしびれるような感覚があり、彼女の歌声をずっと聞いていたくなります。"

        }

        else if(maxMember === "アイナスター"){
            resultImage.src = "images/ainastar.jpg";

            resultText.textContent ="ひたむきに努力を続けているあなたにはアイナスターをお勧めいたします‼彼女は所属している事務所WACKの育成グループ（WAgg）から昇格したのがギャンパレです。当初はファンの人に認めてもらいたい、ギャンパレの一員であることの責任感などを一人で抱え込んでしまうことがあったが、活動していく中で彼女なりに殻を破り、たくさんのファンをアイナスターの沼に落とすほどにまで成長しています‼"

        }

        else if(maxMember === "ユメノユア"){
            resultImage.src = "images/5659.jpg";

            resultText.textContent ="好きなものを密かに応援しているあなたには彼女をお勧めします。彼女はメンバーのヤママチミキと一緒に10年以上もグループを支えている立役者の一人です。彼女はライブ中ものすごくかっこいいパフォーマンスをファンに届けてくれていますが、特典会の時ではまるで聖母のような優しいユアさんを見ることができます‼"

    　　}


    　　else if(maxMember === "キラ・メイ"){
            resultImage.src = "images/キラ・メイ.jpg";

            resultText.textContent ="インドア派なあなたには彼女をおすすめします。彼女はアニメや漫画などが好きでFCブログなどで彼女が好きな漫画をお勧めしてくれています。そしてモデルさんのようなスタイルの良さ。ウフフフ～～と笑う彼女の笑い声や笑顔もなお素敵ですよ‼"

    　　}


         
        else if(maxMember === "キャン・GP・マイカ"){
            resultImage.src = "images/キャンGPマイカ.jpg";

            resultText.textContent ="縁の下の力持ちのようなあなたには彼女をお勧めします‼なんといっても彼女はギャンパレの楽曲の多くを振り付けしています。さらに、外部のアイドルの振り付けなども行っています。そんな彼女をぜひ推してみてはいかがでしょうか？"

        }

         else if(maxMember === "ココ・パーティン・ココ"){
            resultImage.src = "images/ココ・パーティン・ココ.jpg";

            resultText.textContent ="歌声に惹かれるあなたには彼女をお勧めします‼彼女はギャンパレの歌姫といわれるくらいに魂を揺さぶる歌声でファンを魅了しています‼"

        }

        else if(maxMember === "月ノウサギ"){
            resultImage.src = "images/月ノウサギ.jpg";

            resultText.textContent ="まさに太陽のような明るさを持つあなたには彼女をお勧めいたします‼彼女はギャンパレ一声が大きいです。彼女がいると少ししんみりしたときでも場が明るくなるほどです‼"

        }

　　　　else if(maxMember === "ナルハワールド"){
            resultImage.src = "images/ナルハワールド.jpg";

            resultText.textContent ="メンバーの表情に魅力を感じるあなたには彼女をおすすめします‼彼女はギャンパレの中でも大天使と呼ばれるほどしぐさや笑顔がとても素敵な子です。彼女こそＴＨＥアイドルを体現したような子です。さらに彼女はスウィーツも大好きであり、よく食べたスウィーツの写真を上げています。"

        }

        }