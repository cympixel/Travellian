// БУРГЕР КНОПКА

const selectors = {
    // root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-header-burger-button]',
    navigationLink:'.header__nav-link'
  }

  const stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

    // let rootElement = document.querySelector(selectors.root)
    let overlayElement = document.querySelector(selectors.overlay)
    let burgerButtonElement = document.querySelector(selectors.burgerButton)
    let navigationLinkElement = document.querySelectorAll(selectors.navigationLink)
    
    burgerButtonElement.addEventListener('click', () => {
        burgerButtonElement.classList.toggle(stateClasses.isActive)
        overlayElement.classList.toggle(stateClasses.isActive)
        document.documentElement.classList.toggle(stateClasses.isLock)

    })
    
    navigationLinkElement.forEach(link => {
      link.addEventListener('click', () => {
        if (overlayElement.classList.contains(stateClasses.isActive)) {
          burgerButtonElement.classList.remove(stateClasses.isActive)
          overlayElement.classList.remove(stateClasses.isActive)
          document.documentElement.classList.remove(stateClasses.isLock)
        }
      })
    })


// Слайдер


const swiper = new Swiper('.swiper-1', {
  loop:true,
  spaceBetween: 32,
  slidesPerGroup: 1,   
  navigation: {
    nextEl: '.slider__arrow-right-1',
    prevEl: '.slider__arrow-left-1',
  },
  observer: true,         
  observeParents: true,    
  observeSlideChildren: true, 
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 1, 
    },
    320: {
      slidesPerView: 1, 
    }
  }
});
const swiper2 = new Swiper('.swiper-2', {
  loop:true,  
  slidesPerGroup: 1,  
  spaceBetween: 32,
  navigation: {
    
  },
  observer: true,         
  observeParents: true,   
  observeSlideChildren: true, 
  navigation: {
    nextEl: '.slider__arrow-right-2',
    prevEl: '.slider__arrow-left-2',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 1, 
    },
    320: {
      slidesPerView: 1, 
    }
  }
});

const swiper3 = new Swiper('.swiper-3', {
  slidesPerView: 'auto', 
  spaceBetween: 32,
  slidesPerGroup: 1,  
  navigation: {
    
  },
  observer: true,          
  observeParents: true,    
  observeSlideChildren: true, 

  
   breakpoints: {
    1154: { 
      enabled: true,
    },
    0: {    
      enabled: false, 
    }
  }
    
  
});
const swiper4 = new Swiper('.swiper-4', {
  slidesPerView: 'auto', 
  spaceBetween: 32,
  slidesPerGroup: 1,  
  navigation: {
    
  },
  observer: true,          // следить за самим swiper-контейнером
  observeParents: true,    // следить за родителями контейнера
  observeSlideChildren: true, 
  navigation: {
    nextEl: '.slider__arrow-right-3',
    prevEl: '.slider__arrow-left-3',
  },
  
   breakpoints: {
    1154: { // от 1154px и выше
      enabled: true,
    },
    0: {    // от 0 до 1153px
      enabled: false, // отключаем слайдер
    }
  }
    
  
});

const swiper5 = new Swiper('.swiper-5', {
  slidesPerView: 'auto', 
  spaceBetween: 32,
  slidesPerGroup: 1,  
  observer: true,          
  observeSlideChildren: true, 
  navigation: {
    nextEl: '.slider__arrow-right-4',
    prevEl: '.slider__arrow-left-4',
  },
  
   
  
    
  
});