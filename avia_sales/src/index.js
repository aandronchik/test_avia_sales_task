var filter_btn1 = document.getElementById("filter_btn1")
var filter_btn2 = document.getElementById("filter_btn2")
var filter_btn3 = document.getElementById("filter_btn3")


function remove_tickets() {
    var elements = document.getElementsByClassName("ticket__wrapper")

    for (var i = 0; i < elements.length; i++) {
        elements[i].remove()
        i -= 1
    }
}


function get_tickets_by_transfers(transfers) {
    var ticket_objects_copy = Array();
    switch (transfers.length) {
        case 1:
            for (var j = 0; j < ticket_objects.length; j++) {
                if (ticket_objects[j]['segments'][0]['stops'].length === transfers[0] && ticket_objects[j]['segments'][1]['stops'].length === transfers[0]) {
                    ticket_objects_copy.push(ticket_objects[j])
                }
            }
            break;
        case 2:
            for (var j = 0; j < ticket_objects.length; j++) {
                if ((ticket_objects[j]['segments'][0]['stops'].length === transfers[0] && ticket_objects[j]['segments'][1]['stops'].length === transfers[0]) ||
                    (ticket_objects[j]['segments'][0]['stops'].length === transfers[1] && ticket_objects[j]['segments'][1]['stops'].length === transfers[1])) {
                    ticket_objects_copy.push(ticket_objects[j])
                }
            }
            break;
        case 3:
            for (var j = 0; j < ticket_objects.length; j++) {
                if ((ticket_objects[j]['segments'][0]['stops'].length === transfers[0] && ticket_objects[j]['segments'][1]['stops'].length === transfers[0]) ||
                    (ticket_objects[j]['segments'][0]['stops'].length === transfers[1] && ticket_objects[j]['segments'][1]['stops'].length === transfers[1]) ||
                    (ticket_objects[j]['segments'][0]['stops'].length === transfers[2] && ticket_objects[j]['segments'][1]['stops'].length === transfers[2])) {
                    ticket_objects_copy.push(ticket_objects[j])
                }
            }
            break;
        case 4:
        case 0:
            ticket_objects_copy = JSON.parse(localStorage.getItem('tickets'))['tickets']
            break;

    }
    if (filter_btn1.className.includes('active')) {
        ticket_objects_copy = ticket_objects_copy.sort(function (a, b) {
            return a.price - b.price
        })
    } else if (filter_btn2.className.includes('active')) {
        ticket_objects_copy = ticket_objects_copy.sort(function (a, b) {
            return (a['segments'][0]['duration'] + a['segments'][1]['duration']) - (b['segments'][0]['duration'] + b['segments'][1]['duration'])
        })
    }
    return ticket_objects_copy
}


var checked_no_transfer = document.getElementById("no_transfers")
var checked_one_transfer = document.getElementById("one_transfer")
var checked_two_transfers = document.getElementById("two_transfers")
var checked_three_transfers = document.getElementById("three_transfers")
var checked_all = document.getElementById("all")


let ticket_objects_copy = Array()
checked_no_transfer.addEventListener("click", function () {
        let no_transfers = document.getElementById("no_transfers").checked
        let transfers = Array()
        if (checked_all.checked) {
            transfers = [0, 1, 2, 3]
            checked_all.checked = false
        } else {
            if (checked_one_transfer.checked) {
                transfers.push(1)
            }
            if (checked_two_transfers.checked) {
                transfers.push(2)
            }
            if (checked_three_transfers.checked) {
                transfers.push(3)
            }
        }


        remove_tickets()
        tickets_count = 0
        document.getElementById('more__tickets__btn').style.display = "block";
        document.getElementById("tickets__block").classList.remove("scroll");
        if (no_transfers) {
            transfers.push(0)
            ticket_objects_copy = get_tickets_by_transfers(transfers)
        } else {
            var index = transfers.indexOf(0);
            if (index > -1) {
                transfers.splice(index, 1)
            }
            ticket_objects_copy = get_tickets_by_transfers(transfers)
            // ticket_objects_copy = JSON.parse(localStorage.getItem('tickets'))['tickets']
        }
        tickets_count = tickets_pack(ticket_objects_copy, tickets_count, ticket_objects_copy.length)
    }
)


