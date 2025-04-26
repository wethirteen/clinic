AOS.init()

// 2. 이벤트
const $eventViewMoreButton = document.querySelector('.view-more-button.event')
const $hiddenEventList = document.querySelectorAll('.event-hidden')

const showHiddenEventList = () => {
  $hiddenEventList.forEach((item) => item.classList.remove('event-hidden'))
  $eventViewMoreButton.classList.add('is-hidden')
}

$eventViewMoreButton.addEventListener('click', showHiddenEventList)

const showEventListInDesktop = () => {
  if (window.innerWidth >= 992) {
    showHiddenEventList()
  }
}

window.addEventListener('resize', showEventListInDesktop)
showEventListInDesktop()

// 3. 보유 장비
const $holdingsViewMoreButton = document.querySelector('.view-more-button.holdings')
const $hiddenHoldingList = document.querySelectorAll('.holdings-hidden')

const showHiddenHoldingList = () => {
  $hiddenHoldingList.forEach((item) => item.classList.remove('holdings-hidden'))
  $holdingsViewMoreButton.classList.add('is-hidden')
}

$holdingsViewMoreButton.addEventListener('click', showHiddenHoldingList)

const showHoldingsListInDesktop = () => {
  if (window.innerWidth >= 992) {
    showHiddenHoldingList()
  }
}

window.addEventListener('resize', showHoldingsListInDesktop)
showHoldingsListInDesktop()
