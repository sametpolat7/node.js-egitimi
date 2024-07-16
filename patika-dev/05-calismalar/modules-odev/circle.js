function circleArea(rad) {
    let area = Math.PI * Math.pow(rad, 2);
    return console.log(`Yaricapi ${rad} cm olan dairenin alani ${area.toFixed(2)} cm2dir.`);
}

function circlePerimeter(rad) {
    let perimeter = 2 * Math.PI * rad;
    return console.log(`Yaricapi ${rad} cm olan dairenin çevresi ${perimeter.toFixed(2)} cmdir.`);
}

module.exports = {
    circleArea,
    circlePerimeter
}