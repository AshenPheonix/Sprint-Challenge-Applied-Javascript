class Carousel {
    constructor(root){
        this.root=root
        this.currentIndex=0
        this.imageList=this.root.querySelectorAll('img')
        this.leftButton=this.root.querySelector('.left-button')
        this.rightButton=this.root.querySelector('.right-button')

        this.display('Left')

        this.leftButton.addEventListener('click',(e)=>{
                this.moveLeft()
        })
        this.rightButton.addEventListener('click',(e)=>{
                this.moveRight()
        })
        this.root.addEventListener('dblclick',(e)=>{
                e.preventDefault();
        })
        this.root.addEventListener('animationend',(e)=>{
            this.root.querySelectorAll('.viewed').forEach(item=>item.classList.remove('viewed','exitLeft','exitRight','moveLeft','moveRight'))
            this.imageList[this.currentIndex].classList.add('viewed')
        })
        this.imageList[0].classList.add('viewed')
    }

    display(dir){
        this.imageList[this.currentIndex].classList.add(`move${dir}`)
    }
    hide(dir){
        this.imageList[this.currentIndex].classList.remove('moveLeft','moveRight')
        this.imageList[this.currentIndex].classList.add(`exit${dir}`)
    }
    moveLeft(){
        this.hide('Left')
        if(--this.currentIndex<0)
            this.currentIndex=this.imageList.length-1
        this.display('Left')
    }
    moveRight(){
        this.hide('Right')
        if(++this.currentIndex>=this.imageList.length)
            this.currentIndex=0
        this.display('Right')
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
