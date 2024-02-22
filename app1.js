
// 下载按钮
let installBtn = document.querySelector('.installApp')
 
// 下载对象
let appPromptEvent = null
 
// 浏览器地址支持下载的话触发此事件
window.addEventListener('beforeinstallprompt', e => {
    appPromptEvent = e
})
 
// 点击下载按钮
window.addEventListener('load', () => {
    if (appPromptEvent !== null) {
        // 调用安装
        appPromptEvent.prompt()
        // 回调
        appPromptEvent.userChoice.then((res)=>{
            if (res.outcome === 'accepted') {
                console.log('install succeed')
            }
            else{
                console.log('cancel install')
            }
            appPromptEvent = null
        })
    }
})
 
// 监听安装完成
window.addEventListener('appinstalled',() => {})
 
// 判断是否桌面打开
if (window.matchMedia('(display-mode: standalone)').matches) {}
