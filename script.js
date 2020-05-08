
let imageSrc = document.getElementById('quote');
let button = document.getElementById('btn')
imageSrc.style.backgroundImage = 'url("images/mee.jpg")'

const imageChnager = () => {
    let randomImg = Math.floor(Math.random() * 20);
  btn.style.color = '#fff'

    switch (randomImg) {
        //Love Quote
        case 0:
            imageSrc.style.backgroundImage = 'url("images/Bolu.JPG")';
            break;
        case 1:
            imageSrc.style.backgroundImage = 'url("images/aitechma.jpg")';
            break;
        case 2:
            imageSrc.style.backgroundImage = 'url("images/bro.jpg")';
            break;
        case 3:
            imageSrc.style.backgroundImage = 'url("images/dev.jpg")';
            break;
        case 4:
            imageSrc.style.backgroundImage = 'url("images/Dipo.jpg")';
            break;
        case 5:
            imageSrc.style.backgroundImage = 'url("images/funmi.jpg")';
            break;
        case 6:
            imageSrc.style.backgroundImage = 'url("images/godwin-place.jpg")';
            break;
        case 7:
            imageSrc.style.backgroundImage = 'url("images/joy.png")';
            break;
        case 8:
            imageSrc.style.backgroundImage = 'url("images/me.jpg")';
            break;
        case 9:
            imageSrc.style.backgroundImage = 'url("images/mum.jpg")';
            break;
        case 10:
            imageSrc.style.backgroundImage = 'url("images/nath.jpg")';
            break;
        case 11:
            imageSrc.style.backgroundImage = 'url("images/pool.jpg")';
            break;
        case 12:
            imageSrc.style.backgroundImage = 'url("images/sam.png")';
            break;
        case 13:
            imageSrc.style.backgroundImage = 'url("images/sams.jpeg")';
            break;
        case 14:
            imageSrc.style.backgroundImage = 'url("images/saxido.jpg")';
            break;
        case 15:
            imageSrc.style.backgroundImage = 'url("images/sis.jpg")';
            break;
        case 16:
            imageSrc.style.backgroundImage = 'url("images/sydney.jpg")';
            break;
        case 17:
            imageSrc.style.backgroundImage = 'url("images/tijesu.jpg")';
            break;
        case 18:
            imageSrc.style.backgroundImage = 'url("images/tosin.png")';
            break;
        case 19:
            imageSrc.style.backgroundImage = 'url("images/Unilag.JPG")';
            break;
        case 20:
            imageSrc.style.backgroundImage = 'url("images/vic.jpg")';
            break;

    }


    if (randomImg <= 5) {
        quote.style.backgroundColor = "rgb(245, 107, 194)"; 
        button.style.backgroundColor = 'rgb(245, 107, 194)'
        body.style.backgroundColor = 'rgba(245, 107, 194, 0.18)';
    }
    else if (randomImg <= 10){
        quote.style.backgroundColor = "#b270e2"; 
        button.style.backgroundColor= "#b270e2"
        body.style.backgroundColor = 'rgba(178, 112, 226, 0.23)';
    }
    else if (randomImg <= 13){
        quote.style.backgroundColor = "rgba(169, 165, 11, 0.85)";
        button.style.backgroundColor = "rgba(169, 165, 11, 0.85)"
        body.style.backgroundColor = 'rgba(169, 165, 11, 0.21)';
    }
    else if (randomImg <= 15){
        quote.style.backgroundColor = "#3b76c1bd";
        button.style.backgroundColor  = "#3b76c1bd";
        body.style.backgroundColor = 'rgba(59, 118, 193, 0.25)';
    }
    else if (randomImg <=20) {
        quote.style.backgroundColor = "#da7272"; 
        button.style.backgroundColor = "#da7272"; 
        body.style.backgroundColor = 'rgba(218, 114, 114, 0.23)';
    }
}


