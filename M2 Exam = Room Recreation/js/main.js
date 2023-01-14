const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0, 1000 );

const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera( cameraWidth / -2, cameraWidth / 2, cameraHeight / 2, cameraHeight / -2, 0, 1000 );

camera.position.set(100, 100, 100);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(200, 500, 300);
scene.add(directionalLight); 

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

// ----------------Room Foundation ---------------- //
function createWall(){

	const wall = new THREE.Mesh( 
		new THREE.BoxGeometry(100, 20, 4),  
		new THREE.MeshLambertMaterial({color: "#9F70E3"}) );
	return wall;

}

function createRoom(){

    const room = new THREE.Group();
    
    const rightWall = createWall();
	rightWall.position.set(0, 3.6, -50)
	room.add(rightWall);

    const leftWall = createWall();
	leftWall.rotation.y = 17.28;
	leftWall.position.set(-47.9, 3.6);
	room.add(leftWall);
    
    const floor = new THREE.Mesh( 
		new THREE.PlaneGeometry( 100, 100, 1, 1 ), 
		new THREE.MeshLambertMaterial( { color: "#87E1A2" } ) 
	);
	floor.material.side = THREE.DoubleSide;
	floor.rotation.x = 11;
	floor.position.y= -6.5;
	room.add(floor);

	return room;

}
const room = createRoom();
scene.add(room); 

// ---------------- Lamp 1---------------- //
function createLampStand (){

	const lampStand = new THREE.Group();

	const lampStandCylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( 1, 2, 2, 30 ),
		new THREE.MeshBasicMaterial( {color: 0x1A1E2A} )
	);
	lampStandCylinder.position.y = -6;
	lampStand.add(lampStandCylinder)

	const lampStick = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.2, 6),
		new THREE.MeshLambertMaterial({color:0x1A1E2A})
	);
	lampStick.position.y = -2;
	lampStand.add(lampStick)

	return lampStand;
}

function createLampCover(){

	const geometry = new THREE.CylinderGeometry( 1.5, 2, 4, 30 );
	const material = new THREE.MeshToonMaterial( {color: 0xF8E972} );
	const lampCover = new THREE.Mesh( geometry, material );
	lampCover.position.y = 4;
	return lampCover;
};

function createLamp(){
	const lamp = new THREE.Group();

	const lampStand = createLampStand();
	lamp.add(lampStand);

	const lampCover = createLampCover();
	lamp.add(lampCover);

	const light = new THREE.PointLight( 0xff0000, 1, 100 );
	lamp.add(light);

	return lamp;
}

const lamp = createLamp();
lamp.position.set(-43, 0, 30);
scene.add(lamp);

// ---------------- Lamp 2---------------- //
function createLampStand2 (){

	const lampStand2 = new THREE.Group();

	const lampStand2Cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( 1, 2, 2, 30 ),
		new THREE.MeshBasicMaterial( {color: 0x1A1E2A} )
	);
	lampStand2Cylinder.position.y = -6;
	lampStand2.add(lampStand2Cylinder)

	const lampStick2 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.2, 6),
		new THREE.MeshLambertMaterial({color:0x1A1E2A})
	);
	lampStick2.position.y = -2;
	lampStand2.add(lampStick2)

	return lampStand2;
}

function createLampCover2(){

	const geometry = new THREE.CylinderGeometry( 1.5, 2, 4, 30 );
	const material = new THREE.MeshToonMaterial( {color: 0xF8E972} );
	const lampCover2 = new THREE.Mesh( geometry, material );
	lampCover2.position.y = 4;
	return lampCover2;
};

function createLamp(){
	const lamp2 = new THREE.Group();

	const lampStand2 = createLampStand();
	lamp2.add(lampStand2);

	const lampCover2 = createLampCover();
	lamp2.add(lampCover2);

	const light2 = new THREE.PointLight( 0xff0000, 1, 100 );
	lamp2.add(light2);

	return lamp2;
}

const lamp2 = createLamp();
lamp2.position.set(40, 0, -43);
scene.add(lamp2);

// ---------------- Lamp 3---------------- //
function createLampStand3 (){

	const lampStand3 = new THREE.Group();

	const lampStand3Cylinder = new THREE.Mesh(
		new THREE.CylinderGeometry( 1, 2, 2, 30 ),
		new THREE.MeshBasicMaterial( {color: 0x1A1E2A} )
	);
	lampStand3Cylinder.position.y = -6;
	lampStand3.add(lampStand3Cylinder)

	const lampStick3 = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.2, 6),
		new THREE.MeshLambertMaterial({color:0x1A1E2A})
	);
	lampStick3.position.y = -2;
	lampStand3.add(lampStick3)

	return lampStand3;
}

