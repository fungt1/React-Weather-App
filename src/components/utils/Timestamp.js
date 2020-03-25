export function TimeStamp(t) {

    let dt = new Date(t * 1000);
    let hr = dt.getHours();
    let ampm = hr >= 12 ? 'pm' : 'am';
    if (hr > 12) {
        hr -= 12;
    } else if (hr === 0) {
        hr = 12;
    }
    let m = "0" + dt.getMinutes();
    return hr + ':' + m.substr(-2) + ampm;



}