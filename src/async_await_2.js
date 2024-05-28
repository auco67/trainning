// 1. 「手紙を書く」のをシミュレートする非同期関数
async function writeLetter() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("手紙の内容");
        }, 2000); // 2秒後に「手紙の内容」という結果を返します。
    });
}

// 2. 手紙が届くのを待って、それを読む関数
async function readLetter() {
    console.log("手紙を待っています...");
    let letter = await writeLetter(); // 手紙が届くのを待ちます。
    console.log("手紙が届きました:", letter);
}

// この関数を実行してみる
readLetter();