checked_one_transfer.addEventListener("click", function () {
        let one_transfer = document.getElementById("one_transfer").checked
        let transfers = Array()
        if (checked_all.checked) {
            transfers = [0, 1, 2, 3]
            checked_all.checked = false
        } else {
            if (checked_no_transfer.checked) {
                transfers.push(0)
            }
            if (checked_two_transfers.checked) {
                transfers.push(2)
            }
            if (checked_three_transfers.checked) {
                transfers.push(3)
            }
        }

        remove_tickets()
        tickets_count = 0
        document.getElementById('more__tickets__btn').style.display = "block";
        document.getElementById("tickets__block").classList.remove("scroll");
        if (one_transfer) {
            transfers.push(1)
            ticket_objects_copy = get_tickets_by_transfers(transfers)
        } else {
            var index = transfers.indexOf(1);
            if (index > -1) {
                transfers.splice(index, 1)
            }
            ticket_objects_copy = get_tickets_by_transfers(transfers)
            // ticket_objects_copy = JSON.parse(localStorage.getItem('tickets'))['tickets']
        }
        tickets_count = tickets_pack(ticket_objects_copy, tickets_count, ticket_objects_copy.length)

    }
)


checked_two_transfers.addEventListener("click", function () {
        let two_transfers = document.getElementById("two_transfers").checked
        let transfers = Array()
        if (checked_all.checked) {
            transfers = [0, 1, 2, 3]
            checked_all.checked = false
        } else {
            if (checked_no_transfer.checked) {
                transfers.push(0)
            }
            if (checked_one_transfer.checked) {
                transfers.push(1)
            }
            if (checked_three_transfers.checked) {
                transfers.push(3)
            }
        }

        remove_tickets()
        tickets_count = 0
        document.getElementById('more__tickets__btn').style.display = "block";
        document.getElementById("tickets__block").classList.remove("scroll");
        if (two_transfers) {
            transfers.push(2)
            ticket_objects_copy = get_tickets_by_transfers(transfers)
        } else {
            var index = transfers.indexOf(2);
            if (index > -1) {
                transfers.splice(index, 1)
            }
            ticket_objects_copy = get_tickets_by_transfers(transfers)
            // ticket_objects_copy = JSON.parse(localStorage.getItem('tickets'))['tickets']
        }
        tickets_count = tickets_pack(ticket_objects_copy, tickets_count, ticket_objects_copy.length)
    }
)


checked_three_transfers.addEventListener("click", function () {
        let three_transfers = document.getElementById("three_transfers").checked
        let transfers = Array()
        if (checked_all.checked) {
            transfers = [0, 1, 2, 3]
            checked_all.checked = false
        } else {
            if (checked_no_transfer.checked) {
                transfers.push(0)
            }
            if (checked_one_transfer.checked) {
                transfers.push(1)
            }
            if (checked_two_transfers.checked) {
                transfers.push(2)
            }
        }

        remove_tickets()
        tickets_count = 0
        document.getElementById('more__tickets__btn').style.display = "block";
        document.getElementById("tickets__block").classList.remove("scroll");
        if (three_transfers) {
            transfers.push(3)
            ticket_objects_copy = get_tickets_by_transfers(transfers)
        } else {
            var index = transfers.indexOf(3);
            if (index > -1) {
                transfers.splice(index, 1)
            }
            if (transfers.length > 0) {
                ticket_objects_copy = get_tickets_by_transfers(transfers)
            } else {
                ticket_objects_copy = JSON.parse(localStorage.getItem('tickets'))['tickets']
            }
        }
        tickets_count = tickets_pack(ticket_objects_copy, tickets_count, ticket_objects_copy.length)
    }
)


