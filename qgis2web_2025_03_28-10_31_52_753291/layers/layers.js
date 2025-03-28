var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MeliaHyraBlokD_1 = new ol.format.GeoJSON();
var features_MeliaHyraBlokD_1 = format_MeliaHyraBlokD_1.readFeatures(json_MeliaHyraBlokD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeliaHyraBlokD_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeliaHyraBlokD_1.addFeatures(features_MeliaHyraBlokD_1);
var lyr_MeliaHyraBlokD_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeliaHyraBlokD_1, 
                style: style_MeliaHyraBlokD_1,
                popuplayertitle: 'Melia Hyra Blok D',
                interactive: true,
                title: '<img src="styles/legend/MeliaHyraBlokD_1.png" /> Melia Hyra Blok D'
            });
var format_MeliaHyraBlokE_2 = new ol.format.GeoJSON();
var features_MeliaHyraBlokE_2 = format_MeliaHyraBlokE_2.readFeatures(json_MeliaHyraBlokE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeliaHyraBlokE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeliaHyraBlokE_2.addFeatures(features_MeliaHyraBlokE_2);
var lyr_MeliaHyraBlokE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeliaHyraBlokE_2, 
                style: style_MeliaHyraBlokE_2,
                popuplayertitle: 'Melia Hyra Blok E',
                interactive: true,
                title: '<img src="styles/legend/MeliaHyraBlokE_2.png" /> Melia Hyra Blok E'
            });
var format_MeliaHyraBlokF_3 = new ol.format.GeoJSON();
var features_MeliaHyraBlokF_3 = format_MeliaHyraBlokF_3.readFeatures(json_MeliaHyraBlokF_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeliaHyraBlokF_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeliaHyraBlokF_3.addFeatures(features_MeliaHyraBlokF_3);
var lyr_MeliaHyraBlokF_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeliaHyraBlokF_3, 
                style: style_MeliaHyraBlokF_3,
                popuplayertitle: 'Melia Hyra Blok F',
                interactive: true,
                title: '<img src="styles/legend/MeliaHyraBlokF_3.png" /> Melia Hyra Blok F'
            });
var format_MeliaHyraBlokG_4 = new ol.format.GeoJSON();
var features_MeliaHyraBlokG_4 = format_MeliaHyraBlokG_4.readFeatures(json_MeliaHyraBlokG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeliaHyraBlokG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeliaHyraBlokG_4.addFeatures(features_MeliaHyraBlokG_4);
var lyr_MeliaHyraBlokG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeliaHyraBlokG_4, 
                style: style_MeliaHyraBlokG_4,
                popuplayertitle: 'Melia Hyra Blok G',
                interactive: true,
                title: '<img src="styles/legend/MeliaHyraBlokG_4.png" /> Melia Hyra Blok G'
            });
var format_MeliaHyraBlokC_5 = new ol.format.GeoJSON();
var features_MeliaHyraBlokC_5 = format_MeliaHyraBlokC_5.readFeatures(json_MeliaHyraBlokC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeliaHyraBlokC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeliaHyraBlokC_5.addFeatures(features_MeliaHyraBlokC_5);
var lyr_MeliaHyraBlokC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeliaHyraBlokC_5, 
                style: style_MeliaHyraBlokC_5,
                popuplayertitle: 'Melia Hyra Blok C',
                interactive: true,
                title: '<img src="styles/legend/MeliaHyraBlokC_5.png" /> Melia Hyra Blok C'
            });
var format_MeliiaHyraBlokB_6 = new ol.format.GeoJSON();
var features_MeliiaHyraBlokB_6 = format_MeliiaHyraBlokB_6.readFeatures(json_MeliiaHyraBlokB_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeliiaHyraBlokB_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeliiaHyraBlokB_6.addFeatures(features_MeliiaHyraBlokB_6);
var lyr_MeliiaHyraBlokB_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeliiaHyraBlokB_6, 
                style: style_MeliiaHyraBlokB_6,
                popuplayertitle: 'Meliia Hyra Blok B',
                interactive: true,
                title: '<img src="styles/legend/MeliiaHyraBlokB_6.png" /> Meliia Hyra Blok B'
            });
