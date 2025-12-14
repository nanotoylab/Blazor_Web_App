// wwwroot/utility/confirmation.js の中身

// windowオブジェクトにこの関数を登録することで、C#から呼び出し可能になる
window.confirmDelete = function (message) {
    // 標準の confirm() ダイアログを表示し、結果の真偽値をそのまま返す
    return confirm(message);
};