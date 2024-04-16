const arg = process.argv.slice(2);

function circleArea(radius) {
    let rad = parseFloat(radius);
    if (!isNaN(rad)) {
        let area = Math.PI * Math.pow(rad, 2);
        return console.log(`Yaricapi ${rad} cm olan dairenin alani ${area.toFixed(2)} cm2'dir.`);
    }
    else {
        console.log('Hata! Lutfen gecerli bir sayi giriniz.');
    }
}

circleArea(arg[0]);