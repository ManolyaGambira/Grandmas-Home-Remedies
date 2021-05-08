class Information {

    constructor() {
      this.information = createElement('h3');
      this.button = createButton('Next');
    }

    hide(){
      this.button.hide();
      this.information.hide();
    }
  
    display(){
      var title = createElement('H2')
      title.html("Grandma's Home Remedies");
      title.position(displayWidth/2 - 100, 30);
  
      var content = "Hi there! Welcome to Grandma's Home remedies! Are you suffering from any health problems? Then you are at the right place. Grandma's home remedies gives you the proper home remedies for your health issue. This app gives appropriate solutions for the common health problems faced by millions of people. This app is just like your health assistant. Go ahead and click the 'next' button, to continue. "
      this.information.html(content);
      this.information.position(displayWidth/12 - 80, displayHeight/7);
      this.button.position(displayWidth/2, displayHeight/3);
  
      this.button.mousePressed(()=>{
        this.information.hide();
        this.button.hide();
        this.remedy();
      });
  
    }

    remedy(){
      var message = createElement('H2')
      message.html("Here are the list of common problems, to know the remedy click on the button which is associated with your issue.")
      message.position(displayWidth/6 - 100, 100);

      var a1 = createButton("Acne");
      a1.position(displayWidth/4 - 280, displayHeight/6 + 40);
      
      var a2 = createButton("Allergies");
      a2.position(displayWidth/4 - 280, displayHeight/6 + 80);

      var a3 = createButton("Anxiety");
      a3.position(displayWidth/4 - 280, displayHeight/6 + 120);

      var a4 = createButton("Asthma");
      a4.position(displayWidth/4 - 280, displayHeight/6 + 160);

      var c1 = createButton("Chest Pain");
      c1.position(displayWidth/4 - 280, displayHeight/6 + 200);

      var c2 = createButton("Chicken Pox");
      c2.position(displayWidth/4 - 280, displayHeight/6 + 240);

      var c3 = createButton("Common Cold");
      c3.position(displayWidth/4 - 280, displayHeight/6 + 280);

      var c4 = createButton("Cough (Dry)");
      c4.position(displayWidth/4 - 280, displayHeight/6 + 320);

      var c5 = createButton("Cough (Wet)");
      c5.position(displayWidth/4 - 280, displayHeight/6 + 360);

      var c6 = createButton("Constipation");
      c6.position(displayWidth/4 - 280, displayHeight/6 + 400);

      var c7 = createButton("Covid - 19");
      c7.position(displayWidth/4 - 280, displayHeight/6 + 440);

      var d1 = createButton("Dehydration");
      d1.position(displayWidth/4 - 280, displayHeight/6 + 480);

      var d2 = createButton("Diabetes");
      d2.position(displayWidth/4 - 280, displayHeight/6 + 520);

      var d3 = createButton("Depression");
      d3.position(displayWidth/4 - 280, displayHeight/6 + 560);

      var d4 = createButton("Diarrhea");
      d4.position(displayWidth/4 - 280, displayHeight/6 + 600);

      var d5 = createButton("Dizziness");
      d5.position(displayWidth/4 - 100, displayHeight/6 + 40);

      var e1 = createButton("Ear Ache");
      e1.position(displayWidth/4 - 100, displayHeight/6 + 80);

      var e2 = createButton("Eye Itchiness");
      e2.position(displayWidth/4 - 100, displayHeight/6 + 120);

      var e3 = createButton("Eye Pain");
      e3.position(displayWidth/4 - 100, displayHeight/6 + 160);

      var e4 = createButton("Eye Burning");
      e4.position(displayWidth/4 - 100, displayHeight/6 + 200);

      var f1 = createButton("Fever");
      f1.position(displayWidth/4 - 100, displayHeight/6 + 240);

      var f2 = createButton("Flu");
      f2.position(displayWidth/4 - 100, displayHeight/6 + 280);

      var f3 = createButton("Food Poisoning");
      f3.position(displayWidth/4 - 100, displayHeight/6 + 320);

      var f4 = createButton("Fungal Infection");
      f4.position(displayWidth/4 - 100, displayHeight/6 + 360);

      var g1 = createButton("Gall Stones");
      g1.position(displayWidth/4 - 100, displayHeight/6 + 400);

      var h1 = createButton("Head Ache");
      h1.position(displayWidth/4 - 100, displayHeight/6 + 440);

      var h2 = createButton("Heart Ache");
      h2.position(displayWidth/4 - 100, displayHeight/6 + 480);

      var h3 = createButton("High Cholestrol");
      h3.position(displayWidth/4 - 100, displayHeight/6 + 520);

      var i1 = createButton("Indigestion");
      i1.position(displayWidth/4 - 100, displayHeight/6 + 560);

      var i2 = createButton("Insomnia");
      i2.position(displayWidth/4 - 100, displayHeight/6 + 600);

      var d5 = createButton("Kidney Stones");
      d5.position(displayWidth/4 - 100, displayHeight/6 + 40);

      var e1 = createButton("Ear Ache");
      e1.position(displayWidth/4 - 100, displayHeight/6 + 80);

      var e2 = createButton("Eye Itchiness");
      e2.position(displayWidth/4 - 100, displayHeight/6 + 120);

      var e3 = createButton("Eye Pain");
      e3.position(displayWidth/4 - 100, displayHeight/6 + 160);

      var e4 = createButton("Eye Burning");
      e4.position(displayWidth/4 - 100, displayHeight/6 + 200);

      var f1 = createButton("Fever");
      f1.position(displayWidth/4 - 100, displayHeight/6 + 240);

      var f2 = createButton("Flu");
      f2.position(displayWidth/4 - 100, displayHeight/6 + 280);

      var f3 = createButton("Food Poisoning");
      f3.position(displayWidth/4 - 100, displayHeight/6 + 320);

      var f4 = createButton("Fungal Infection");
      f4.position(displayWidth/4 - 100, displayHeight/6 + 360);

      var g1 = createButton("Gall Stones");
      g1.position(displayWidth/4 - 100, displayHeight/6 + 400);

      var h1 = createButton("Head Ache");
      h1.position(displayWidth/4 - 100, displayHeight/6 + 440);

      var h2 = createButton("Heart Ache");
      h2.position(displayWidth/4 - 100, displayHeight/6 + 480);

      var h3 = createButton("High Cholestrol");
      h3.position(displayWidth/4 - 100, displayHeight/6 + 520);

      var i1 = createButton("Indigestion");
      i1.position(displayWidth/4 - 100, displayHeight/6 + 560);

      var i2 = createButton("Insomnia");
      i2.position(displayWidth/4 - 100, displayHeight/6 + 600);

    }
  }
  