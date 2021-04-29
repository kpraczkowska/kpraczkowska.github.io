// pobranie elementów z pliku html

const photos = document.querySelectorAll('.photo');
const backgroundPhoto = document.getElementById('image-360');
const descriptionButton = document.querySelector('.description');
const text = document.querySelector('.text');

// funkcja zmieniająca tło i pozycję przycisku description po kliknięciu w miniaturę zdjęcia

let isVisible = false;
let textValue = '';
const visible = 'color: white; visible: true';
const invisible = 'color: white; visible: false';

photos.forEach(photo => photo.addEventListener('click', () => {
  console.log(photo)
  if (isVisible) {
    isVisible = false;
    text.setAttribute('material', invisible);
    text.setAttribute('text', 'value: ;');
  };
  const imageSrc = photo.dataset.src;
  descriptionButton.setAttribute('material', 'color: aqua ; visible: true');
  descriptionButton.setAttribute('text', 'color:black; align: center; baseline:center; value: info; wrapCount: 4; font:dejavu');
  backgroundPhoto.setAttribute('src', imageSrc);
  configArray.forEach(item => {
    if (item.background === imageSrc) {
      descriptionButton.setAttribute('position', item.buttonPosition);
      descriptionButton.setAttribute('rotation', item.buttonRotation);
      text.setAttribute('position', item.textPosition);
      textValue = `value: ${item.content}; wrapCount: 50; font:dejavu; color: black; anchor: center; lineHeight: 30;`
      text.setAttribute('rotation', item.textRotation);
    }
  });
}))
descriptionButton.addEventListener('click', () => {
    const material = text.getAttribute('material');
    if (isVisible) {
    text.setAttribute('material', invisible);
    text.setAttribute('text', 'value: ;');
    isVisible = false;
    } else {
      text.setAttribute('material', visible);
      text.setAttribute('text', textValue);
      isVisible = true;
  };
});


// dane na temat obiektów

