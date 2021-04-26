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
  if (isVisible) {
    isVisible = false;
    text.setAttribute('material', invisible);
    text.setAttribute('text', 'value: ;');
  };
  const imageSrc = photo.dataset.src;
  descriptionButton.setAttribute('material', 'color: black; visible: true');
  descriptionButton.setAttribute('text', 'align: center; baseline:center; value: description; wrapCount: 12; font:dejavu');
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
    buttonPosition: '15 7 -1',
    textPosition: '20 9 8',
    buttonRotation:'0 270 0',
    textRotation: '0 270 0',
    content: `The National Museum in Szczecin is currently the largest cultural institution in the West Pomeranian Voivodeship. It is a classic multi-departmental museum.
    The National Museum building occupies a central place in the Waly Chrobrego complex. Built between 1907-1913 according to the design of Wilhelm Meyer Schwartau, since 1913 the City Museum has been located there. In 1950, part of the museum building on Waly Chrobrego was temporarily adapted for the needs of the performing arts. The resulting place was named the Contemporary Theatre, which became part of the State Dramatic Theatres in Szczecin. In 1975, a decision was made to create two separate theaters in the city.` ,
  },
  {
    background: '#katedra',
    buttonPosition: '-10 6 0',
    textPosition: '-20 5 0',
    buttonRotation: '0 90 0',
    textRotation:'0 90 0',
    content: `Szczecin Cathedral (or The Cathedral Basilica of St James the Apostle) in Szczecin (Polish: Bazylika archikatedralna św. Jakuba w Szczecinie, German: Jakobskathedrale or also Jakobikirche Stettin) - was built by the citizens of the city and modeled after the Church of St Mary in Lübeck. It is the largest church in Pomerania and for many years after the reformation was part of the Pomeranian Evangelical Church, but since World War II and the handing over of Stettin (name of the city in German language) from Germany to Poland it has been rebuilt as a Roman Catholic cathedral. `,
  },
  {
    background: '#filharmonia',
    buttonPosition: '-9 4 2',
    textPosition: '-20 7 15',
    buttonRotation: '0 90 0',
    textRotation:'0 90 0',
    content: `Szczecin Philharmonic (full name in Polish: Filharmonia im. Mieczysława Karłowicza w Szczecinie), Orchestra founded in 1948, is a philharmonic of the city of Szczecin, Poland. In 2015, the new building of the philharmonic was awarded the European Union Prize for Contemporary Architecture. `,
  },
  {
    background: '#urzad',
    buttonPosition: '-12 7 -1',
    textPosition: '-18 5 -1',
    buttonRotation: '0 90 0',
    textRotation:'0 90 0',
    content: `The town hall building was constructed to house the main administrative office of the Pomeranian Voivodeship (Landeshaus). In the years 1933-1945 it was the seat of the Nazi NSDAP authorities. Between 1945-1950 it was the seat of the Town Board and the Town National Council, 1950-1973 - the seat of the Presidium of the Town National Council, 1973-1990 - the seat of the Town Office and the Town National Council, since 1990 - the seat of the Szczecin City Council. `,
  },
  {
    background: '#bPortowa',
    buttonPosition: '10 4.5 -0.4',
    textPosition: '20 3 -0.5',
    buttonRotation: '0 270 0',
    textRotation:'10 270 0',
    content: `Port Gate, German hist. Berliner Tor (Berlin Gate) - one of the city gates of Szczecin, built in Baroque style between 1725-1727 according to the design of Dutch fortification designer Gerhard Cornelius van Wallrawe (author of the reconstruction of the Kłodzko and Magdeburg Fortresses).`,
  },
  {
    background: '#dworzec',
    buttonPosition: '-9 3.5 1',
    textPosition: '-20 1 2',
    buttonRotation: '0 110 0',
    textRotation: '0 100 0',
    content: `Szczecin Główny (German: Stettin Hauptbahnhof), (Polish for Szczecin main station) is the principal railway station of the city of Szczecin, in the West Pomeranian Voivodeship, Poland. The station opened on 15 August 1843 and is located on the Berlin-Szczecin railway, Wroclaw-Szczecin railway, Poznan-Szczecin railway, Bützow-Szczecin railway and Szczecin-Trzebież Szczeciński railway. The train services are operated by PKP, Przewozy Regionalne and Deutsche Bahn. `,
  },
  {
    background: '#fontanna',
    buttonPosition: '-9 1 0',
    textPosition: '-20 4 0',
    buttonRotation: '0 90 0',
    textRotation:'0 90 0',
    content: `Chrobry Embankment (Polish: Wały Chrobrego), previously known as Haken Terrace (German: Hakenterrasse), is an observation deck in Szczecin, Poland. Located on an escarpment along the Oder river, it is 500 metre (546.8 yard) long and, together with National Museum, Ducal Castle and Cathedral Basilica of St James the Apostle, it forms an urban and architectural plan.

    It was designed and constructed under the supervision of Wilhelm Meyer-Schwartau between 1902 and 1921. It was commissioned by city mayor, Hermann Haken, after whom it was originally named following his death. After the city was transferred to Poland at the end of World War II, the observation deck was renamed after Bolesław I the Brave, a duke of Duchy of Poland and later a king of Kingdom of Poland, known in Polish as Bolesław Chrobry. At the foot there is a fountain. In the crown of the wall, under the stone balustrade are coats of arms of Pomeranian cities. In front of the fountain were built two light towers stylized as lighthouses. The complex of terraces is connected with the Oder wharf by two flights of stairs running in curves along the retaining wall of the central terrace.`,
  },
  {
    background: '#ratusz',
    buttonPosition: '-9 4 -1',
    textPosition: '-20 2 -2',
    buttonRotation: '0 80 0',
    textRotation:'0 80 0',
    content: `Old Town Hall - Szczecin's History Museum

    The seat of Szczecin's History Museum is a Gothic old town hall in the castle surroundings,  located in the centre of the oldest part of the city – between the Hay Market and the New Market. The building, beginnings of which date back to middle 13th century, was given a Gothic form with  an arcade, impressive gables and a grand cellar with beautiful „star” rib vaults at the turn of the 14th and 15th centuries, on account of a conversion attributed to Heinrich Brunsberg.
    
    After devastation, which the building suffered from when the city was shelled during the Swedish period, it was converted in early 18th century into Baroque style and given a humble appearance with volute ornamentation of gables. Until 1879 it served as the seat of municipal authorities.`,
  },
  {
    background: '#kWojciecha',
    buttonPosition: '-9 5 -2',
    textPosition: '-20 3 -5',
    buttonRotation: '0 85 0',
    textRotation: '0 90 0',
    content: `St. Adalbert Church in Szczecin - a neo-Gothic hall church built between 1906-1909 according to a design by architect Jürgen Kröger. It currently serves as the Roman Catholic garrison church of the Szczecin-Kamień diocese. It is built of brick, with a massive, asymmetrically placed tower 65.5 meters high in its elevation. The style of the building is eclectic - mostly neo-Gothic, but neo-Romanesque motifs also appear, especially in the decoration. The building is 35m long, 23m wide, and 17m high. `,
  },
  {
    background: '#komenda',
    buttonPosition: '8 4 3',
    textPosition: '19 3 7',
    buttonRotation: '0 240 0',
    textRotation: '0 240 0',
    content: `Voivodeship Police Headquarters

    The headquarters is located at 47 Malopolska Street, in the central part of the city, in the Old Town, near to the Mieczyslaw Karlowicz Philharmonic. The design of the neo-Gothic building was made by building advisor Rösener. In June 1902 the construction work began.  Construction was completed in October 1905.` ,
  },
  {
    background: '#kotwica',
    buttonPosition: '-9 1 1,5',
    textPosition: '-20 4 1',
    buttonRotation: '0 90 0',
    textRotation: '0 90 0',
    content: `Manzl's Fountain (also Sedina) - object consisting of a fountain basin designed by Otto Rieth and a non-existent figural combutton. Position by Ludwig Manzl, once located at Tobrucki Square, at the intersection of today's Dworcowa and Nowa Streets in Szczecin. The sculpture disappeared from the site during World War II, most likely melted down for wartime use. Today, the site is occupied by the Anchor Monument. `,
  },
  {
    background: '#poczta',
    buttonPosition: '17 5 -0.3',
    textPosition: '23 1 0.3',
    buttonRotation: '0 270 0',
    textRotation: ' 0 270 0',
    content: `Post Office no. 2 - the Polish Post Office in Szczecin, located at Dworcowa Street in the New Town.

    The complex of postal buildings is the oldest surviving example of 19th-century postal architecture. The building was constructed in stages in the years 1872-1905 according to the design of Carl Schwatlo. It was expanded in 1877 and later, until the First World War. The authors of the amendments were, among others, August Endell and Hucke. The building is made of red brick, in neo-Gothic style. In the upper parts of the elevation, there are tympanums topped with horse heads, and eagles in window lintels. The lobby of the first post office building has a glass roof and a ceiling supported by columns.`,
  },
]
ntSize = "6vw";