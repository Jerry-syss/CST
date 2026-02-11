// index-js.js
function moveAndShowTime() {
    var h1Words = document.getElementById('header-h1');
    if (h1Words) {
        // 计算元素左侧距离视口左侧的距离
        var distanceToLeft = h1Words.getBoundingClientRect().left;
        
        // 向左移动这个距离，它就会刚好贴在最左边
        // 我们预留 20px 的边距，看起来更美观
        h1Words.style.transform = "translateX(-" + (distanceToLeft - 20) + "px)";
        
    }
}

// 稍微延迟运行，确保浏览器已经计算好了初始位置
window.onload = function() {
    setTimeout(moveAndShowTime, 1200); 
};