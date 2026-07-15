ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([315239.579278, 9964975.769349, 330557.992579, 9974792.295076]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NamaDusun_1 = new ol.format.GeoJSON();
var features_NamaDusun_1 = format_NamaDusun_1.readFeatures(json_NamaDusun_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_NamaDusun_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NamaDusun_1.addFeatures(features_NamaDusun_1);
var lyr_NamaDusun_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NamaDusun_1, 
                style: style_NamaDusun_1,
                popuplayertitle: 'Nama Dusun',
                interactive: false,
    title: 'Nama Dusun<br />\
    <img src="styles/legend/NamaDusun_1_0.png" /> Dusun Banjar Laut<br />\
    <img src="styles/legend/NamaDusun_1_1.png" /> Dusun Banjar Rejo<br />\
    <img src="styles/legend/NamaDusun_1_2.png" /> Dusun Banjar Sari<br />\
    <img src="styles/legend/NamaDusun_1_3.png" /> Dusun Banjar Tengah<br />\
    <img src="styles/legend/NamaDusun_1_4.png" /> Dusun Tanjung Wangi<br />' });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_BatasDusun_3 = new ol.format.GeoJSON();
var features_BatasDusun_3 = format_BatasDusun_3.readFeatures(json_BatasDusun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasDusun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDusun_3.addFeatures(features_BatasDusun_3);
var lyr_BatasDusun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDusun_3, 
                style: style_BatasDusun_3,
                popuplayertitle: 'Batas Dusun',
                interactive: false,
                title: '<img src="styles/legend/BatasDusun_3.png" /> Batas Dusun'
            });
var format_BatasDesa_4 = new ol.format.GeoJSON();
var features_BatasDesa_4 = format_BatasDesa_4.readFeatures(json_BatasDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_4.addFeatures(features_BatasDesa_4);
var lyr_BatasDesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_4, 
                style: style_BatasDesa_4,
                popuplayertitle: 'Batas Desa',
                interactive: false,
                title: '<img src="styles/legend/BatasDesa_4.png" /> Batas Desa'
            });
var format_Peternakan_5 = new ol.format.GeoJSON();
var features_Peternakan_5 = format_Peternakan_5.readFeatures(json_Peternakan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Peternakan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peternakan_5.addFeatures(features_Peternakan_5);
var lyr_Peternakan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peternakan_5, 
                style: style_Peternakan_5,
                popuplayertitle: 'Peternakan',
                interactive: true,
    title: 'Peternakan<br />\
    <img src="styles/legend/Peternakan_5_0.png" /> Ayam<br />\
    <img src="styles/legend/Peternakan_5_1.png" /> Kambing<br />\
    <img src="styles/legend/Peternakan_5_2.png" /> Sapi<br />\
    <img src="styles/legend/Peternakan_5_3.png" /> Gabungan<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_NamaDusun_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_BatasDusun_3.setVisible(true);lyr_BatasDesa_4.setVisible(true);lyr_Peternakan_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NamaDusun_1,lyr_Jalan_2,lyr_BatasDusun_3,lyr_BatasDesa_4,lyr_Peternakan_5];
lyr_NamaDusun_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'FID_Batas_': 'FID_Batas_', 'OBJECTID': 'OBJECTID', 'Batas_Dusu': 'Batas_Dusu', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Nama_Dusun': 'Nama_Dusun', });
lyr_Jalan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BatasDusun_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'FID_Batas_': 'FID_Batas_', 'OBJECTID': 'OBJECTID', 'Batas_Dusu': 'Batas_Dusu', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Nama_Dusun': 'Nama_Dusun', });
lyr_BatasDesa_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Batas_Dusu': 'Batas_Dusu', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Peternakan_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nama Pemilik': 'Nama Pemilik', 'Dusun': 'Dusun', 'Alamat': 'Alamat', 'Jenis Ternak': 'Jenis Ternak', 'Jumlah Ternak': 'Jumlah Ternak', 'Foto Peternakan': 'Foto Peternakan', });
lyr_NamaDusun_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'FID_Batas_': 'TextEdit', 'OBJECTID': 'TextEdit', 'Batas_Dusu': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nama_Dusun': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'STARJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'VLCPRT': 'TextEdit', 'WLYRJL': 'TextEdit', 'TGL_SK': 'TextEdit', 'JLNLYG': 'TextEdit', 'KLSRJL': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_BatasDusun_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'FID_Batas_': 'TextEdit', 'OBJECTID': 'TextEdit', 'Batas_Dusu': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nama_Dusun': 'TextEdit', });
lyr_BatasDesa_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Batas_Dusu': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Peternakan_5.set('fieldImages', {'fid': 'Hidden', 'id': 'Hidden', 'Nama Pemilik': 'TextEdit', 'Dusun': 'TextEdit', 'Alamat': 'TextEdit', 'Jenis Ternak': 'TextEdit', 'Jumlah Ternak': 'TextEdit', 'Foto Peternakan': 'ExternalResource', });
lyr_NamaDusun_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'FID_Batas_': 'no label', 'OBJECTID': 'no label', 'Batas_Dusu': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Nama_Dusun': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BatasDusun_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID_1': 'no label', 'FID_Batas_': 'no label', 'OBJECTID': 'no label', 'Batas_Dusu': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', 'Nama_Dusun': 'no label', });
lyr_BatasDesa_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Batas_Dusu': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Peternakan_5.set('fieldLabels', {'Nama Pemilik': 'inline label - visible with data', 'Dusun': 'inline label - visible with data', 'Alamat': 'inline label - visible with data', 'Jenis Ternak': 'inline label - visible with data', 'Jumlah Ternak': 'inline label - visible with data', 'Foto Peternakan': 'no label', });
lyr_Peternakan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});