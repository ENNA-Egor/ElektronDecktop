const information = document.getElementById('info')
const titleNew = document.getElementById('titleN')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`
titleNew.innerText = "Привет Электрон";

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func()