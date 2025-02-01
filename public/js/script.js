function validateForm() {
    let isValid = true;

    // エラーコンテナを取得
    const errorContainer = document.getElementById('error-container');
    errorContainer.style.display = 'none'; // 初期状態で非表示
    errorContainer.innerHTML = ''; // エラーメッセージをリセット

    // 検証対象のフィールドとエラーメッセージを定義
    const fields = [
        { id: 'email', message: 'メールアドレスを入力してください。' },
        { id: 'message', message: 'お問い合わせ内容を入力してください。' }
    ];

    // 全てのエラーメッセージを収集
    const errorMessages = [];

    // 各フィールドを検証
    fields.forEach(field => {
        const input = document.getElementById(field.id);

        // 入力値が空の場合
        if (input.value.trim() === '') {
            errorMessages.push(field.message); // エラーメッセージを追加
            input.classList.add('error'); // エラー枠線を追加
            isValid = false; // フォーム送信を無効に設定
        } else {
            input.classList.remove('error'); // エラー枠線を解除
        }
    });

    // エラーメッセージを表示
    if (errorMessages.length > 0) {
        const errorList = document.createElement('ul');
        errorList.className = 'error-list'; // スタイル用クラスを追加

        errorMessages.forEach(message => {
            const errorItem = document.createElement('li');
            errorItem.textContent = message; // 各エラーメッセージをリスト化
            errorList.appendChild(errorItem);
        });

        errorContainer.appendChild(errorList); // エラーコンテナにリストを追加
        errorContainer.style.display = 'block'; // エラーメッセージを表示
    }

    return isValid; // 全て入力されていれば true を返す
}
