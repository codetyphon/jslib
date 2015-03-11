//时间初始化
function time(sTime,timeEleId,refresh) {
    var timeEle=document.getElementById(timeEleId);
    this.getServerTime(refresh);
    this.nowTimeWeek = this.serverTime.getDay();
    this.nowTimeHour = this.serverTime.getHours();
    this.nowTimeMinute = this.serverTime.getMinutes();
    this.diffTime = this.serverTime.getTime() - new Date(sTime.replace(/\-/g, "/")).getTime();
    this.dayNum = parseInt(this.diffTime / (1000 * 3600 * 24));
    if (this.dayNum > 0) {
        timeEle.innerHTML = this.dayNum + "天前";
    } else {
        this.hourNum = parseInt(this.diffTime / (1000 * 3600));
        if (this.hourNum > 0) {
            timeEle.innerHTML = this.hourNum + "小时前";
        } else {
            this.minuteNum = parseInt(this.diffTime / (1000 * 60));
            if (this.minuteNum > 0) {
                timeEle.innerHTML = this.minuteNum + "分钟前";
            } else {
                return null;
            }
        }
    }
}
