// دالة البحث في المحتوى
function searchContent() {
    // الحصول على النص المدخل في مربع البحث
    var input = document.getElementById('searchInput').value.toLowerCase();
    var resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = ''; // تفريغ نتائج البحث السابقة

    // الحصول على جميع العناصر التي يمكن البحث فيها
    var elementsToSearch = document.querySelectorAll('#app, #app *');

    // البحث في كل عنصر
    elementsToSearch.forEach(function(element) {
        if (element.innerText.toLowerCase().includes(input)) {
            // إنشاء نتيجة بحث جديدة
            var result = document.createElement('div');
            result.textContent = element.innerText;
            result.style.padding = '10px';
            result.style.border = '1px solid #ddd';
            result.style.margin = '10px 0';
            resultsDiv.appendChild(result);
        }
    });

    // عرض رسالة إذا لم يتم العثور على نتائج
    if (!resultsDiv.innerHTML) {
        resultsDiv.innerHTML = '<p>لم يتم العثور على نتائج</p>';
    }
}
