export async function loadData (url, options) {
  try{
    const response = await fetch(url,options);
    return response.json()
  } catch{

  }

}