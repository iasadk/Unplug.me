import { printLine, QUOTES } from './modules/print';

// console.log('Content script works!');
// console.log('Must reload extension for modifications to take effect.');

// printLine("Using the 'printLine' function from the Print Module");
// printLine("HEllo LIMIT");
function getAccessTime(timeInMillSec) {
  // var currentTime = new Date().getTime();

  var newTime = new Date(timeInMillSec);

  var formattedTime = newTime.toLocaleTimeString([], { hour12: false });

  return formattedTime;
}
const generateHTML = (subtitle = "Don't forgot your goals", accessTime = 0) => {
  return `
    <body>
    <main>
      <div id="tsparticles" aria-hidden="true"></div>
      <section>
        <div class="text">
          <h1 data-value="404">BLOCKED</h1>
          <a href="#" id="back" data-value=${subtitle}>${subtitle} ${accessTime ? getAccessTime(accessTime) : ""}</a>
        </div>
      </section>
    </main>
    <script>
      tsParticles.load({
        id: "tsparticles",
        options: {
          autoPlay: true,
          background: {
            color: { value: "#0d47a1" },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: { color: { value: "#fff" }, opacity: 1 },
            enable: false,
          },
          defaultThemes: {},
          delay: 0,
          fullScreen: { enable: true, zIndex: 1 },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: { enable: true, mode: "push" },
              onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 2, smooth: 10 },
              },
              resize: { delay: 0.5, enable: true },
            },
            modes: {
              trail: { delay: 1, pauseOnStop: false, quantity: 1 },
              attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 50,
                speed: 1,
              },
              bounce: { distance: 200 },
              bubble: { distance: 200, duration: 0.4, mix: false },
              connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
              grab: {
                distance: 100,
                links: { blink: false, consent: false, opacity: 1 },
              },
              push: { default: true, groups: [], quantity: 4 },
              remove: { quantity: 2 },
              repulse: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  selectors: [],
                },
              },
              slow: { factor: 3, radius: 200 },
              light: {
                area: {
                  gradient: {
                    start: { value: "#ffffff" },
                    stop: { value: "#000000" },
                  },
                  radius: 1000,
                },
                shadow: { color: { value: "#000000" }, length: 2000 },
              },
            },
          },
          manualParticles: [],
          particles: {
            bounce: {
              horizontal: {
                random: { enable: false, minimumValue: 0.1 },
                value: 1,
              },
              vertical: {
                random: { enable: false, minimumValue: 0.1 },
                value: 1,
              },
            },
            collisions: {
              absorb: { speed: 2 },
              bounce: {
                horizontal: {
                  random: { enable: false, minimumValue: 0.1 },
                  value: 1,
                },
                vertical: {
                  random: { enable: false, minimumValue: 0.1 },
                  value: 1,
                },
              },
              enable: false,
              maxSpeed: 50,
              mode: "bounce",
              overlap: { enable: true, retries: 0 },
            },
            color: {
              value: "#ff0000",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  delay: 0,
                  decay: 0,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  delay: 0,
                  decay: 0,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  delay: 0,
                  decay: 0,
                  sync: true,
                },
              },
            },
            groups: {},
            move: {
              angle: { offset: 0, value: 90 },
              attract: {
                distance: 200,
                enable: false,
                rotate: { x: 3000, y: 3000 },
              },
              center: { x: 50, y: 50, mode: "percent", radius: 0 },
              decay: 0,
              distance: {},
              direction: "none",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              path: {
                clamp: true,
                delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
                enable: false,
                options: {},
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: false,
              size: false,
              speed: 2,
              spin: { acceleration: 0, enable: false },
              straight: false,
              trail: { enable: false, length: 10, fill: {} },
              vibrate: false,
              warp: false,
            },
            number: {
              density: { enable: true, width: 1920, height: 1080 },
              limit: 0,
              value: 80,
            },
            opacity: {
              random: { enable: false, minimumValue: 0.1 },
              value: { min: 0.1, max: 0.5 },
              animation: {
                count: 0,
                enable: true,
                speed: 3,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: { value: "#000" },
              enable: false,
              offset: { x: 0, y: 0 },
            },
            shape: { close: true, fill: true, options: {}, type: "circle" },
            size: {
              random: { enable: false, minimumValue: 1 },
              value: { min: 0.1, max: 5 },
              animation: {
                count: 0,
                enable: true,
                speed: 20,
                decay: 0,
                delay: 0,
                sync: false,
                mode: "auto",
                startValue: "random",
                destroy: "none",
              },
            },
            stroke: { width: 0 },
            zIndex: {
              random: { enable: false, minimumValue: 0 },
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1,
            },
            destroy: {
              bounds: {},
              mode: "none",
              split: {
                count: 1,
                factor: {
                  random: { enable: false, minimumValue: 0 },
                  value: 3,
                },
                rate: {
                  random: { enable: false, minimumValue: 0 },
                  value: { min: 4, max: 9 },
                },
                sizeOffset: true,
              },
            },
            roll: {
              darken: { enable: false, value: 0 },
              enable: false,
              enlighten: { enable: false, value: 0 },
              mode: "vertical",
              speed: 25,
            },
            tilt: {
              random: { enable: false, minimumValue: 0 },
              value: 0,
              animation: { enable: false, speed: 0, decay: 0, sync: false },
              direction: "clockwise",
              enable: false,
            },
            twinkle: {
              lines: {
                enable: true,
                frequency: 0.005,
                opacity: 1,
                color: { value: "#ff0000" },
              },
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 1,
                color: { value: "#ffff00" },
              },
            },
            wobble: {
              distance: 5,
              enable: false,
              speed: { angle: 50, move: 10 },
            },
            life: {
              count: 0,
              delay: {
                random: { enable: false, minimumValue: 0 },
                value: 0,
                sync: false,
              },
              duration: {
                random: { enable: false, minimumValue: 0.0001 },
                value: 0,
                sync: false,
              },
            },
            rotate: {
              random: { enable: false, minimumValue: 0 },
              value: 0,
              animation: { enable: false, speed: 0, decay: 0, sync: false },
              direction: "clockwise",
              path: false,
            },
            orbit: {
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                decay: 0,
                delay: 0,
                sync: false,
              },
              enable: false,
              opacity: 1,
              rotation: {
                random: { enable: false, minimumValue: 0 },
                value: 45,
              },
              width: 1,
            },
            links: {
              blink: false,
              color: { value: "#ffffff" },
              consent: false,
              distance: 150,
              enable: true,
              frequency: 1,
              opacity: 0.4,
              shadow: { blur: 5, color: { value: "#000" }, enable: false },
              triangles: { enable: false, frequency: 1 },
              width: 1,
              warp: false,
            },
            repulse: {
              random: { enable: false, minimumValue: 0 },
              value: 0,
              enabled: false,
              distance: 1,
              duration: 1,
              factor: 1,
              speed: 1,
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          smooth: false,
          style: {},
          themes: [],
          zLayers: 100,
          motion: { disable: false, reduce: { factor: 4, value: true } },
        },
      });

      const heading = document.querySelector("h1");
      const goBack = document.getElementById("back");

      window.addEventListener("load", () => {
        shiftLetters(heading);
      });

      heading.onmouseover = (event) => {
        shiftLetters(event.target);
      };

      goBack.onmouseover = (event) => {
        shiftLetters(event.target, 20);
      };

      function shiftLetters(element, duration = 50, interval = null) {
        const letters = "!@#$%|&*?+/";
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
          element.innerText = element.innerText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return element.dataset.value[index];
              }

              return letters[Math.floor(Math.random() * 11)];
            })
            .join("");

          if (iteration >= element.dataset.value?.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, duration);
      }
    </script>
  </body>
    `

}
const generateBlockPageHead = () => {
  return `
    <head>
    <style>
      body {
        margin: 0;
        font-family: "Space Mono", monospace;
        background:#1044a4
      }

      canvas {
        display: block;
      }

      #tsparticles {
        z-index: 0;
        position: fixed;
        top: 0;
        left: 0;
      }
      section {
        position: absolute;
        width: 100%;
        height: 100vh;
        text-align: center;
        color: white;
        display: grid;
        place-content: center;
      }

      .text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      h1 {
        font-family: "Space Mono", monospace;
        font-size: clamp(3rem, 30vw, 12rem);
        color: #fdee00;
        white-space: nowrap;
        letter-spacing: 0.2em;
        padding: 0rem;
        border-radius: clamp(0.4rem, 0.75vw, 1rem);
        margin: 0;
        line-height: 1.2;
        z-index: 3;
        animation: jitter 1s linear infinite;
      }

      #back {
        text-decoration: none;
        font-family: "Arial", monospace;
        color: #c0c0c0;
        width: fit-content;
        letter-spacing: 0.1em;
        margin-inline: auto;
        padding: 1em;
        font-size:1.5rem
      }

      #back:hover {
        color: #fff;
      }

      @keyframes jitter {
        2%,
        64% {
          transform: translate(2px, 0) skew(0deg);
        }
        4%,
        60% {
          transform: translate(-2px, 0) skew(1deg);
          filter: brightness(0.95);
        }
        62% {
          transform: translate(0, 0) skew(-3deg);
          filter: brightness(1.5);
        }
      }
    </style>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
      rel="stylesheet"
    />
    <title>BLOCKED</title>
  </head>
    `
}

