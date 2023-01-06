// Atenuacion barra de navegacion. 
let titleL = document.getElementById("titleL");
let titleC = document.getElementById("titleC");
let titleI = document.getElementById('titleI');
let tfilled = document.querySelectorAll('.t-filled');
let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');
let text4 = document.querySelector('.text4');
let right1 = document.querySelector('#right1');
let right2 = document.querySelector('#right2');
let right3 = document.querySelector('#right3');
let pimg = document.querySelector('.pf-img');

// Mouse Over and Mouse Out of Information.
titleI.addEventListener('mouseover', function () {
    titleI.style.color = 'black';
    document.getElementById('profile').style.color = 'black';
})
titleI.addEventListener('mouseout', function () {
    titleI.style.color = 'gray';
    document.getElementById('contact').style.color = 'gray';
})

document.getElementById('profile').addEventListener('mouseover', function () {
    titleI.style.color = 'black';
    document.getElementById('profile').style.color = 'black';
})
document.getElementById('profile').addEventListener('mouseout', function () {
    titleI.style.color = 'gray';
    document.getElementById('contact').style.color = 'gray';
})

// Mouse Over and Mouse Out of Location.
titleL.addEventListener('mouseover', function () {
    titleL.style.color = 'black';
    document.getElementById('location').style.color = 'black';
})
titleL.addEventListener('mouseout', function () {
    titleL.style.color = 'gray';
    document.getElementById('location').style.color = 'gray';
})
document.getElementById('location').addEventListener('mouseover', function () {
    titleL.style.color = 'black';
    document.getElementById('location').style.color = 'black';
})
document.getElementById('location').addEventListener('mouseout', function () {
    titleL.style.color = 'gray';
    document.getElementById('location').style.color = 'gray';
})
// Mouse Over and Mouse Out of Contact.
titleC.addEventListener('mouseover', function () {
    titleC.style.color = 'black';
    document.getElementById('contact').style.color = 'black';
})
titleC.addEventListener('mouseout', function () {
    titleC.style.color = 'gray';
    document.getElementById('contact').style.color = 'gray';
})
document.getElementById('contact').addEventListener('mouseover', function () {
    titleC.style.color = 'black';
    document.getElementById('contact').style.color = 'black';
})
document.getElementById('contact').addEventListener('mouseout', function () {
    titleC.style.color = 'gray';
    document.getElementById('contact').style.color = 'gray';
})
// Click Location
titleL.addEventListener('click', function () {
    titleL.style.color = 'black';
    document.getElementById('location').style.color = 'black';
    titleI.style.color = 'gray';
    document.getElementById('profile').style.color = 'gray';
    titleC.style.color = 'gray';
    document.getElementById('contact').style.color = 'gray';

    titleL.addEventListener('mouseout', function () {
        titleL.style.color = 'black';
        document.getElementById('location').style.color = 'black';

    })
})
document.getElementById('location').addEventListener('click', function () {
    titleL.style.color = 'black';
    document.getElementById('location').style.color = 'black';
    titleI.style.color = 'gray';
    document.getElementById('profile').style.color = 'gray';
    titleC.style.color = 'gray';
    document.getElementById('contact').style.color = 'gray';

    document.getElementById('location').addEventListener('mouseout', function () {
        titleL.style.color = 'black';
        document.getElementById('location').style.color = 'black';

    })
})
// Click Information
titleI.addEventListener('click', function () {
    titleI.style.color = 'black';
    document.getElementById('profile').style.color = 'black';
    titleL.style.color = 'gray';
    document.getElementById('location').style.color = 'gray';
    titleC.style.color = 'gray';
    document.getElementById('contact').style.color = 'gray';

    titleI.addEventListener('mouseout', function () {
        titleI.style.color = 'black';
        document.getElementById('profile').style.color = 'black';
    })
})
document.getElementById('profile').addEventListener('click', function () {
    titleI.style.color = 'black';
    document.getElementById('profile').style.color = 'black';
    titleL.style.color = 'gray';
    document.getElementById('location').style.color = 'gray';
    titleC.style.color = 'gray';
    document.getElementById('contact').style.color = 'gray';

    document.getElementById('profile').addEventListener('mouseout', function () {
        titleI.style.color = 'black';
        document.getElementById('profile').style.color = 'black';
    })
})
//Click Contact
document.getElementById('contact').addEventListener('click', function () {
    titleC.style.color = 'black';
    document.getElementById('contact').style.color = 'black';
    titleI.style.color = 'gray';
    document.getElementById('profile').style.color = 'gray';
    titleL.style.color = 'gray';
    document.getElementById('location').style.color = 'gray';

    document.getElementById('contact').addEventListener('mouseout', function () {
        titleC.style.color = 'black';
        document.getElementById('contact').style.color = 'black';
    })
})

