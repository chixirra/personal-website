import router from '@/router'

const handleNavigation = (path: string) => {
  const isInternal = router.getRoutes().some((route) => {
    const routePath = route.path.replace(/\/$/, '')
    const inputPath = path.replace(/\/$/, '').split('?')[0].split('#')[0]
    return routePath === inputPath
  })

  if (isInternal) {
    setTimeout(() => {
      router.push(path)
    }, 800)

    const elements = document.querySelectorAll('.outAnim')
    elements.forEach((element) => {
      if (element.classList.contains('animate__zoomIn')) {
        element.classList.add('animate__zoomOut')
      } else if (element.classList.contains('animate__backInLeft')) {
        element.classList.add('animate__backOutLeft')
      } else if (element.classList.contains('animate__backInRight')) {
        element.classList.add('animate__backOutRight')
      } else if (element.classList.contains('animate__backInDown')) {
        element.classList.add('animate__backOutUp')
      } else if (element.classList.contains('animate__backInUp')) {
        element.classList.add('animate__backOutDown')
      } else if (element.classList.contains('animate__bounceIn')) {
        element.classList.add('animate__bounceOut')
      }
    })
  } else {
    window.open(path, '_blank')
  }
}

export default handleNavigation
