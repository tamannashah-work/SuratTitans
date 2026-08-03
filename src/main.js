import '../styles.css'

const button = document.querySelector('.menu-toggle')
const nav = document.querySelector('.nav')

button.addEventListener('click', () => {
  const open = nav.classList.toggle('open')
  button.setAttribute('aria-expanded', String(open))
})

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'))
})