const configArray = [
  {
    background: '#waly',
    buttonPosition: '12 7 -0.5',
    textPosition: '13 2.5 0',
    buttonRotation:'0 273 0',
    textRotation: '0 273 0',
    content: `The National Museum in Szczecin\n
    The National Museum building occupies a central place in the Waly Chrobrego complex. Built between 1907-1913 according to the design of Wilhelm Meyer Schwartau, since 1913 the City Museum has been located there. In 1950, part of the museum building on Waly Chrobrego was temporarily adapted for the needs of the performing arts. The resulting place was named the Contemporary Theatre, which became part of the State Dramatic Theatres in Szczecin. In 1975, a decision was made to create two separate theaters in the city.
    ` ,
  },
  {
    background: '#katedra',
    buttonPosition: '-10 6 0',
    textPosition: '-16 4 0',
    buttonRotation: '0 80 0',
    textRotation:'0 80 0',
    content: `Szczecin Cathedral\n (or The Cathedral Basilica of St James the Apostle) in Szczecin - was built by the citizens of the city and modeled after the Church of St Mary in Luebeck. It is the largest church in Pomerania and for many years after the reformation was part of the Pomeranian Evangelical Church, but since World War II and the handing over of Stettin from Germany to Poland it has been rebuilt as a Roman Catholic cathedral. `,
  },
  {
    background: '#filharmonia',
    buttonPosition: '-9 4 2',
    textPosition: '-17 7 15',
    buttonRotation: '0 100 0',
    textRotation:'0 100 0',
    content: `Szczecin Philharmonic (full name in Polish: Filharmonia im. Mieczyslawa Karlowicza w Szczecinie),\n Orchestra founded in 1948, is a philharmonic of the city of Szczecin, Poland. In 2015, the new building of the philharmonic was awarded the European Union Prize for Contemporary Architecture. `,
  },
  {
    background: '#urzad',
    buttonPosition: '-12 7 -1',
    textPosition: '-15 4 -1',
    buttonRotation: '0 90 0',
    textRotation:'0 90 0',
    content: `The town hall building was constructed to house the main administrative office of the Pomeranian Voivodeship (Landeshaus). In the years 1933-1945 it was the seat of the Nazi NSDAP authorities. Between 1945-1950 it was the seat of the Town Board and the Town National Council, 1950-1973 - the seat of the Presidium of the Town National Council, 1973-1990 - the seat of the Town Office and the Town National Council, since 1990 - the seat of the Szczecin City Council. `,
  },
  {
    background: '#bPortowa',
    buttonPosition: '10 4.5 -0.4',
    textPosition: '15.5 2 -0.5',
    buttonRotation: '0 270 0',
    textRotation:'0 270 0',
    content: `Port Gate, German hist. Berliner Tor (Berlin Gate)\n - one of the city gates of Szczecin, built in Baroque style between 1725-1727 according to the design of Dutch fortification designer Gerhard Cornelius van Wallrawe (author of the reconstruction of the Kłodzko and Magdeburg Fortresses). Currently, a chamber theater is located inside the Gate. It is one of the two gates (besides the Royal Gate) preserved to this day, being a remnant of the old Prussian fortifications.`,
  },
  {
    background: '#dworzec',
    buttonPosition: '-9 3.5 1',
    textPosition: '-15 0 2',
    buttonRotation: '0 100 0',
    textRotation: '0 90 0',
    content: `Szczecin Glowny (German: Stettin Hauptbahnhof) (Polish for Szczecin main station)\n is the principal railway station of the city of Szczecin, in the West Pomeranian Voivodeship, Poland. The station opened on 15 August 1843 and is located on the Berlin-Szczecin railway, Wroclaw-Szczecin railway, Poznan-Szczecin railway, Bützow-Szczecin railway and Szczecin-Trzebież Szczeciński railway.`,
  },
  {
    background: '#fontanna',
    buttonPosition: '-9 0 0',
    textPosition: '-16 4 0',
    buttonRotation: '0 90 0',
    textRotation:'0 90 0',
    content: `Chrobry Embankment (Polish: Waly Chrobrego),\n previously known as Haken Terrace, is an observation deck in Szczecin, Poland. Located on an escarpment along the Oder river, it is 500 metre long and, together with National Museum, Ducal Castle and Cathedral Basilica of St James the Apostle, it forms an urban and architectural plan. It was designed and constructed under the supervision of Wilhelm Meyer-Schwartau between 1902 and 1921`,
  },
  {
    background: '#ratusz',
    buttonPosition: '-9 4.5 -1',
    textPosition: '-16 2 -2',
    buttonRotation: '0 80 0',
    textRotation:'0 80 0',
    content: `Old Town Hall - Szczecin's History Museum\n
    The seat of Szczecin History Museum is the old Gothic town hall surrounded by the castle, located in the center of the oldest part of the city - between the Hay Market and the New Market. Until 1879 it served as the seat of city authorities. It was built for the city authorities in the fifteenth century on the site of a wooden building from the mid thirteenth century.`,
  },
  {
    background: '#kWojciecha',
    buttonPosition: '-9 5 -2',
    textPosition: '-16 3 -3.5',
    buttonRotation: '0 85 0',
    textRotation: '0 90 0',
    content: `St. Adalbert Church in Szczecin\n is a neo-Gothic hall church built between 1906-1909 according to a design by architect Jürgen Kröger. It currently serves as the Roman Catholic garrison church of the Szczecin-Kamień diocese. It is built of brick, with a massive, asymmetrically placed tower 65.5 meters high in its elevation. The style of the building is eclectic - mostly neo-Gothic, but neo-Romanesque motifs also appear, especially in the decoration. The building is 35m long, 23m wide, and 17m high. `,
  },
  {
    background: '#komenda',
    buttonPosition: '8 5 3',
    textPosition: '14 2 6',
    buttonRotation: '0 245 0',
    textRotation: '0 245 0',
    content: `Voivodeship Police Headquarters\n
    The headquarters is located at 47 Malopolska Street, in the central part of the city, in the Old Town, near to the Mieczyslaw Karlowicz Philharmonic. The design of the neo-Gothic building was made by building advisor Rösener. In June 1902 the construction work began.  Construction was completed in October 1905. Chrobry Embankment is located a few dozen meters from the headquarters.` ,
  },
  {
    background: '#kotwica',
    buttonPosition: '-9 0.5 1,5',
    textPosition: '-15 4 2',
    buttonRotation: '0 90 0',
    textRotation: '0 90 0',
    content: `Manzl's Fountain (also Sedina)\n - object consisting of a fountain basin designed by Otto Rieth and a non-existent figural composition by Ludwig Manzl, once located at Tobrucki Square, at the intersection of today's Dworcowa and Nowa Streets in Szczecin. The sculpture disappeared from the site during World War II, most likely melted down for wartime use. Today, the site is occupied by the Anchor Monument. `,
  },
  {
    background: '#poczta',
    buttonPosition: '13 5 -0.3',
    textPosition: '17 1 0.3',
    buttonRotation: '0 270 0',
    textRotation: ' 0 270 0',
    content: `Post Office no. 2\n The Polish Post Office in Szczecin, located at Dworcowa Street in the New Town.
    The building is made of red brick, in neo-Gothic style. In the upper parts of the elevation, there are tympanums topped with horse heads, and eagles in window lintels. The lobby of the first post office building has a glass roof and a ceiling supported by columns.`,
  },
]
ntSize = "6vw";