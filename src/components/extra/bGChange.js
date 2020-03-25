export function init(resultFromServer) {
    switch (resultFromServer) {
        case 'Clear':
            document.body.style.backgroundImage = 'url("https://jooinn.com/images/trees-and-grass-field-under-cloudy-sky-during-daytime.jpg")';
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundRepeat = 'no-repeat'
            break;
        case 'Clouds':
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")';
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundRepeat = 'no-repeat'
            break;
        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")';
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundRepeat = 'no-repeat'
            break;
        case 'ThunderStorm':
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260")';
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundRepeat = 'no-repeat'
            break;

        case 'Snow':
            document.body.style.backgroundImage = 'url("https://images.pexels.com/photos/289649/pexels-photo-289649.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260")';
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundRepeat = 'no-repeat'
            break;
        default:
            break;
    }
}