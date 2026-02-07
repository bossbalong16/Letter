for(let i=0;i<(window.innerWidth<500?15:25);i++){
      const heart=document.createElement('div');
      heart.className='heart';
      heart.innerHTML='❤';
      heart.style.left=Math.random()*100+'vw';
      heart.style.fontSize=(Math.random()*15+10)+'px';
      heart.style.animationDuration=(Math.random()*3+4)+'s';
      heart.style.animationDelay=Math.random()*5+'s';
      document.body.appendChild(heart);
    }

    const overlay=document.getElementById('overlay');
    const mainImage=document.getElementById('mainImage');
    const question=document.getElementById('question');
    const btnGroup=document.getElementById('btnGroup');
    const noBtn=document.getElementById('noBtn');

    function openLetter(){ overlay.style.display='flex'; }
    function closeLetter(){ overlay.style.display='none'; noBtn.style.position='static'; }

    function moveNoButton(){
      noBtn.style.position='fixed';
      const padding=15;
      const x=Math.random()*(window.innerWidth-noBtn.offsetWidth-padding*2)+padding;
      const y=Math.random()*(window.innerHeight-noBtn.offsetHeight-padding*2)+padding;
      noBtn.style.left=x+'px';
      noBtn.style.top=y+'px';
    }

    function answerYes(){
      mainImage.src='happy.png';
      question.innerHTML="Yay! You're mine now! 🥰🌹✨";
      btnGroup.style.display='none';
      // Confetti
      let duration=3*1000;
      let end=Date.now()+duration;
      (function frame(){
        confetti({particleCount:3, angle:60, spread:55, origin:{x:0}, colors:['#ff4d6d','#ffffff']});
        confetti({particleCount:3, angle:120, spread:55, origin:{x:1}, colors:['#ff4d6d','#ffffff']});
        if(Date.now()<end){ requestAnimationFrame(frame); }
      })();
    }
