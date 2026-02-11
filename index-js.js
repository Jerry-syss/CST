// index-js.js

function moveAndShowTime() {
    var h1Words = document.getElementById('header-h1');
    var time = document.getElementById('time');

    if (h1Words) {
        var distanceToLeft = h1Words.getBoundingClientRect().left;
        h1Words.style.transform = "translateX(-" + (distanceToLeft - 20) + "px)";

        // 监听移动动画结束
        h1Words.addEventListener('transitionend', function() {
            // 给 time 加上我们在 CSS 写好的动画类
            time.classList.add('fade-in');
            // 运行时间更新逻辑
            showTime();
        }, { once: true });
    }
}

function showTime() {
    var nowTime_GMT = new Date();
    // 你的时间格式化逻辑...
    var nowTime = nowTime_GMT.toString().replace(/\sGMT.*$/, "");
    
    // 优化：使用数组或更简洁的逻辑判断时间段
    var nowHour = nowTime_GMT.getHours(); 
    var words = "";
    
    if (nowHour >= 4 && nowHour <= 6) words = "清晨 ";
    else if (nowHour > 6 && nowHour <= 10) words = "早上 ";
    else if (nowHour > 10 && nowHour <= 13) words = "中午 ";
    else if (nowHour > 13 && nowHour <= 18) words = "下午 ";
    else if (nowHour > 18 && nowHour <= 23) words = "晚上 ";
    else words = "深夜 ";

    document.getElementById('time').textContent = words + nowTime;
}

// 保持每秒更新
setInterval(showTime, 1000);

window.onload = function() {
    setTimeout(moveAndShowTime, 1200); 
};