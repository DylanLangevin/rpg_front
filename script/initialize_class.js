// Initialisation des objets pnj
let secretary = new Pnj("Secrétaire", 'character_profile/secretary.png', [12, 126]);//position a définir
let barRegular = new Pnj("Habitué du bar", 'character_profile/bar_regular.png', [300, 300]);//position a définir
let engineer = new Pnj("Ingénieur fou", 'character_profile/engineer.png', [400, 250]);//position a définir
let childhoodFriend = new Pnj("Ami d'enfance", 'character_profile/childhood_friend.png', [12, 126]);//position a définir
let plantJanitor = new Pnj("Gardien d'usine", 'character_profile/plant_janitor.png', [12, 126]);//position a définir
let elder = new Pnj("Ancien du village", 'character_profile/elder.png', [12, 126]);//position a définir
let mayorWife = new Pnj("Femme du maire", 'character_profile/mayor_wife.png', [130, 126]);//position a définir
let foreigner = new Pnj("L'étrangère", 'character_profile/foreigner.png', [12, 126]);//position a définir
let reader = new Pnj("Lectrice de polar", 'character_profile/reader.png', [800, 376]);//position a définir
let librarian = new Pnj("Bibliothécaire", 'character_profile/librarian.png', [800, 126]);//position a définir
let policeFriend = new Pnj("Policier ami", 'character_profile/police_friend.png', [12, 126]);//position a définir
let maleCitizen = new Pnj("Villageois", 'character_profile/male_citizen.png', [180, 156]);//position a définir
let femaleCitizen = new Pnj("Villageoise", 'character_profile/female_citizen.png', [620, 100]);//position a définir

// (pnj porte pour dialogue)
let townHallDoor = new Pnj("Arrière bibliothèque", '', [750, 430])

// Initialisation de l'ojet cops
let police = new Police("Policier", 'character_profile/police.png', [12, 126]);//position a définir

function pnjCityPosition() {
}

function pnjCoffeePosition() {
    ctxBackground.drawImage(maleCitizen.character, 0, 122,frameWidth*scaleDivider, frameHeight*scaleDivider, maleCitizen.position[0], maleCitizen.position[1], frameWidth, frameHeight)
}

function pnjParcPosition() {
    ctxBackground.drawImage(femaleCitizen.character, 0, 130,frameWidth, frameHeight, femaleCitizen.position[0], femaleCitizen.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)
}

function pnjParcRightPosition() {
    ctxBackground.drawImage(engineer.character, 0, 128,frameWidth, frameHeight, engineer.position[0], engineer.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)

}

function pnjParcLeftPosition() {
    ctxBackground.drawImage(mayorWife.character, 0, 192,frameWidth, frameHeight, mayorWife.position[0], mayorWife.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)
}

function pnjLibraryFirstMapPosition() {
    ctxBackground.drawImage(librarian.character, 0, 64,frameWidth, frameHeight, librarian.position[0], librarian.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)
}

function pnjLibrarySecondMapPosition() {
    ctxBackground.drawImage(reader.character, 0, 64,frameWidth, frameHeight, reader.position[0], reader.position[1], frameWidth/scaleDivider, frameHeight/scaleDivider)
}