checked_all.addEventListener("click", function () {
        checked_no_transfer.checked = true
        checked_one_transfer.checked = true
        checked_two_transfers.checked = true
        checked_three_transfers.checked = true
        remove_tickets()
        tickets_count = 0
        ticket_objects = JSON.parse(localStorage.getItem('tickets'))['tickets']
        tickets_count = tickets_pack(ticket_objects, tickets_count, tickets_amount)
    }
)


let ticket_objects = JSON.parse(localStorage.getItem('tickets'))['tickets']
filter_btn1.addEventListener("click", function () {
    filter_btn1.classList.add("active")
    filter_btn2.classList.remove("active")
    filter_btn3.classList.remove("active")
    remove_tickets()

    tickets_count = 0
    document.getElementById('more__tickets__btn').style.display = "block";
    document.getElementById("tickets__block").classList.remove("scroll");
    if (ticket_objects_copy.length === 0) {
        ticket_objects_copy = ticket_objects
    }
    ticket_objects_copy = ticket_objects_copy.sort(function (a, b) {
        return a.price - b.price
    })
    tickets_count = tickets_pack(ticket_objects_copy, tickets_count, ticket_objects_copy.length)
});


filter_btn2.addEventListener("click", function () {
    filter_btn2.classList.add("active")
    filter_btn1.classList.remove("active")
    filter_btn3.classList.remove("active")
    remove_tickets()

    tickets_count = 0
    document.getElementById('more__tickets__btn').style.display = "block";
    document.getElementById("tickets__block").classList.remove("scroll");
    if (ticket_objects_copy.length === 0) {
        ticket_objects_copy = ticket_objects
    }
    ticket_objects_copy = ticket_objects_copy.sort(function (a, b) {
        return (a['segments'][0]['duration'] + a['segments'][1]['duration']) - (b['segments'][0]['duration'] + b['segments'][1]['duration'])
    })

    tickets_count = tickets_pack(ticket_objects_copy, tickets_count, ticket_objects_copy.length)
});


filter_btn3.addEventListener("click", function () {
    filter_btn3.classList.add("active")
    filter_btn1.classList.remove("active")
    filter_btn2.classList.remove("active")
});


fetch('https://front-test.beta.aviasales.ru/search')
    .then(response => response.json())
    .then(data => localStorage.setItem('searchId', data.searchId));


search_id = localStorage.getItem('searchId')
var url = 'https://front-test.beta.aviasales.ru/tickets?searchId=' + search_id
fetch(url)
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('tickets', JSON.stringify(data))
    })
    .catch(error => console.log(error.message));


var tickets_amount = ticket_objects.length
let tickets_count = 0
if (tickets_amount > 5 && tickets_count < tickets_amount) {
    document.getElementById('more__tickets__btn').style.display = "block"
}


function split_duration(duration) {
    let hours = Math.floor(duration / 60)
    let minutes = duration - (hours * 60)
    if (hours >= 24) {
        var temp = Math.floor(hours / 24)
        hours = hours - temp * 24
    }
    if (hours < 10) {
        hours = '0' + hours.toString()
    }
    if (minutes < 10) {
        minutes = '0' + minutes.toString()
    }
    return [hours, minutes]
}


function to_minutes(hours, minutes) {
    return hours * 60 + minutes
}


function set_title_for_stops(stops) {
    let title_for_stops
    if (stops.length === 0) {
        title_for_stops = 'нет пересадок'
    } else if (stops.length === 1) {
        title_for_stops = '1 пересадка'
    } else {
        title_for_stops = stops.length + ' пересадки'
    }
    return title_for_stops
}


