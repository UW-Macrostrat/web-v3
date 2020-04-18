import React, { Component } from 'react'
import "./cesium-page.styl"
import "cesium/Widgets/widgets.css"
import * as Cesium from "cesium/Cesium"

class CesiumTestMapPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="cesium-container" id="cesiumContainer"></div>
    )
  }

  componentDidMount() {
    var geology = new Cesium.WebMapTileServiceImageryProvider({
  		url : 'https://macrostrat.org/api/v2/maps/burwell/emphasized/{TileMatrix}/{TileCol}/{TileRow}/tile.png',
  		style : 'default',
  		format : 'image/png',
  		maximumLevel : 19,
      layer: "",
      tileMatrixSetID: "",
  		credit : new Cesium.Credit('UW-Madison, Macrostrat Lab'),
  	})


    var opts = {
      terrainProvider: Cesium.createWorldTerrain(),
      imageryProvider : Cesium.createWorldImagery({
          style : Cesium.IonWorldImageryStyle.AERIAL
      }),
      //baseLayerPicker : false,
      vrButton: true,
      geocoder: false,
      skyAtmosphere: false,
      animation: false,
      timeline: false,
      // Makes cesium not render high fps all the time
      requestRenderMode : true,
      // Use full scene buffer (respecting pixel ratio) if this is false
      useBrowserRecommendedResolution: false
    }


    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzODk2OGM4ZS1mMzlkLTRlNjAtYWQxZS1mODU3YWJjMWFhNzQiLCJpZCI6MjYwODYsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODcxOTU1MTh9._ILy51LI2aF7Nxvas9RQDkhqOP4Tp92uTYAtvewVvNE';
    var viewer = new Cesium.Viewer('cesiumContainer', opts)
    //viewer.resolutionScale = 2
    //viewer.scene.globe.enableLighting = true
    //viewer.canvas.style.imageRendering = false

    var geoLayer = viewer.imageryLayers.addImageryProvider(geology);
    geoLayer.alpha = 0.5;

  }
}

export default CesiumTestMapPage