function createLampCover3(){

	const geometry = new THREE.CylinderGeometry( 1.5, 2, 4, 30 );
	const material = new THREE.MeshToonMaterial( {color: 0xF8E972} );
	const lampCover3 = new THREE.Mesh( geometry, material );
	lampCover3.position.y = 4;
	return lampCover3;
};

function createLamp(){
	const lamp3 = new THREE.Group();

	const lampStand3 = createLampStand();
	lamp3.add(lampStand3);

	const lampCover3 = createLampCover();
	lamp3.add(lampCover3);

	const light3 = new THREE.PointLight( 0xff0000, 1, 100 );
	lamp3.add(light3);

	return lamp3;
}

const lamp3 = createLamp();
lamp3.position.set(-43, 0, -23);
scene.add(lamp3);

// ----------------Bed---------------- //
function createBed(){

	const bed = new THREE.Group();

	//Bed Head Board
	const headBoard = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 15),
		new THREE.MeshLambertMaterial({ color: "#208CF2"  })
	);
	bed.add(headBoard);
	headBoard.position.z = -8;
	
	//Bed Floor
	const bedFrame = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 6, 20),
		new THREE.MeshLambertMaterial({ color: "#208CF2" })
	);
	bedFrame.position.set(0, -3.6, 0);
	bed.add(bedFrame);
	
	//Bed Matress
	const matress = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 4, 5),
		new THREE.MeshLambertMaterial({ color: "#FFFFFF" })
	);
	matress.position.set(0 , -1, -7	);
	bed.add(matress);

	//Bed Blanket
	const blanket = new THREE.Mesh(
		new THREE.BoxBufferGeometry(12, 2, 15),
		new THREE.MeshLambertMaterial({ color: "#00FF00" })
	);
	blanket.position.set(0, -1, 3)
	bed.add(blanket)

	return bed
}

const bed = createBed();
bed.scale.x = 1.2;
bed.rotation.y = -17.29;
bed.position.set(-35, -1, 10);
scene.add(bed);

// ---------------- Window---------------- //
function createGlass(){
	const glassWindow = new THREE.Group();
	
	const glass = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 20),
		new THREE.MeshLambertMaterial({ color: 0xffffff, opacity: 0.5, transparent: true })
	);
	glass.position.z = -0.6;
	glassWindow.add(glass);

	const light = new THREE.PointLight( 0xff0000, 1, 10 );
	glass.add(light);

	return glass;
};

function createWindow(){

	const window = new THREE.Group();

	const curtainRight = new THREE.Mesh(
		new THREE.BoxBufferGeometry(4, 20),
		new THREE.MeshLambertMaterial({ color: 0xF3C3B0 })
	);
	window.add(curtainRight);
	curtainRight.position.set(5.5, 0, -0.5);

	const curtainLeft = new THREE.Mesh(
		new THREE.BoxBufferGeometry(2, 20),
		new THREE.MeshLambertMaterial({ color: 0xF3C3B0 })
	);
	curtainLeft.position.set(-6.5, 0, -0.5);
	window.add(curtainLeft);

	const frameTop = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 0.8),
		new THREE.MeshLambertMaterial({color:0x000000})
	);
	frameTop.position.set(0, 10, -0.5);
	window.add(frameTop);

	const glass = createGlass();
	window.add(glass);

	return window;
};

const fullWindow = createWindow();
fullWindow.rotation.y = -17.29;
fullWindow.position.set(-45.6, 0, -10);
scene.add(fullWindow);

// ---------------- Two Cabinets ---------------- //

function createCabinetHandle() {

	const cabinetHandle = new THREE.Mesh(
		new THREE.BoxBufferGeometry(1, 1, 0.5), 
		new THREE.MeshLambertMaterial({color:0xffffff}));
	cabinetHandle.position.z = 4;
	return cabinetHandle;
}

