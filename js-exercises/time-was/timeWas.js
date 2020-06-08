

function timeWas(dateTime, setTime) {
    var calculatedTime = new Date(dateTime);
    var presentDate = new Date(Date.now());
    if(setTime)
    {
        presentDate = new Date(setTime);
    }
    var difference = calculatedTime.getTime() - presentDate.getTime();
        if (calculatedTime < presentDate) {
            difference = presentDate.getTime() - calculatedTime.getTime();
        }
        var seconds = (difference / 1000) ;
        var minutes = seconds/ 60;
        var hours = minutes / 60;
        var days = hours / 24;
        var weeks = days / 7;
        var months = days / 30;
        var years = months / 12;
        if(Math.floor(years) !== 0)
        {
            if(years == 1)
            {
                return years +' year ago'
            }
            return Math.floor(years) +' years ago'
        }
        else if(Math.floor(months) !== 0)
        {
            if(months == 1)
            {
                return months +' month ago'
            }
            return Math.floor(months) +' months ago'
        }
        else if(Math.floor(weeks) !== 0)
        {
            if(weeks == 1)
            {
                return weeks +' week ago'
            }
            return Math.floor(weeks) +' weeks ago'
        }
        else if(Math.floor(days) !== 0)
        {
            if(days == 1)
            {
                return days +' day ago'
            }
            return Math.floor(days) +' days ago'
        }
        else if(Math.floor(hours) !== 0)
        {
            if(hours == 1)
            {
                return hours +' hour ago'
            }
            return Math.floor(hours) +' hours ago'
        }
        else if(Math.floor(minutes) !== 0)
        {
            if(minutes == 1)
            {
                return minutes +' minute ago'
            }
            return Math.floor(minutes) +' minutes ago'
        }
        else
        {
            if(Math.floor(seconds) === 0 && seconds < 1)
            {
                return 'just now';
            }
            else if(seconds == 1)
            {
                return seconds +' second ago'
            }
            return seconds +' seconds ago'
        }
}
export { timeWas };
