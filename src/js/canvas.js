import utils, { randomIntFromRange } from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
  ball2.x = event.clientX
  ball2.y = event.clientY
  if(ball2.x + ball2.radius >= ball1.x - ball1.radius && ball2.x - ball2.radius <= ball1.x + ball1.radius && ball2.y + ball2.radius >= ball1.y - ball1.radius && ball2.y - ball2.radius <= ball1.y + ball1.radius){
    ball1.color = 'red'
    console.log('xd')
    ball2.color = 'black'
  } else {
    ball1.color = 'black'
    ball2.color = 'red'
  }
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Ball {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.stroke()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

// Implementation
let ball1 
let ball2
function init() {
  ball1 = new Ball(innerWidth/2,innerHeight/2,100,'black')
  ball2 = new Ball(undefined,undefined,30,'red')
  
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  ball1.update()
  ball2.update()
  }

init()
animate()
