<?php
// 送信先のメールアドレス
$to = "qpdbqpdb.t@gmail.com";

// フォームからのデータを取得
$name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

// メールの件名
$subject = "お問い合わせフォームからのメッセージ";

// メール本文
$body = "お名前: $name\n";
$body .= "メールアドレス: $email\n\n";
$body .= "お問い合わせ内容:\n$message\n";

// メールヘッダー
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// メール送信
if (mail($to, $subject, $body, $headers)) {
    echo "メールが正常に送信されました。";
} else {
    echo "メールの送信中にエラーが発生しました。";
}
?>
