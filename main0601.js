function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
    
    var vertices = [
	[ -1, 1, 0 ],
	[ -1, -1, 0 ],
	[ 1, -1, 0 ],
	[ 1, 1, 0 ],
	[ -1, 1, 2 ],
	[ -1, -1, 2 ],
	[ 1, -1, 2 ],
	[ 1, 1, 2 ]
    ];

    var faces = [
	[ 0, 1, 2 ],
	[ 0, 2, 3 ],
	[ 0, 5, 1 ],
	[ 0, 5, 4 ],
	[ 0, 4, 7 ],
	[ 0, 7, 3 ],
	[ 3, 2, 6 ],
	[ 3, 7, 6 ],
	[ 4, 5, 6 ],
	[ 4, 7, 6 ],
	[ 5, 1, 2 ],
	[ 5, 6, 2 ]
    ];

    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var id = faces[0];
    var f0 = new THREE.Face3( id[0], id[1], id[2] );

    var v3 = new THREE.Vector3().fromArray( vertices[3] );
    var v4 = new THREE.Vector3().fromArray( vertices[4] );
    var v5 = new THREE.Vector3().fromArray( vertices[5] );
    var v6 = new THREE.Vector3().fromArray( vertices[6] );
    var v7 = new THREE.Vector3().fromArray( vertices[7] );

    var id2 = faces[1];
    var f1 = new THREE.Face3( id2[0], id2[1], id2[2] );

    var id3 = faces[2];
    var f2 = new THREE.Face3( id3[0], id3[1], id3[2] );
    var id4 = faces[3];
    var f3 = new THREE.Face3( id4[0], id4[1], id4[2] );
    var id5 = faces[4];
    var f4 = new THREE.Face3( id5[0], id5[1], id5[2] );
    var id6 = faces[5];
    var f5 = new THREE.Face3( id6[0], id6[1], id6[2] );

    var id7 = faces[6];
    var f6 = new THREE.Face3( id7[0], id7[1], id7[2] );
    var id8 = faces[7];
    var f7 = new THREE.Face3( id8[0], id8[1], id8[2] );
    var id9 = faces[8];
    var f8 = new THREE.Face3( id9[0], id9[1], id9[2] );
    var id10 = faces[9];
    var f9 = new THREE.Face3( id10[0], id10[1], id10[2] );
    var id11 = faces[10];
    var f10 = new THREE.Face3( id11[0], id11[1], id11[2] );
        var id12 = faces[11];
    var f11 = new THREE.Face3( id12[0], id12[1], id12[2] );

    var geometry = new THREE.Geometry();
    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.vertices.push( v3 );
    geometry.vertices.push( v4 );
    geometry.vertices.push( v5 );
    geometry.vertices.push( v6 );
    geometry.vertices.push( v7 );
    geometry.faces.push( f0 );
    geometry.faces.push( f1 );
    geometry.faces.push( f2 );
    geometry.faces.push( f3 );
    geometry.faces.push( f4 );
    geometry.faces.push( f5 );
    geometry.faces.push( f6 );
    geometry.faces.push( f7 );
    geometry.faces.push( f8 );
    geometry.faces.push( f9 );
    geometry.faces.push( f10 );
    geometry.faces.push( f11 );
    

    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;
    geometry.faces[0].color = new THREE.Color( 1, 0 , 0 );
    geometry.faces[2].color = new THREE.Color( 1, 0 , 0 );
    geometry.faces[4].color = new THREE.Color( 1, 0 , 0 );
    geometry.faces[6].color = new THREE.Color( 1, 0 , 0 );
    geometry.faces[8].color = new THREE.Color( 1, 0 , 0 );
    geometry.faces[10].color = new THREE.Color( 1, 0 , 0 );
    

    geometry.computeFaceNormals();
    material.side = THREE.DoubleSide;

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    var light = new THREE.PointLight( 0xffffff );

    light.position.set( 1, 1, 1 );

    scene.add( light );

    loop();

    

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        renderer.render( scene, camera );
    }
}