titleC.addEventListener('click', function () {
    titleC.style.color = 'black';
    document.getElementById('contact').style.color = 'black';
    titleI.style.color = 'gray';
    document.getElementById('profile').style.color = 'gray';
    titleL.style.color = 'gray';
    document.getElementById('location').style.color = 'gray';

    titleC.addEventListener('mouseout', function () {
        titleC.style.color = 'black';
        document.getElementById('contact').style.color = 'black';
    })
})

//API
fetch('https://randomuser.me/api/')
    .then(function (answer) {
        return answer.json()
    })
    .then(function (data) {
        //Information 
        let person = data.results[0];

        pimg.src = person.picture.large;

        tfilled[0].innerHTML = person.location.street.number + ', ' + person.location.street.name;
        tfilled[1].innerHTML = person.location.city;
        tfilled[2].innerHTML = person.location.state;
        tfilled[3].innerHTML = person.location.country;

        //Click on Info Text.

        titleI.addEventListener('click', function () {

            text1.innerHTML = 'Name:';
            text2.innerHTML = 'Gender:';
            text3.innerHTML = 'Age:';
            text4.innerHTML = 'Nacionality:';

            tfilled[0].innerHTML = person.name.first + ' ' + person.name.last;
            tfilled[1].innerHTML = person.gender;
            tfilled[2].innerHTML = person.dob.age;
            tfilled[3].innerHTML = person.nat;

            right2.style.display = 'block';
            right3.style.display = 'block';
        })

        //Click on Info Icon.

        document.getElementById('profile').addEventListener('click', function () {

            text1.innerHTML = 'Name:';
            text2.innerHTML = 'Gender:';
            text3.innerHTML = 'Age:';
            text4.innerHTML = 'Nacionality:';

            tfilled[0].innerHTML = person.name.first + ' ' + person.name.last;
            tfilled[1].innerHTML = person.gender;
            tfilled[2].innerHTML = person.dob.age;
            tfilled[3].innerHTML = person.nat;

            right2.style.display = 'block';
            right3.style.display = 'block';
        })

        //Click on Location text.

        titleL.addEventListener('click', function () {

            text1.innerHTML = 'Adress:';
            text2.innerHTML = 'City:';
            text3.innerHTML = 'State:';
            text4.innerHTML = 'Country:';

            tfilled[0].innerHTML = person.location.street.number + ', ' + person.location.street.name;
            tfilled[1].innerHTML = person.location.city;
            tfilled[2].innerHTML = person.location.state;
            tfilled[3].innerHTML = person.location.country;

            right2.style.display = 'block';
            right3.style.display = 'block';
        })
        //Click on Location Icon

        document.getElementById('location').addEventListener('click', function () {

            text1.innerHTML = 'Adress:';
            text2.innerHTML = 'City:';
            text3.innerHTML = 'State:';
            text4.innerHTML = 'Country:';

            tfilled[0].innerHTML = person.location.street.number + ', ' + person.location.street.name;
            tfilled[1].innerHTML = person.location.city;
            tfilled[2].innerHTML = person.location.state;
            tfilled[3].innerHTML = person.location.country;

            right2.style.display = 'block';
            right3.style.display = 'block';
        })
        //Click on Contact text.

        titleC.addEventListener('click', function () {

            text1.innerHTML = 'E-mail:';
            text2.innerHTML = 'Phone:';
            text3.innerHTML = ' ';
            text4.innerHTML = ' ';

            tfilled[0].innerHTML = person.email;
            tfilled[1].innerHTML = person.phone;
            tfilled[2].innerHTML = ' ';
            tfilled[3].innerHTML = ' ';


            right2.style.display = 'none';
            right3.style.display = 'none';

        })

        //Click on Contact Icon.

        document.getElementById('contact').addEventListener('click', function () {

            text1.innerHTML = 'E-mail:';
            text2.innerHTML = 'Phone:';
            text3.innerHTML = ' ';
            text4.innerHTML = ' ';

            tfilled[0].innerHTML = person.email;
            tfilled[1].innerHTML = person.phone;
            tfilled[2].innerHTML = ' ';
            tfilled[3].innerHTML = ' ';


            right2.style.display = 'none';
            right3.style.display = 'none';

        })

    })