const executeApi = async () => {

  let inputVal = document.getElementById("valueImage").value;
  let imageFace = document.getElementById("imageFace");
  let divFace = document.getElementById("divFace");
  divFace.style.border = 'none';
  imageFace.src = inputVal;
  
  const response = await fetch('https://demo.meerkat.com.br/frapi/detect/face?imageUrl='+inputVal, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api_key': '0451c88274cf5a2328b874fe74580343'
    }
  });

  const myJson = await response.json();
  divFace.style.border = 'solid 5px red';
  divFace.style.position = 'absolute';
  divFace.style.marginTop = -((imageFace.height/4)+(imageFace.height/2))+"px";
  divFace.style.marginLeft = ((imageFace.width/2)-(imageFace.width/4) )+"px"
  divFace.style.width = (myJson.faces[0].bottom_right.x - myJson.faces[0].top_left.x)+"px";
  divFace.style.height = (myJson.faces[0].bottom_right.y - myJson.faces[0].top_left.y )+"px";

  console.log(myJson);

}

