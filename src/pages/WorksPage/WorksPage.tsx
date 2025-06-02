import React from "react";
import ListItem from "../../components/ListItem";
import Section from "../../components/Section/Section";
import Link from "next/link";
import SubSectionHeader from "@/components/SubSectionHeader";

const WorksPage = () => {
  return (
    <Section maxWidth="max-w-screen-sm">
      <h1 className="text-4xl font-bold text-center mb-6">Works</h1>
      <span className="text-1xl italic text-gray-600 mb-4 text-center">
        Here you can find the scores and audio materials of many of my works.
        Take a look at the end of my{" "}
        <Link href="/media#premiers" className="text-blue-500">
          media page
        </Link>{" "}
        to get to know what other pieces I am currently working on.
      </span>

      <ul className="text-justify">
        <SubSectionHeader id="statement" level={2}>
          <br />
          What is happening:
          <br />
          <br />
        </SubSectionHeader>
        <ListItem>
          <em>Secuencia XI</em>, concert for cowbells (May 2025) – Commissioned
          by FCAYC and premiered by the neighbors of the Porma and Curueño
          rivers, May 24, 2025 (Devesa de Curueño, Spain){" "}
          <a
            href="https://archive.org/details/secuencia-xi-partitura-general"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Done for the day</em>, for any number of musicians taking part in
          a concert (November 2024) – Premiered by Vertixe Sonora and Hong Kong
          New Music Ensemble at Zagreb Biennale, February 12, 2025 (Zagreb,
          Croatia){" "}
          <a
            href="https://archive.org/details/done-for-the-day"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF, audio track]
          </a>
        </ListItem>
        <ListItem>
          <em>Nana (Lullaby)</em>, for harpsichord, kantele, and classical
          guitar (February 2025) – Premiered by Trio Superpluck at Musica nova
          Festival, February 10, 2025 (Helsinki, Finland){" "}
          <a
            href="https://archive.org/details/nana_20250319"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF, audio tracks]
          </a>
        </ListItem>
        <ListItem>
          <em>Agüilla fresca</em>, for euphonium and fountain (February 2025) –
          Premiered by Raúl Sabiote at FCAYC, February 15, 2025 (Cerezales del
          Condado, Spain){" "}
          <a
            href="https://archive.org/details/aguilla-fresca"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>En aquel cortijo no había luz</em>, for cowbells (October 2024) –
          Premiered by Stèles Duo at FCAYC, October 26, 2024 (Cerezales del
          Condado, Spain){" "}
          <a
            href="https://archive.org/details/en-aquel-cortijo"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Music with backs turned</em>, for violin, double bass, and piano
          (July 2024) – Premiered by Gerdan Ensemble and Daniel del Pino,
          September 24, 2024 (Washington DC, USA){" "}
          <a
            href="https://archive.org/details/music-with-backs-turned"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>
            My grandpa used to braid esparto grass for hours under the shadow of
            the fig tree
          </em>
          , for symphony orchestra (July 2024) – Premiered by Georgia Tech
          Symphony Orchestra, September 16, 2024 (Atlanta, USA){" "}
          <a
            href="https://archive.org/details/my-grandpa-used-to-braid-esparto-grass"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Music to watch a puddle dry</em>, for flute and tape (December
          2023) – Premiered at Francisco Rojas' master's recital, June 26, 2024
          (Gent, Belgium){" "}
          <a
            href="https://archive.org/details/music-to-watch-a-puddle-dry"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF, audio track]
          </a>
        </ListItem>
        <ListItem>
          <em>
            Echaron abajo una casita cubierta de hiedra que me gustaba mirar de
            lejos (They tore down a little house covered in ivy that I liked to
            look at from afar)
          </em>
          , for soprano, alto flute, bass clarinet, percussion and piano
          (September 2023) – Premiered by CrossingLines Ensemble, November 27,
          2023 (Madrid, Spain){" "}
          <a
            href="https://archive.org/details/they-tore-down-a-little-house"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Music to watch the clouds pass by on a windless day</em>, for
          seven players (July 2023) – Premiered by Ensemble Ascolta and students
          of the akademie kontemporär 2023, September 30, 2023 (Hamburg,
          Germany){" "}
          <a
            href="https://archive.org/details/music-to-watch-the-clouds"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>
            I don't expect anything from this afternoon; I will let time soften,
            stretch, open its seams and let the threads peek out from behind
          </em>
          , for violin, bass clarinet, violoncello and percussion (May 2023) –
          Premiered by <em>Norrbotten NEO</em> at Musiikin aika (Time of Music
          Festival), July 9, 2023 (Viitasaari, Finland){" "}
          <a
            href="https://archive.org/details/i-dont-expect-anything-from-this-afternoon"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>
            Ya no siento el desplazamiento, los roces del tiempo (I can’t feel
            the displacement, the graze of time, anymore)
          </em>
          , for blinking lights, tape, two CD players, and offstage viola and
          piano (February 2023) – Premiered as part of VANG VI Festival of
          CentroCentro by Vertixe Sonora Ensemble, June 15, 2023 (Madrid, Spain){" "}
          <a
            href="https://archive.org/details/ya-no-siento-el-deslizamiento"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF, audio tracks]
          </a>
        </ListItem>
        <ListItem>
          <em>Fusilli con lentejas (Fusilli with lentils)</em>, acousmatic work
          (January 2023)
        </ListItem>

        <SubSectionHeader id="statement" level={2}>
          <br />
          What happened:
          <br />
          <br />
        </SubSectionHeader>

        <ListItem>
          <em>Brief Requiem for the Poets and Prayers</em>, for chamber
          orchestra (December 2022) – Premiered by <em>Avanti!</em> Chamber
          Orchestra during Summer Sounds Festival, June 30, 2024 (Porvoo,
          Finland){" "}
          <a
            href="https://archive.org/details/brief-requiem"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>
            Anti-Philosophy of the Subject; mankind’s origin is in its fellows
          </em>
          , for oboe, violin, viola and cello (July 2022) – Premiered by{" "}
          <em>Cuarteto Emispherio</em>, March 5, 2023 (Seville, Spain){" "}
          <a
            href="https://archive.org/details/antiphilosophy-of-the-subject"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Ota yksi, maksa kaksi (Get One for the Price of Two)</em>, for two
          percussionists (June 2022) – Premiered by <em>QDuo</em> (Alejandro
          Sancho Pérez y José Antonio Caballero Rodríguez), February 24, 2023
          (Segovia, Spain){" "}
          <a
            href="https://archive.org/details/percussion-duo"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF, audio tracks]
          </a>
        </ListItem>
        <ListItem>
          <em>Cum erubuerint infelices</em>, for male choir (April 2022){" "}
          <a
            href="https://archive.org/details/cum-erubuerint-infelices"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Nanas de la cebolla (Onion’s Lullaby)</em>, for computer-generated
          sound (April 2022) – Premiered at the <em>MuTeFest ’22</em> Festival
          of Music Creation with Technology, at the Sibelius Academy, November
          30, 2022 (Helsinki, Finland)
        </ListItem>
        <ListItem>
          <em>Where Are the Workers Now?</em> Sound-installation (April 2022) –
          Premiered at Tampere Biennale 2022
        </ListItem>
        <ListItem>
          <em>Theme and Variations after “Alle menschen mussen sterben”</em>,
          for organ (February 2022) – Premiered by Leevi Lipponen at the{" "}
          <em>WeW!22</em> Contemporary Music Festival, November 19, 2022 (Turku,
          Finland){" "}
          <a
            href="https://archive.org/details/theme-and-variations-organ"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>How Difficult It Is to Cry Today</em>, for piano, cello and tape
          (February 2022) – Premiered by <em>Defunensemble</em> at the Sibelius
          Academy, March 30, 2022 (Helsinki, Finland){" "}
          <a
            href="https://archive.org/details/how-difficult-it-is"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF, audio tracks]
          </a>
        </ListItem>
        <ListItem>
          <em>Allegory of the Five Industrial Forces</em>, concerto for piano
          and orchestra (January 2022) – Premiered by the <em>Île-de-France</em>{" "}
          National Orchestra at Philharmonie de Paris, July 1, 2022 (Paris,
          France){" "}
          <a
            href="https://archive.org/details/allegory-of-the-five-industrial-forces"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>El niño yuntero (Child of the Plough)</em>, for piano quintet
          (November 2021) – Premiered by <em>Orchester im Treppenhaus</em> at
          the Composer Slam Europe, February 24, 2022 (Hanover, Germany){" "}
          <a
            href="https://archive.org/details/el-nino-yuntero"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Three Everyday Scenes</em>, for symphony orchestra (November 2021)
          – Workshopped by the Helsinki Philharmonic Orchestra in March 2022{" "}
          <a
            href="https://archive.org/details/three-everyday-scenes"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Alienation</em> for computer-generated sound (September 2021) –
          Premiered during the <em>IMMEDIA Nordplus</em> intensive course, at
          the Lithuanian Academy of Music and Theater, September 16, 2021
          (Vilnius, Lithuania)
        </ListItem>
        <ListItem>
          <em>Hunger and Fear Bred Anger</em>, for cello, percussion and piano
          (July 2021) – Premiered by <em>K!ART</em> Ensemble at the{" "}
          <em>Uuden 2021 Musiikin Lokakuu</em> October 3, 2021 (Oulu, Finland){" "}
          <a
            href="https://archive.org/details/hunger-and-fear-bred-anger"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>
            Variaciones sobre un tema burgués (Variations on a Bourgeois Theme)
          </em>
          , for txistu, accordion and percussion (June 2021) – Premiered by{" "}
          <em>Trio Zukan</em> at the XIX Spanish Music Festival of Cádiz,
          November 20, 2021 (Cádiz, Spain){" "}
          <a
            href="https://archive.org/details/variaciones-sobre-un-tema-burgues"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Grito al cielo (Scream to the Sky)</em>, based on Lorca poems and
          the Spanish folklore, for wind quintet (April 2021) – Premiered by{" "}
          <em>Glauka</em> Quintet within the project <em>Conjuro</em> at the{" "}
          <em>27 Encuentros Manuel de Falla</em>, Manuel de Falla Auditorium,
          November 27, 2021 (Granada, Spain){" "}
          <a
            href="https://archive.org/details/grito-al-cielo"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Hugs Catalogue</em>, for eleven players (April 2021) – Premiered
          by <em>Zagros</em> Ensemble at the Sibelius Academy, May 10, 2021
          (Helsinki, Finland){" "}
          <a
            href="https://archive.org/details/hugs-catalogue"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Homage to Gendy</em>, computer-generated sound (April 2021)
        </ListItem>
        <ListItem>
          <em>Tiento</em>, computer-generated sound through <em>GenoMus</em>,
          collaborative composition with José López-Montes (March 2021)
        </ListItem>
        <ListItem>
          <em>Music for the Masses</em>, for Bass clarinet / Bb clarinet and
          tape (March 2021) – Premiered by Mikko Raasakka at the{" "}
          <em>59th Music Panel</em>, November 11, 2022 (Osijek, Croatia){" "}
          <a
            href="https://archive.org/details/music-for-the-masses_202304"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF, audio track]
          </a>
        </ListItem>
        <ListItem>
          <em>
            How to Escape from Reality (= How to Be Very Selfish) (= How to
            Forget That You Are Not Alone on Earth)
          </em>
          , computer-generated sound (December 2020)
        </ListItem>
        <ListItem>
          <em>The Worn-Out Factory</em>, computer-generated sound (November
          2020)
        </ListItem>
        <ListItem>
          <em>Smoochy Series</em>, computer-generated sound:{" "}
          <em>
            no. 1 Caressing You till My Fingers Bleed, no. 2 Closing My Eyes,
            Smiling and Touching Your Hair Again, no. 3 There Is a Party in My
            Mouth and You Are Not Invited, and no. 4 Your Arm Is Touching Mine.
            But I Do Not Care Any More
          </em>{" "}
          (July-September 2020)
        </ListItem>
        <ListItem>
          <em>Nun komm, der Heiden Heiland</em>, computer-generated sound
          (August 2020)
        </ListItem>
        <ListItem>
          <em>El casetero</em>, traditional <em>pasodoble</em> for wind band
          (July 2020) – Premiered by the Municipal Band of Casetas, 2020
          (Aragón, Spain){" "}
          <a
            href="https://archive.org/details/el-casetero"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Deconstrucción de un referente (A Referent’s Deconstruction)</em>,
          for seven instruments (July 2020) – Premiered by the{" "}
          <em>OCAZEnigma</em> Ensemble at Queen Sophia Museum, November 24, 2020
          (Madrid, Spain){" "}
          <a
            href="https://archive.org/details/a-referents-deconstruction"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Plastic Hugs, Emptiness</em>, for alto/soprano saxophone,
          percussion and tape (July 2020) – Premiered by <em>Honk and Bonk!</em>{" "}
          (Cassandra Roache y Bryan Wysocki), as an arrangement for bassoon and
          percussion at the <em>Music by Women Festival</em> of Columbia, March
          2, 2023 (Mississippi, US){" "}
          <a
            href="https://archive.org/details/plastic-hugs-emptiness"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF, audio tracks]
          </a>
        </ListItem>
        <ListItem>
          <em>You, just a Person Made of Pastic</em>, for violin, clarinet and
          piano (May 2020) – Premiered by <em>Zodiac</em> Trio at the DiMenna
          Center of New York, October 28, 2021 (NY, US){" "}
          <a
            href="https://archive.org/details/you-just-a-person-made-of-plastic-full"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Pleberio’s Weeping</em>, computer-generated sound (May 2020)
        </ListItem>
        <ListItem>
          <em>Stunt Fall no. 6; Relative Distance</em>, for flute and
          computer-generated sound (April 2020) – Premiered remotely by
          Francisco Rojas Huertas, 2020
        </ListItem>
        <ListItem>
          <em>Abstractions II</em>, for bassoon and piano (February 2020) –
          Premiered by Manuel Angulo at the 6th National Congress of{" "}
          <em>AFOES</em>, September 3, 2022 (Barcelona, Spain)
        </ListItem>
        <ListItem>
          <em>Abstractions IIb</em>, for violin and piano (arrangement) –
          Premiered by Yonatan Quemado and Niina Ranta at the Hietsun
          Paviljonki, May 27, 2021(Helsinki, Finland){" "}
          <a
            href="https://archive.org/details/abstractions-IIb"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Midnight Fugues Series</em> for piano:{" "}
          <em>in F, C, G, D, E, A</em> and <em>B</em> (November 2019 - January
          2021) – Not performed{" "}
          <a
            href="https://archive.org/details/midnight-fugues"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Dos Fughettas</em> or violin and piano, (arrangement of{" "}
          <em>on A</em> and <em>on B</em> from <em>Midnight Fugues</em>) –
          Premiered by <em>Grupo Cosmos 21</em>, February 28, 2024 (Madrid,
          Spain){" "}
          <a
            href="https://archive.org/details/midnight-fugues"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Cello Concerto; Five Pieces of Advice</em> (October 2019) –
          Premiered remotely by the <em>Île-de-France</em> National Orchestra in
          April 2021{" "}
          <a
            href="https://archive.org/details/five-pieces-of-advice"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Overthinking III</em>, for flute, viola, bassoon, cello and piano
          (September 2019) – Premiered by the Contemporary music ensemble of the
          Royal Higher Conservatory of Music of Madrid, December 19, 2019
          (Madrid, Spain){" "}
          <a
            href="https://archive.org/details/overthinking-III"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>La mar cuajada</em>, for symphonic band (August 2019) – Premiered
          by the Symphonic Band <em>Ateneo Musical de Mieres</em>, March 8, 2020
          (Asturias, Spain){" "}
          <a
            href="https://archive.org/details/la-mar-cuajada"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Overthinking I c</em>, for viola, cello, bass clarinet, percussion
          and piano (August 2019) – Premiered at the at Queen Sophia Museum,
          November 18, 2019 (Madrid, Spain){" "}
          <a
            href="https://archive.org/details/overthinking-Ic"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Overthinking II</em>, for flute and loop station (July 2019) - Not
          performed
        </ListItem>
        <ListItem>
          <em>Algo (Something)</em>, for violin, clarinet, cello and piano (June
          2019) – Premiered by the Ensemble <em>ACIM</em>, October 5, 2019
          (Málaga, Spain){" "}
          <a
            href="https://archive.org/details/algo_20230413"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Logbook, seven daily reflections</em>, for solo piano (February
          2019) – Not performed{" "}
          <a
            href="https://archive.org/details/logbook_202304"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Logbook, seven daily reflections</em>, for symphony orchestra
          (arrangement) – Premiered by Málaga’s Philharmonic Orchestra, May 12,
          2022 (Málaga, Spain){" "}
          <a
            href="https://archive.org/details/logbook_202304"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
        <ListItem>
          <em>Edades (Ages)</em>, for wind quintet and piano (January 2019) –
          Premiered by <em>Glauka</em> Quintet at the Royal Higher Conservatory
          of Music "Victoria Eugenia", July 2019 (Granada, Spain){" "}
          <a
            href="https://archive.org/details/edades_202304"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            [PDF]
          </a>
        </ListItem>
      </ul>
    </Section>
  );
};

export default WorksPage;
