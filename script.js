      let first=document.querySelectorAll("textarea")[0]
      let second=document.querySelectorAll("textarea")[1]
      let firstvalue=document.querySelectorAll("select")[0]
      let secondvalue=document.querySelectorAll("select")[1]
      let btn=document.querySelector("button")
      let copy0=document.querySelectorAll(".fa-files-o")[0]
      let copy1=document.querySelectorAll(".fa-files-o")[1]
      let reverse=document.querySelector(".fa-exchange")
      let speak0=document.querySelectorAll(".fa-volume-up")[0]
      let speak1=document.querySelectorAll(".fa-volume-up")[1]


        btn.addEventListener("click",function(){
         if(first.value===""){
            second.value="Please, enter a text."
         }
           let api=`https://api.mymemory.translated.net/get?q=${first.value}&langpair=${firstvalue.value}|${secondvalue.value}`
           second.setAttribute("placeholder","Translating...")
           fetch(api).then(res=>res.json())
           .then(data=>{
            second.value=data.responseData.translatedText
            console.log(data)
           })
           .catch(err=>
           second.setAttribute("placeholder","Translation error")
           )
        })

        copy0.addEventListener("click", function(){
         navigator.clipboard.writeText(first.value)
        })

        copy1.addEventListener("click", function(){
         navigator.clipboard.writeText(second.value)
        })

        reverse.addEventListener("click", function(){
         let changeText=second.value
         second.value=first.value
         first.value=changeText

         let changeLanguage=secondvalue.value
         secondvalue.value=firstvalue.value
         firstvalue.value=changeLanguage
        })

        let speech=new SpeechSynthesisUtterance()
        speak0.addEventListener("click",function(){
         speech.lang=firstvalue.value;
         speech.text=first.value
         window.speechSynthesis.speak(speech)
        })

        speak1.addEventListener("click",function(){
         speech.lang=secondvalue.value;
         speech.text=second.value
         window.speechSynthesis.speak(speech)
         console.log(speech)
        })