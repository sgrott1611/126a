function setup() {
  canvas = createCanvas(300, 300)
  canvas.center()
  video = createCapture(VIDEO)
  Video.hide()
  ;(classifier = m15.imageClassifier(
    'https://teachablemachine.withgoogle.com/models/nHDqoa7O-/model.json'
  )),
    modelLoad()
}

function modeltoaded() {
  console.log('Model Loaded!')
}

function draw() {
  image(video, 0, 0, 300, 300)
  classifier.classify(video, gutResult)
}

function gotResult(error, results) {
  if (error) {
    console.error(error)
    console.log(results)
    document.getElementById('result_arjert_name').InnerHTML = results[0].label
    document
      .getElementById('result_object accuracy')
      .innerHTML.results[0].confidence.toFixed(3)
  }
}
