class Carousel {
    constructor(root){
        this.root=root
        this.currentIndex=0
        this.imageList=this.root.querySelectorAll('img')
        this.leftButton=this.root.querySelector('.left-button')
        this.rightButton=this.root.querySelector('.right-button')

        this.display()

        this.leftButton.addEventListener('click',(e)=>{
                this.moveLeft()
        })
        this.rightButton.addEventListener('click',(e)=>{
                this.moveRight()
        })
    }

    display(){
       this.imageList[this.currentIndex].style.display='block'
    }
    hide(){
        this.imageList[this.currentIndex].style.display='none'
    }

    moveLeft(){
        this.hide()
        if(--this.currentIndex<0)
            this.currentIndex=this.imageList.length-1
        this.display()
    }
    moveRight(){
        this.hide()
        if(++this.currentIndex>=this.imageList.length)
            this.currentIndex=0
        this.display()
    }
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
