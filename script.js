let root = document.querySelector(':root')
let darkMode = document.querySelector('.checkbox-dark-mode');

darkMode.addEventListener('change', function(e){
    
    if (this.checked) {
        root.style.setProperty('--dark-background', 'hsl(230, 17%, 14%)');
        root.style.setProperty('--dark-text', 'hsl(228, 34%, 66%)');
        root.style.setProperty('--dark-secondary-text', 'white');
        root.style.setProperty('--dark-card-background-hover', 'hsl(231, 16%, 23%)');
        root.style.setProperty('--dark-card-background', 'hsl(228, 28%, 20%)');
    } else {
        root.style.setProperty('--dark-background', 'white');
        root.style.setProperty('--dark-text', 'hsl(228, 12%, 44%)');
        root.style.setProperty('--dark-secondary-text', 'hsl(230, 17%, 14%)');
        root.style.setProperty('--dark-card-background', 'hsl(227, 47%, 96%)');
        root.style.setProperty('--dark-card-background-hover', 'hsl(228, 37%, 89%)');

    }
})