function createCabinet() {

	const cabinet = new THREE.Group;

	//Cabinet Geometry
	const cabinetBody = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 20, 6),
		new THREE.MeshLambertMaterial({color:"#208CF2"})
	);
	cabinet.add(cabinetBody);

	//Cabinet Divider Black
	const divider = new THREE.Mesh(
		new THREE.BoxBufferGeometry(0.4, 20, 0),
		new THREE.MeshLambertMaterial({color:"#208CF2"})
	);
	divider.position.set(0, 0, 3.1)
	cabinet.add(divider);

	//Cabinet Handle Door | Left
	const leftHandle = createCabinetHandle();
	leftHandle.position.x = 2;
	cabinet.add(leftHandle);
	
	//Cabinet Handle Door | Right
	const rightHandle = createCabinetHandle();
	rightHandle.position.x = -2;
	cabinet.add(rightHandle);

	return cabinet;
};

// ---------------- Cabinets Position ---------------- //
function createCabinetArea(){

	const cabinetArea = new THREE.Group();
	
	//Cabinet 1
	const leftCabinet = createCabinet();
	leftCabinet.position.set(-32, 2, -43);
	cabinetArea.add(leftCabinet);

	//Cabinet 2
	const rightCabinet = createCabinet();
	rightCabinet.position.set(-10, 2, -43);
	cabinetArea.add(rightCabinet);

	return cabinetArea;
}

const cabinetArea = createCabinetArea()
scene.add(cabinetArea);

// ---------------- Living Room Geometry ---------------- //
function createCouchSides(){
	
	const couchSide = new THREE.Mesh(
		new THREE.BoxBufferGeometry(5, 6, 6),
		new THREE.MeshLambertMaterial({ color: "#F78606"})
	);

	return couchSide;
}

function createCouch() {

	const couch = new THREE.Group();

	//Couch Back Wall
	const couchBack = new THREE.Mesh(
		new THREE.BoxBufferGeometry(25, 9, 4),
		new THREE.MeshLambertMaterial({ color: "#F78606"})
	);
	couch.add(couchBack);

	//Couch Left Border
	const couchLeft = createCouchSides();
	couchLeft.position.set(-9.9, -2, 5);
	couch.add(couchLeft);

	//Couch Bottom Floor
	const couchBottom = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 2, 6),
		new THREE.MeshLambertMaterial({ color: "#9B2B0F"})
	);
	couchBottom.position.set(0, -4, 5);
	couch.add(couchBottom);

	//Couch Cushion
	const cushion = new THREE.Mesh(
		new THREE.BoxBufferGeometry(15, 2.5, 6),
		new THREE.MeshLambertMaterial({ color: "#F73506"})
	);
	cushion.position.set(0, -1.8, 5);
	couch.add(cushion);

	//Couch Right Border
	const couchRight = createCouchSides();
	couchRight.position.set(10, -2, 5);
	couch.add(couchRight);

	return couch;
}

// ---------------- Living Room Position ---------------- //
function createTvArea(){

	const tvArea = new THREE.Mesh();

	//Carpet Add-on
	const carpet = new THREE.Mesh(
		new THREE.BoxBufferGeometry(25, 1, 20),
		new THREE.MeshLambertMaterial({ color: "#892A89"})
	);
	carpet.position.set(16, -6.6, -25);
	tvArea.add(carpet);
	
	//Couch Position
	const couch = createCouch();
	couch.position.set(18, 0, -43);
	tvArea.add(couch);
	
	return tvArea; 
}

const tvArea = createTvArea();
scene.add(tvArea);

// ---------------- Indoor Plants ---------------- //
function createPlant(){

	const plant = new THREE.Group();

	const pot = new THREE.Mesh(
		new THREE.CylinderGeometry(2, 1.5, 1.95, 30),
		new THREE.MeshToonMaterial({color: "#A52A2A" } )
	);
	plant.add(pot);

	const bush = new THREE.Mesh(
		new THREE.SphereGeometry( 2, 12, 16 ),
		new THREE.MeshBasicMaterial( { color: "#85F506"	 } )
	);
	bush.position.y = 2 
	plant.add(bush);

	return plant;
}
// Plants position
const plant1 = createPlant();
plant1.position.set(-38, 0, -12);
scene.add(plant1);

const plant2 = createPlant();
plant2.position.set(40, 0, -38);
scene.add(plant2);

const plant3 = createPlant();
plant3.position.set(-37, 0,  42);
scene.add(plant3);

// Carpet under the Bed
const carpet = new THREE.Mesh(
	new THREE.BoxBufferGeometry(30, 1, 30),
	new THREE.MeshLambertMaterial({color:"#410F8E"})
);
carpet.position.set(-26, -6.9, 10);
cabinetArea.add(carpet);

//Render Scene
renderer.render(scene, camera);