var format_MeliaHyraBlokA_7 = new ol.format.GeoJSON();
var features_MeliaHyraBlokA_7 = format_MeliaHyraBlokA_7.readFeatures(json_MeliaHyraBlokA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeliaHyraBlokA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeliaHyraBlokA_7.addFeatures(features_MeliaHyraBlokA_7);
var lyr_MeliaHyraBlokA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeliaHyraBlokA_7, 
                style: style_MeliaHyraBlokA_7,
                popuplayertitle: 'Melia Hyra Blok A',
                interactive: true,
                title: '<img src="styles/legend/MeliaHyraBlokA_7.png" /> Melia Hyra Blok A'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MeliaHyraBlokD_1.setVisible(true);lyr_MeliaHyraBlokE_2.setVisible(true);lyr_MeliaHyraBlokF_3.setVisible(true);lyr_MeliaHyraBlokG_4.setVisible(true);lyr_MeliaHyraBlokC_5.setVisible(true);lyr_MeliiaHyraBlokB_6.setVisible(true);lyr_MeliaHyraBlokA_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MeliaHyraBlokD_1,lyr_MeliaHyraBlokE_2,lyr_MeliaHyraBlokF_3,lyr_MeliaHyraBlokG_4,lyr_MeliaHyraBlokC_5,lyr_MeliiaHyraBlokB_6,lyr_MeliaHyraBlokA_7];
