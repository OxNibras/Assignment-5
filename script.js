document.getElementById('donation-btn').addEventListener('click', function(){
    document.getElementById('donation-btn').classList.add('bg-lime-300')
    document.getElementById('history-btn').classList.remove('bg-lime-300')
    document.getElementById('history').classList.add('hidden')
    document.getElementById('donation-section').classList.remove('hidden')
})
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donation-btn').classList.remove('bg-lime-300')
    document.getElementById('history-btn').classList.add('bg-lime-300')
    document.getElementById('history').classList.remove('hidden')
    document.getElementById('donation-section').classList.add('hidden')
})
document.getElementById('noakhali-btn').addEventListener('click', function(){
    const noakhaliAmount = getValueFromInput('noakhali-input')
    const balance = getValueFromText('balance')
    const noakhaliBalance = getValueFromText('noakhali-balance');
    

    if(isNaN(noakhaliAmount) || noakhaliAmount <= 0){
        alert('Please enter a valid amount')
    }
    else if(noakhaliAmount > balance){
        alert('You dont have enough money')
    }
    else{
        const newNoakhaliBalance = noakhaliAmount + noakhaliBalance
        document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;
        document.getElementById('noakhali-input').value = '';
        const newBalance = balance - noakhaliAmount;
        document.getElementById('balance').innerText = newBalance;

      const div =  document.createElement('div');
      div.classList.add(
        'shadow',
        'p-8',
        'rounded-xl',
         'border-2',
         'border-gray-300',
         'space-y-5'
      )
      div.innerHTML = `
        <h1 class="text-xl font-bold " > ${noakhaliAmount} Taka is Donated for Flood Relief in Noakhali,Bangladesh</h1>
        <p class="text-gray-500 "> ${new Date().toString()}</p>
      `
      const history = document.getElementById('history');
      history.appendChild(div)
      
      document.getElementById('popup').classList.remove('hidden')
      document.getElementById('popup').classList.add('flex')

      document.getElementById('close-btn').addEventListener('click', function(){
              document.getElementById('popup').classList.remove('flex')
              document.getElementById('popup').classList.add('hidden')
      })
        }
    
    
})
document.getElementById('feni-btn').addEventListener('click' , function(){
    const feniAmount = getValueFromInput('feni-input')

    const feniBalance = getValueFromText('feni-balance')

    const balance = getValueFromText('balance');

    if(isNaN(feniAmount) || feniAmount <= 0){
        alert('Please enter a valid amount')
    }
    else if(feniAmount > balance){
        alert('You dont have enough money')
    }
    else{
        const newFeniBalalance = feniBalance + feniAmount;
        document.getElementById('feni-balance').innerText = newFeniBalalance;
        const newBalance = balance - feniAmount;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('feni-input').value = '';

        const div =  document.createElement('div');
      div.classList.add(
        'shadow',
        'p-8',
        'rounded-xl',
         'border-2',
         'border-gray-300',
         'space-y-5'
      )
      div.innerHTML = `
        <h1 class="text-xl font-bold " > ${feniAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
        <p class="text-gray-500 "> ${new Date().toString()}</p>
      `
      const history = document.getElementById('history');
      history.appendChild(div)
      
       document.getElementById('popup').classList.remove('hidden')
      document.getElementById('popup').classList.add('flex')

      document.getElementById('close-btn').addEventListener('click', function(){
              document.getElementById('popup').classList.remove('flex')
              document.getElementById('popup').classList.add('hidden')
      })
        
    }
    
 
    
})

document.getElementById('protest-btn').addEventListener('click', function(){
    const protestAmount = getValueFromInput('protest-input')
    const protestBalance = getValueFromText('protest-balance')
    const balance = getValueFromText('balance')
    
    if(isNaN(protestAmount) || protestAmount <= 0){
        alert('Please enter a valid amount')
    }
    else if(protestAmount > balance){
        alert('You dont have enough money')
    }
    else{
        const newProtestBalance = protestBalance + protestAmount;
        document.getElementById('protest-balance').innerText = newProtestBalance;
        const newBalance = balance - protestAmount;
        document.getElementById('balance').innerText = newBalance;
        document.getElementById('protest-input').value = '';

        const div =  document.createElement('div');
      div.classList.add(
        'shadow',
        'p-8',
        'rounded-xl',
         'border-2',
         'border-gray-300',
         'space-y-5'
      )
      div.innerHTML = `
        <h1 class="text-xl font-bold " > ${protestAmount} Taka is Donated for Aid for Injured in the Quota Movement
 ,Bangladesh</h1>
        <p class="text-gray-500 "> ${new Date().toString()}</p>
      `
      const history = document.getElementById('history');
      history.appendChild(div)
     document.getElementById('popup').classList.remove('hidden')
      document.getElementById('popup').classList.add('flex')

      document.getElementById('close-btn').addEventListener('click', function(){
              document.getElementById('popup').classList.remove('flex')
              document.getElementById('popup').classList.add('hidden')
      })
    }
})

