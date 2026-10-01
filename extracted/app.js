/* =========================================================
   AUTO CHECK
   MENÜ SYSTEM
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const submenu =
    document.getElementById("submenu");

  const closeButton =
    document.getElementById("closeSubmenu");

  const title =
    document.getElementById("submenuTitle");

  const description =
    document.getElementById("submenuDescription");

  const icon =
    document.getElementById("submenuIcon");

  const options =
    document.getElementById("submenuOptions");


  /* =======================================================
     UNTERMENÜ DATEN
     ======================================================= */

  const menus = {

    auto: {

      title: "Mein Auto",

      description:
        "Fahrzeug & Details",

      color:
        "#ff3038",

      icon: `
        <svg viewBox="0 0 100 100">
          <path
            d="M20 53L27 32Q29 26 36 26H64Q71 26 73 32L80 53"
            fill="none"
            stroke="currentColor"
            stroke-width="6"
            stroke-linecap="round"
          />
          <rect
            x="15"
            y="50"
            width="70"
            height="27"
            rx="8"
            fill="none"
            stroke="currentColor"
            stroke-width="6"
          />
          <circle cx="29" cy="78" r="7"
            fill="currentColor"/>
          <circle cx="71" cy="78" r="7"
            fill="currentColor"/>
        </svg>
      `,

      options: [

        "Fahrzeugdaten",

        "Kilometerstand",

        "Kennzeichen",

        "Motor & Leistung",

        "Fahrzeughistorie"

      ]

    },


    repairs: {

      title: "Reparaturen",

      description:
        "Reparaturen verwalten",

      color:
        "#2faaff",

      icon: `
        <svg viewBox="0 0 100 100">
          <path
            d="M62 17C52 17 44 25 44 35C44 39 45 42 48 45L20 73C16 77 16 84 20 88C24 92 31 92 35 88L63 60C66 63 70 64 74 64C84 64 92 56 92 46C92 43 91 39 90 36L76 43L66 33L73 19C69 18 66 17 62 17Z"
            fill="currentColor"
          />
        </svg>
      `,

      options: [

        "Neue Reparatur",

        "Offene Reparaturen",

        "Erledigte Reparaturen",

        "Werkstatt",

        "Kosten"

      ]

    },


    inspection: {

      title: "Pickerl / TÜV",

      description:
        "Termine & Fristen",

      color:
        "#4aff79",

      icon: `
        <svg viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke="currentColor"
            stroke-width="6"
          />
          <circle
            cx="50"
            cy="50"
            r="5"
            fill="currentColor"
          />
          <path
            d="M50 24V50L68 61"
            fill="none"
            stroke="currentColor"
            stroke-width="6"
            stroke-linecap="round"
          />
        </svg>
      `,

      options: [

        "Nächster Termin",

        "Pickerl",

        "TÜV",

        "Fristen",

        "Erinnerungen"

      ]

    },


    maintenance: {

      title: "Wartungen",

      description:
        "Wartungen & Service",

      color:
        "#ffad27",

      icon: `
        <svg viewBox="0 0 100 100">
          <path
            d="M59 17C50 18 43 26 43 35C43 39 45 43 48 46L19 75C15 79 15 85 19 89C23 93 29 93 33 89L62 60C65 63 69 65 74 65C83 65 91 58 92 49L77 56L66 45L73 30C69 22 64 18 59 17Z"
            fill="currentColor"
          />
          <path
            d="M18 20L80 82"
            stroke="currentColor"
            stroke-width="9"
            stroke-linecap="round"
          />
        </svg>
      `,

      options: [

        "Service",

        "Ölwechsel",

        "Bremsen",

        "Filter",

        "Sonstige Wartung"

      ]

    },


    overview: {

      title: "Gesamtblick",

      description:
        "Die wichtigsten Informationen",

      color:
        "#ce70ff",

      icon: `
        <svg viewBox="0 0 100 100">
          <rect
            x="27"
            y="13"
            width="46"
            height="74"
            rx="6"
            fill="none"
            stroke="currentColor"
            stroke-width="6"
          />
          <path
            d="M38 32H62M38 45H62M38 58H58M38 71H53"
            fill="none"
            stroke="currentColor"
            stroke-width="6"
            stroke-linecap="round"
          />
        </svg>
      `,

      options: [

        "Fahrzeugstatus",

        "Nächste Termine",

        "Offene Reparaturen",

        "Wartungen",

        "Wichtige Hinweise"

      ]

    },


    tires: {

      title: "Reifen",

      description:
        "Größen, Dimensionen & Alter",

      color:
        "#35e5d3",

      icon: `
        <svg viewBox="0 0 100 100">
          <path
            d="M34 13C24 19 19 33 19 50C19 67 24 81 34 87H66C76 81 81 67 81 50C81 33 76 19 66 13Z"
            fill="none"
            stroke="currentColor"
            stroke-width="6"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="13"
            ry="31"
            fill="none"
            stroke="currentColor"
            stroke-width="5"
          />
          <path
            d="M35 27H65M32 39H68M32 61H68M35 73H65"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
          />
        </svg>
      `,

      options: [

        "Reifengröße",

        "Dimensionen",

        "Sommerreifen",

        "Winterreifen",

        "Reifenalter"

      ]

    }

  };


  /* =======================================================
     MENÜ ÖFFNEN
     ======================================================= */

  document
    .querySelectorAll(".menu-card")
    .forEach(card => {

      card.addEventListener("click", () => {

        const menuName =
          card.dataset.menu;

        openMenu(menuName);

      });

    });


  /* =======================================================
     ÖFFNEN
     ======================================================= */

  function openMenu(menuName) {

    const data =
      menus[menuName];

    if (!data) {
      return;
    }


    title.textContent =
      data.title;

    description.textContent =
      data.description;


    icon.innerHTML =
      data.icon;

    icon.style.color =
      data.color;

    icon.style.borderColor =
      data.color;


    options.innerHTML =
      "";


    data.options.forEach(option => {

      const button =
        document.createElement("button");

      button.className =
        "submenu-option";

      button.textContent =
        option;

      button.addEventListener(
        "click",
        () => {

          alert(
            `${data.title}: ${option}`
          );

        }
      );

      options.appendChild(button);

    });


    submenu.classList.add("open");

    submenu.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  /* =======================================================
     SCHLIESSEN
     ======================================================= */

  function closeMenu() {

    submenu.classList.remove("open");

    submenu.setAttribute(
      "aria-hidden",
      "true"
    );

  }


  closeButton.addEventListener(
    "click",
    closeMenu
  );


  /* Klick auf dunklen Hintergrund */

  submenu.addEventListener(
    "click",
    event => {

      if (
        event.target === submenu
      ) {

        closeMenu();

      }

    }
  );


  /* ESC */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeMenu();

      }

    }
  );

});