lyr_MeliaHyraBlokD_1.set('fieldAliases', {'Kode Blok': 'Kode Blok', 'Cluster': 'Cluster', 'Luas': 'Luas', 'Nomor SHGB': 'Nomor SHGB', 'Tanggal Be': 'Tanggal Be', 'Ex Sertipi': 'Ex Sertipi', 'Nomor SK': 'Nomor SK', 'NIB': 'NIB', 'Blok': 'Blok', });
lyr_MeliaHyraBlokE_2.set('fieldAliases', {'Kode Blok': 'Kode Blok', 'Cluster': 'Cluster', 'Luas': 'Luas', 'Nomor SHGB': 'Nomor SHGB', 'Tanggal Be': 'Tanggal Be', 'Ex Sertipi': 'Ex Sertipi', 'Nomor SK': 'Nomor SK', 'NIB': 'NIB', 'Blok': 'Blok', });
lyr_MeliaHyraBlokF_3.set('fieldAliases', {'Kode Blok': 'Kode Blok', 'Cluster': 'Cluster', 'Luas': 'Luas', 'Nomor SHGB': 'Nomor SHGB', 'Tanggal Be': 'Tanggal Be', 'Ex Sertipi': 'Ex Sertipi', 'Nomor SK': 'Nomor SK', 'NIB': 'NIB', 'Blok': 'Blok', });
lyr_MeliaHyraBlokG_4.set('fieldAliases', {'Kode Blok': 'Kode Blok', 'Cluster': 'Cluster', 'Luas': 'Luas', 'Nomor SHGB': 'Nomor SHGB', 'Tanggal Be': 'Tanggal Be', 'Ex Sertipi': 'Ex Sertipi', 'Nomor SK': 'Nomor SK', 'NIB': 'NIB', 'Blok': 'Blok', });
lyr_MeliaHyraBlokC_5.set('fieldAliases', {'Kode Blok': 'Kode Blok', 'Cluster': 'Cluster', 'Luas': 'Luas', 'Nomor SHGB': 'Nomor SHGB', 'Tanggal Be': 'Tanggal Be', 'Ex Sertipi': 'Ex Sertipi', 'Nomor SK': 'Nomor SK', 'NIB': 'NIB', 'Blok': 'Blok', });
lyr_MeliiaHyraBlokB_6.set('fieldAliases', {'Kode Blok': 'Kode Blok', 'Cluster': 'Cluster', 'Luas': 'Luas', 'Nomor SHGB': 'Nomor SHGB', 'Tanggal Be': 'Tanggal Be', 'Ex Sertipi': 'Ex Sertipi', 'Nomor SK': 'Nomor SK', 'NIB': 'NIB', 'Blok': 'Blok', });
lyr_MeliaHyraBlokA_7.set('fieldAliases', {'Kode Blok': 'Kode Blok', 'Cluster': 'Cluster', 'Luas': 'Luas', 'Nomor SHGB': 'Nomor SHGB', 'Tanggal Be': 'Tanggal Be', 'Ex Sertipi': 'Ex Sertipi', 'Nomor SK': 'Nomor SK', 'NIB': 'NIB', 'Blok': 'Blok', });
lyr_MeliaHyraBlokD_1.set('fieldImages', {'Kode Blok': '', 'Cluster': '', 'Luas': '', 'Nomor SHGB': '', 'Tanggal Be': '', 'Ex Sertipi': '', 'Nomor SK': '', 'NIB': '', 'Blok': '', });
lyr_MeliaHyraBlokE_2.set('fieldImages', {'Kode Blok': '', 'Cluster': '', 'Luas': '', 'Nomor SHGB': '', 'Tanggal Be': '', 'Ex Sertipi': '', 'Nomor SK': '', 'NIB': '', 'Blok': '', });
lyr_MeliaHyraBlokF_3.set('fieldImages', {'Kode Blok': '', 'Cluster': '', 'Luas': '', 'Nomor SHGB': '', 'Tanggal Be': '', 'Ex Sertipi': '', 'Nomor SK': '', 'NIB': '', 'Blok': '', });
lyr_MeliaHyraBlokG_4.set('fieldImages', {'Kode Blok': '', 'Cluster': '', 'Luas': '', 'Nomor SHGB': '', 'Tanggal Be': '', 'Ex Sertipi': '', 'Nomor SK': '', 'NIB': '', 'Blok': '', });
lyr_MeliaHyraBlokC_5.set('fieldImages', {'Kode Blok': '', 'Cluster': '', 'Luas': '', 'Nomor SHGB': '', 'Tanggal Be': '', 'Ex Sertipi': '', 'Nomor SK': '', 'NIB': '', 'Blok': '', });
lyr_MeliiaHyraBlokB_6.set('fieldImages', {'Kode Blok': '', 'Cluster': '', 'Luas': '', 'Nomor SHGB': '', 'Tanggal Be': '', 'Ex Sertipi': '', 'Nomor SK': '', 'NIB': '', 'Blok': '', });
lyr_MeliaHyraBlokA_7.set('fieldImages', {'Kode Blok': '', 'Cluster': '', 'Luas': '', 'Nomor SHGB': '', 'Tanggal Be': '', 'Ex Sertipi': '', 'Nomor SK': '', 'NIB': '', 'Blok': '', });
lyr_MeliaHyraBlokD_1.set('fieldLabels', {'Kode Blok': 'inline label - visible with data', 'Cluster': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Nomor SHGB': 'inline label - visible with data', 'Tanggal Be': 'inline label - visible with data', 'Ex Sertipi': 'inline label - visible with data', 'Nomor SK': 'inline label - visible with data', 'NIB': 'inline label - visible with data', 'Blok': 'inline label - visible with data', });
lyr_MeliaHyraBlokE_2.set('fieldLabels', {'Kode Blok': 'inline label - visible with data', 'Cluster': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Nomor SHGB': 'inline label - visible with data', 'Tanggal Be': 'inline label - visible with data', 'Ex Sertipi': 'inline label - visible with data', 'Nomor SK': 'inline label - visible with data', 'NIB': 'inline label - visible with data', 'Blok': 'inline label - visible with data', });
lyr_MeliaHyraBlokF_3.set('fieldLabels', {'Kode Blok': 'inline label - visible with data', 'Cluster': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Nomor SHGB': 'inline label - visible with data', 'Tanggal Be': 'inline label - visible with data', 'Ex Sertipi': 'inline label - visible with data', 'Nomor SK': 'inline label - always visible', 'NIB': 'inline label - always visible', 'Blok': 'inline label - always visible', });
lyr_MeliaHyraBlokG_4.set('fieldLabels', {'Kode Blok': 'inline label - visible with data', 'Cluster': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Nomor SHGB': 'inline label - visible with data', 'Tanggal Be': 'inline label - visible with data', 'Ex Sertipi': 'inline label - visible with data', 'Nomor SK': 'inline label - visible with data', 'NIB': 'inline label - visible with data', 'Blok': 'inline label - visible with data', });
lyr_MeliaHyraBlokC_5.set('fieldLabels', {'Kode Blok': 'inline label - visible with data', 'Cluster': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Nomor SHGB': 'inline label - visible with data', 'Tanggal Be': 'inline label - visible with data', 'Ex Sertipi': 'inline label - visible with data', 'Nomor SK': 'inline label - visible with data', 'NIB': 'inline label - visible with data', 'Blok': 'inline label - visible with data', });
lyr_MeliiaHyraBlokB_6.set('fieldLabels', {'Kode Blok': 'inline label - visible with data', 'Cluster': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Nomor SHGB': 'inline label - visible with data', 'Tanggal Be': 'inline label - visible with data', 'Ex Sertipi': 'inline label - visible with data', 'Nomor SK': 'inline label - visible with data', 'NIB': 'inline label - visible with data', 'Blok': 'inline label - visible with data', });
lyr_MeliaHyraBlokA_7.set('fieldLabels', {'Kode Blok': 'inline label - visible with data', 'Cluster': 'inline label - visible with data', 'Luas': 'inline label - visible with data', 'Nomor SHGB': 'inline label - visible with data', 'Tanggal Be': 'inline label - visible with data', 'Ex Sertipi': 'inline label - visible with data', 'Nomor SK': 'inline label - visible with data', 'NIB': 'inline label - visible with data', 'Blok': 'inline label - visible with data', });
lyr_MeliaHyraBlokA_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});