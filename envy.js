const convertBtn = document.querySelector(".btn");
convertBtn.addEventListener('click',()=>{

    let txt = document.querySelector("#text").value;
    let speech = new SpeechSynthesisUtterance();
   speech.lang = "en-us";   
   speech.text = txt; 
   speech.rate = 1;
   speech.pitch = 1;
   speech.volume = 1;
   speechSynthesis.speak(speech);
})
document.getElementById('copy').addEventListener('click', ()=>{
    document.getElementById('copy').addEventListener('click', ()=>{
        /* document.getElementById('copyArea').select();
        document.execCommand('copy'); */
        let copyArea = document.getElementById('text');
        navigator.clipboard.writeText(copyArea.value);
    });
});


const pasteButton = document.querySelector('#paste');

pasteButton.addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText()
    document.querySelector('textarea').value += text;
    console.log('Text pasted.');
  } catch (error) {
    console.log('Failed to read clipboard. Using execCommand instead.');
    document.querySelector('textarea').focus();
    const result = document.execCommand('paste')
    console.log('document.execCommand result: ', result);
  }
});
