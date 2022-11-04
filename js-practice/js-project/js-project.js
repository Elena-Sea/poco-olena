let authors = [
    {
        firstName: 'Andreas',
        lastName: 'Neeser',
        image: './images/tile_andreas_neeser.jpg',
    },
    {
        firstName: 'Anna',
        lastName: 'Ruchat',
        image: './images/tile_anna_ruchat.jpg',
    },
    {
        firstName: 'Arno',
        lastName: 'Camenisch',
        image: './images/tile_arno_camenisch.jpg',
    },
    {
        firstName: 'Barbara',
        lastName: 'Schibli',
        image: './images/tile_barbara_schibli.jpg',
    },
    {
        firstName: 'Demian',
        lastName: 'Leinhard',
        image: './images/tile_demian_leinhard.jpg',
    },
    {
        firstName: 'Flurina',
        lastName: 'Bader',
        image: './images/tile_flurina_bader.jpg',
    },
    {
        firstName: 'Franco',
        lastName: 'Supino',
        image: './images/tile_franco_supino.jpg',
    },
    {
        firstName: 'Lukas',
        lastName: 'Hartmann',
        image: './images/tile_lukas_hartmann.jpg',
    },
    {
        firstName: 'Marius',
        lastName: 'Popescu',
        image: './images/tile_marius_popescu.jpg',
    },
    {
        firstName: 'Reto',
        lastName: 'Haenny',
        image: './images/tile_demian_leinhard.jpg',
    },
    {
        firstName: 'Sandra',
        lastName: 'Kuenzi',
        image: './images/tile_sandra_kuenzi.jpg',
    },
    {
        firstName: 'Simon',
        lastName: 'Libsig',
        image: './images/tile_simon_libsig.jpg',
    }
];

const list = document.querySelector('#list');

function listMarkup(authors) { 
    list.innerHTML = "";
    list.insertAdjacentHTML('beforeend', authors.map(author => { 
        return `<li>
                <img src="${author.image}" alt="${author.firstName} ${author.lastName}">
                <a>
                    <h2>${author.firstName} ${author.lastName}</h2>
                </a>
            </li>`
    }).join('')
    );
}

listMarkup(authors);