function tickets_pack(ticket_objects, tickets_count, tickets_amount) {
    do {
        const tickets_block = document.getElementById('tickets__block');
        tickets_count = tickets_count + 1
        var airlines_logo = '//pics.avs.io/99/36/' + ticket_objects[tickets_count - 1]['carrier'] + '.png'
        var flight_time_1 = split_duration(ticket_objects[tickets_count - 1]['segments'][0]['duration'])
        var flight_time_2 = split_duration(ticket_objects[tickets_count - 1]['segments'][1]['duration'])
        var departure_time_1 = ticket_objects[tickets_count - 1]['segments'][0]['date'].slice(11, 16).split(':')
        var departure_time_2 = ticket_objects[tickets_count - 1]['segments'][1]['date'].slice(11, 16).split(':')
        var stops_1 = ticket_objects[tickets_count - 1]['segments'][0]['stops']
        var stops_2 = ticket_objects[tickets_count - 1]['segments'][1]['stops']
        let title_for_stops_1 = set_title_for_stops(stops_1)
        let title_for_stops_2 = set_title_for_stops(stops_2)
        var arrival_time_1 = split_duration(to_minutes(parseInt(departure_time_1[0]), parseInt(departure_time_1[1])) + ticket_objects[tickets_count - 1]['segments'][0]['duration'])
        var arrival_time_2 = split_duration(to_minutes(parseInt(departure_time_2[0]), parseInt(departure_time_2[1])) + ticket_objects[tickets_count - 1]['segments'][1]['duration'])
        var ticket = `<div class="ticket__wrapper" id="ticket">
                            <div class="ticket">
                                <div class="ticket__header">
                                    <div class="ticket__price__title">
                                        ${ticket_objects[tickets_count - 1]['price']} P
                                    </div>

                                    <div class="logo_airlines" style="background: url(${airlines_logo})">
                                        
                                    </div>
                                </div>

                                <div class="flight__info">
                                    <div class="inner">
                                        <div class="rout__info">
                                            <div class="rout__title">
                                                ${ticket_objects[tickets_count - 1]['segments'][0]['origin']} - ${ticket_objects[tickets_count - 1]['segments'][0]['destination']}
                                            </div>

                                            <div class="rout__data">
                                                ${ticket_objects[tickets_count - 1]['segments'][0]['date'].slice(11, 16)} - ${arrival_time_1[0]}:${arrival_time_1[1]}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inner">
                                        <div class="rout__info">
                                            <div class="rout__title">
                                                в пути
                                            </div>

                                            <div class="rout__data">
                                                ${flight_time_1[0]}ч ${flight_time_1[1]}мин
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inner">
                                        <div class="rout__info">
                                            <div class="rout__title">
                                                ${title_for_stops_1}
                                            </div>

                                            <div class="rout__data">
                                                ${stops_1}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flight2__info">
                                    <div class="inner">
                                        <div class="rout__info">
                                            <div class="rout__title">
                                                ${ticket_objects[tickets_count - 1]['segments'][1]['origin']} - ${ticket_objects[tickets_count - 1]['segments'][1]['destination']}
                                            </div>

                                            <div class="rout__data">
                                                ${ticket_objects[tickets_count - 1]['segments'][1]['date'].slice(11, 16)} - ${arrival_time_2[0]}:${arrival_time_2[1]}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inner">
                                        <div class="rout__info">
                                            <div class="rout__title">
                                                в пути
                                            </div>

                                            <div class="rout__data">
                                                ${flight_time_2[0]}ч ${flight_time_2[1]}мин
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inner">
                                        <div class="rout__info">
                                            <div class="rout__title">
                                                ${title_for_stops_2}
                                            </div>

                                            <div class="rout__data">
                                                ${stops_2}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`

        tickets_block.innerHTML += ticket

        if (tickets_amount > 5 && tickets_count !== 0 && tickets_count % 5 === 0) {
            break
        }
    } while (tickets_count < tickets_amount)
    return tickets_count;
}


tickets_count = tickets_pack(ticket_objects, tickets_count, tickets_amount);
more_tickets_btn = document.getElementById("more__tickets");
more_tickets_btn.addEventListener("click", function () {
    if (ticket_objects_copy.length === 0) {
        ticket_objects_copy = ticket_objects
    }
    if (ticket_objects_copy.length > 5 && tickets_count < ticket_objects_copy.length) {
        document.getElementById("tickets__block").classList.add("scroll");
        tickets_count = tickets_pack(ticket_objects_copy, tickets_count, ticket_objects_copy.length);
        if (tickets_count >= ticket_objects_copy.length) {
            document.getElementById('more__tickets__btn').style.display = "none"
        }
    }
});
