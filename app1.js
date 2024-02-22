// 点击时弹出浏览器自带的添加屏幕按钮
import eventBus from '@/lib/evtbus'

let deferredPrompt: any
window.addEventListener('beforeinstallprompt', (e: any) => {
  e.preventDefault();
  deferredPrompt = e
  eventBus.on('showAddDeskPrompt', () => {
    // 显示提示，每个deferredPrompt.prompt只能使用一次
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then((choiceResult: {[key: string]: any}) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('用户点击了安装，该deferredPrompt.prompt已被使用')
      } else {
        console.log('用户取消安装，该deferredPrompt.prompt仍可继续使用')
      }
      deferredPrompt = null
    })
  })
})
