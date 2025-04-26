document.addEventListener('DOMContentLoaded', function() {
    const galeriFoto = document.querySelector('#galeri-foto .grid-galeri');
    const galeriVideo = document.querySelector('#galeri-video .grid-galeri');

    const daftarFoto = [
        'foto1.jpg',
        'foto2.jpg',
        'foto3.jpg',
        'foto4.jpg',
        'foto5.jpg',
        'foto6.jpg',
        'foto7.jpg',
    ];
    
    const daftarVideo = [
        'video1.mp4',
        'video2.mp4',
        'video3.mp4'
    ];

    daftarFoto.forEach(function(foto) {
        const item = document.createElement('div');
        item.classList.add('item-galeri');
        item.innerHTML = `<img src="${foto}" alt="Kenangan Foto">`;
        galeriFoto.appendChild(item);
    });

    daftarVideo.forEach(function(video) {
        const item = document.createElement('div');
        item.classList.add('item-galeri');
        item.innerHTML = `
            <video controls>
                <source src="${video}" type="video/mp4">
                Browser Anda tidak mendukung pemutar video.
            </video>
        `;
        galeriVideo.appendChild(item);
    });
});
