$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var btn_next = $("#next");
  var letterIndex = 0;

  const letters = [
    {
      line1: "De: Toni",
      line2: "Querida Jensy,",
      line3: "eres tan hermosa que cada vez",
      line4: "que te veo mi mundo se detiene.",
    },
    {
      line1: " ",
      line2: "aunque en realidad pasa lo ",
      line3: "contrario, cuando estoy contigo",
      line4: "el tiempo pasa muy rápido",
    },
    {
      line1: "",
      line2: "Es verdad cuando dicen que en ",
      line3: "el momento que te diviertes,",
      line4: "el tiempo pasa volando",
    },

    {
      line1: "",
      line2: " porque es verdad que pasa",
      line3: "me encanta estar contigo,",
      line4: "",
    },

    {
      line1: " ",
      line2: "sea jugando o conversando de ",
      line3: "cualquier cosa",
      line4: "Si es contigo, lo quiero.",
    },

    {
      line1: " ",
      line2: "Gracias por este año,",
      line3: "por ser parte de ella",
      line4: "",
    },


    {
      line1: " ",
      line2: "Con momentos altos y bajos",
      line3: "siguen siendo mi tesoro.",
      line4: "Eres mi persona favorita❤️ ",
    },

  

  ];

  function updateLetterContent(index) {
    $(".line1").text(letters[index].line1);
    $(".line2").text(letters[index].line2);
    $(".line3").text(letters[index].line3);
    $(".line4").text(letters[index].line4);
  }

  envelope.click(function () {
    open();
  });

  btn_open.click(function () {
    open();
  });

  btn_next.click(function () {
    letterIndex = (letterIndex + 1) % letters.length;
    updateLetterContent(letterIndex);
    open();
  });

  btn_reset.click(function () {
    close();
    letterIndex = 0;
    updateLetterContent(letterIndex);
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
  }

  // Initialize with the first letter content
  updateLetterContent(letterIndex);
});
