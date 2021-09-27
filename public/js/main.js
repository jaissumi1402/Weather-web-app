const cityName=document.getElementById("cityName")
const submitBtn = document.getElementById("submitButton");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp_real_value");
const tooday=document.getElementById("tooday")
const today_date = document.getElementById("today_date")


const datahide = document.querySelector(".middle_layer")
const getInfo = async(event)=>{
    
    event.preventDefault();
    var cityVal=cityName.value
    if(cityVal == ""){
         city_name.innerText=`Plz first enter city name in above field`
        //  datahide.classList.add("data_hide")

    }else{
       try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=df956237dc3b0479ce38a28d13a5f663`
        const response = await fetch(url);
        const data = await response.json()
        const arrData=[data]
        // console.log(arrData[0].main.temp)
        // console.log(arrData[0].weather[0].main);
        // console.log(data)
        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`
        temp.innerText = ((arrData[0].main.temp)-(273.15)).toFixed(2);
         
        const temp_mood =arrData[0].weather[0].main;
        if(temp_mood=="Clear"){
            temp_status.innerHTML=
            '<i class="fas fa-sun" style="color: #eccc68"></i>';
        }else if(temp_mood=="Clouds"){
            temp_status.innerHTML=
            '<i class="fas fa-cloud" style="color: #f1f2f6"></i>';
        }else if(temp_mood=="Rain"){
            temp_status.innerHTML=
            '<i class="fas  fa-cloud-rain" style="color: #a4b0be"></i>';
        }
        else{
            temp_status.innerHTML=
            '<i class="fas fa-sun" style="color: #eccc68"></i>';
            
           
            
            
        }
        datahide.classList.remove("data_hide")

       }catch(error){
        city_name.innerText=`please enter city name properly`
        console.log(error)
         datahide.classList.add("data_hide")
       }
    }
    
}
submitBtn.addEventListener("click" , getInfo);