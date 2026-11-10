const url = 'https://reqres.in/api/users';

// Promise
fetch(url)
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.json();
  })
  .then(data => {
    console.log('Data dari API:');
    console.log(data.data);
  })
  .catch(error => console.error('Error:', error));



  
//Async/await
async function ambilData() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();

    console.log('Data dari API:');
    console.log(data.data);
  } catch (error) {
    console.error('Error:', error);
  }
}
ambilData();