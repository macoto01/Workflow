function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('clock').textContent = currentTime;
}

// 初回の時間更新
updateClock();

// 1秒ごとに時間を更新
setInterval(updateClock, 1000);