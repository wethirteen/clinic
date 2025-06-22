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

// 0-2. 광고 팝업
const $popupContainer = document.querySelector('.modal-popup')
const $backdropContainer = document.querySelector('.backdrop')
const $closePopupButton = document.querySelector('.modal-popup-close')
const $closePopup24HourButton = document.querySelector('.modal-popup-24h-button')

const openPopup = () => {
  $popupContainer.classList.remove('is-hidden')
  $backdropContainer.classList.add('is-open')
}

const closePopup = () => {
  $popupContainer.classList.add('is-hidden')
  $backdropContainer.classList.remove('is-open')
}

const closePopupFor24Hours = () => {
  const today = new Date()
  localStorage.setItem('popup-closed-time', today.getTime())
  closePopup()
}

$closePopupButton.addEventListener('click', closePopup)
$closePopup24HourButton.addEventListener('click', closePopupFor24Hours)

const initPopup = () => {
  const today = new Date()
  const currentTime = today.getTime()
  const setTime = localStorage.getItem('popup-closed-time')
  const isOver24Hours = (currentTime - setTime) / (1000 * 60 * 60 * 24) >= 1

  if (isOver24Hours) {
    // 1일이 지났을 경우 다시 팝업을 노출
    localStorage.removeItem('popup-closed-time')
    openPopup()
  }
}

initPopup()