const generateRandomIndex = () => {
  const MAX_RANGE = QUOTES?.length;
  return Math.floor(Math.random() * MAX_RANGE)
}
/*
==================CASES===========================
-> Match URL and Last block = null
-> Match URL and LastBlock != null
    -> Check if a certain time is passed or not
    -> If Certain time passed then allow it
*/
(async () => {

  const BLOCK_TIME = 60000
  const syncData = (await chrome.storage.sync.get("key"))?.key;
  printLine(syncData);

  const matchObj = syncData.find(x => window.location.href.includes(x.url));

  if (matchObj?.mode === "time-bomb") {
    if (matchObj?.url && !matchObj?.clearBlockScreenAt && !matchObj.blockTimerStartedAt) {
      timerToBlockWebsite(matchObj.convertedTime);
    } else if (matchObj?.url && matchObj.blockTimerStartedAt && (Date.now() - matchObj?.blockTimerStartedAt) < matchObj.convertedTime) {

      const timeLeftToBlockWebsite = matchObj.convertedTime - (Date.now() - matchObj?.blockTimerStartedAt);
      timerToBlockWebsite(timeLeftToBlockWebsite);


    } else if (matchObj?.url && matchObj?.clearBlockScreenAt && (matchObj?.clearBlockScreenAt - Date.now()) > 0) {
      const timeLeftToClearBlockScreen = matchObj?.clearBlockScreenAt - Date.now()
      document.head.innerHTML = generateBlockPageHead();
      document.body.innerHTML = generateHTML("Your block screen will clear at: ", matchObj?.clearBlockScreenAt);
      startTimer(timeLeftToClearBlockScreen)
    } else {
      timerToBlockWebsite(matchObj.convertedTime);

    }
  } else if (matchObj?.mode === "permanent-block") {
    document.head.innerHTML = generateBlockPageHead();
    document.body.innerHTML = generateHTML(QUOTES[generateRandomIndex()]?.quote);
  }

  function startTimer(startTime) {
    let active = false;
    let currentX;
    let currentY;
    let initialX = 10;
    let initialY = 10;
    let xOffset = 0;
    let yOffset = 0;

    // Get the element where you want to display the timer
    let timerElement = document.createElement('div');
    timerElement.setAttribute('id', 'timer');
    timerElement.style.position = 'fixed';
    timerElement.style.top = initialY + "px";
    timerElement.style.right = initialX + "px";
    timerElement.style.padding = '10px';
    timerElement.style.background = '#fff';
    timerElement.style.color = '#000';
    timerElement.style.border = '2px solid green';
    timerElement.style.borderRadius = '5px';
    timerElement.style.zIndex = 99999;
    timerElement.style.fontSize = "20px";

    document.body.appendChild(timerElement);

    timerElement.addEventListener("mousedown", dragStart, false);
    timerElement.addEventListener("mouseup", dragEnd, false);
    timerElement.addEventListener("mousemove", drag, false);
    function dragStart(e) {
      timerElement.style.cursor = "grabbing"

      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;

      if (e.target === timerElement) {
        active = true;
        timerElement.style.backgroundColor = "rgb(245, 230, 99,.6)"
        timerElement.style.color = "#fff"


      }
    }

    function dragEnd(e) {
      timerElement.style.cursor = "default"

      initialX = currentX;
      initialY = currentY;

      active = false;
      timerElement.style.backgroundColor = "#fff"
      timerElement.style.color = "#000"

    }

    function drag(e) {
      if (active) {
        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, timerElement);
      }

      function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }
    }

    // Update the timer display every second
    let endTime = Date.now() + startTime;
    let timerInterval = setInterval(function () {
      let remainingTime = endTime - Date.now();
      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = '00:00:00';
        return;
      }

      let seconds = Math.floor(remainingTime / 1000);
      if (seconds < 10) {
        timerElement.style.border = '2px solid red';

      }
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);

      seconds %= 60;
      minutes %= 60;

      timerElement.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} `;
    }, 1000);

    setTimeout(function () {
      clearInterval(timerInterval);
      chrome.storage.sync.set({
        key: syncData.map(x => {
          if (x.url === matchObj.url) {
            return {
              ...x,
              clearBlockScreenAt: null,
              blockTimerStartedAt: Date.now()

            }
          } else {
            return x;
          }
        })
      });
      window.location.reload()
    }, startTime);
  }

  function timerToBlockWebsite(startTime) {
    if (!matchObj.blockTimerStartedAt) {
      chrome.storage.sync.set({
        key: syncData.map(x => {
          if (x.url === matchObj.url) {
            return {
              ...x,
              blockTimerStartedAt: Date.now()
            }
          } else {
            return x;
          }
        })
      })
    }
    let active = false;
    let currentX;
    let currentY;
    let initialX = 10;
    let initialY = 10;
    let xOffset = 0;
    let yOffset = 0;

    // Get the element where you want to display the timer
    let timerElement = document.createElement('div');
    timerElement.setAttribute('id', 'timer');
    timerElement.style.position = 'fixed';
    timerElement.style.top = initialY + "px";
    timerElement.style.right = initialX + "px";
    timerElement.style.padding = '10px';
    timerElement.style.background = '#fff';
    timerElement.style.color = '#000';
    timerElement.style.border = '2px solid green';
    timerElement.style.borderRadius = '5px';
    timerElement.style.zIndex = 99999;
    timerElement.style.fontSize = "20px";

    document.body.appendChild(timerElement);

    timerElement.addEventListener("mousedown", dragStart, false);
    timerElement.addEventListener("mouseup", dragEnd, false);
    timerElement.addEventListener("mousemove", drag, false);
    function dragStart(e) {
      timerElement.style.cursor = "grabbing"

      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;

      if (e.target === timerElement) {
        active = true;
        timerElement.style.backgroundColor = "rgb(245, 230, 99,.6)"
        timerElement.style.color = "#fff"


      }
    }

    function dragEnd(e) {
      timerElement.style.cursor = "default"

      initialX = currentX;
      initialY = currentY;

      active = false;
      timerElement.style.backgroundColor = "#fff"
      timerElement.style.color = "#000"

    }

    function drag(e) {
      if (active) {
        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, timerElement);

      }

      function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }
    }

    // Update the timer display every second
    let endTime = Date.now() + startTime;
    let timerInterval = setInterval(function () {
      let remainingTime = endTime - Date.now();
      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        timerElement.innerHTML = '00:00:00';
        window.location.reload();
        return;
      }

      let seconds = Math.floor(remainingTime / 1000);
      if (seconds < 10) {
        timerElement.style.border = '2px solid red';

      }
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);

      seconds %= 60;
      minutes %= 60;

      timerElement.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} `;
    }, 1000);

    setTimeout(function () {
      clearInterval(timerInterval);
      chrome.storage.sync.set({
        key: syncData.map(x => {
          if (x.url === matchObj.url) {
            return {
              ...x,
              clearBlockScreenAt: Date.now() + BLOCK_TIME,
              blockTimerStartedAt: null
            }
          } else {
            return x;
          }
        })
      });
      document.head.innerHTML = generateBlockPageHead();
      document.body.innerHTML = generateHTML("Your block screen will clear at: ", Date.now() + BLOCK_TIME + 1000);
      startTimer(BLOCK_TIME + 1000)
    }, startTime);
  }

})()